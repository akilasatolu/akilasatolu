// Converts every .md file in the repo into a static .html page under dist/.
// - README.md at the repo root becomes dist/index.html
// - every other file keeps its relative path and filename, only the
//   extension changes (blog/en/index.md -> dist/blog/en/index.html)
// - links pointing at another .md file (relative or root-absolute) are
//   rewritten to point at the generated .html file instead

import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import { dirname, join, relative, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const OUT_DIR = join(ROOT, "dist");
const EXCLUDE_DIRS = new Set([".git", "node_modules", "dist", ".github", "scripts"]);

async function findMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (EXCLUDE_DIRS.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findMarkdownFiles(full)));
    } else if (entry.isFile() && extname(entry.name) === ".md") {
      files.push(full);
    }
  }
  return files;
}

function outputPathFor(absSrcPath) {
  const rel = relative(ROOT, absSrcPath);
  const outRel = rel === "README.md" ? "index.html" : rel.replace(/\.md$/, ".html");
  return join(OUT_DIR, outRel);
}

function rewriteMdLinksToHtml(html) {
  // Rewrites href="...something.md" or href="...something.md#anchor" to .html,
  // for both relative paths and root-absolute paths (e.g. /blog/ja/index.md).
  // The root README.md is special-cased since it builds to index.html, not README.html.
  return html.replace(/href="([^"]+?)\.md(#[^"]*)?"/g, (_match, path, anchor = "") => {
    if (path === "/README" || path === "README") {
      return `href="${path.replace(/README$/, "index")}.html${anchor}"`;
    }
    return `href="${path}.html${anchor}"`;
  });
}

function extractTitle(html, fallback) {
  const match = html.match(/<h1[^>]*>(.*?)<\/h1>/s);
  if (!match) return fallback;
  return match[1].replace(/<[^>]+>/g, "").trim() || fallback;
}

function wrapHtml(title, bodyHtml) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
</head>
<body>
${bodyHtml}
</body>
</html>
`;
}

async function build() {
  const mdFiles = await findMarkdownFiles(ROOT);

  for (const srcPath of mdFiles) {
    const raw = await readFile(srcPath, "utf8");
    let bodyHtml = marked.parse(raw);
    bodyHtml = rewriteMdLinksToHtml(bodyHtml);

    const outPath = outputPathFor(srcPath);
    const fallbackTitle = relative(ROOT, srcPath);
    const title = extractTitle(bodyHtml, fallbackTitle);

    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, wrapHtml(title, bodyHtml), "utf8");
    console.log(`${relative(ROOT, srcPath)} -> ${relative(ROOT, outPath)}`);
  }
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});

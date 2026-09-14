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

// GitHub Pages project sites are served under /<repo-name>/, so any
// root-absolute link in the source (e.g. /blog/ja/index.md) needs this
// prefixed onto it to resolve correctly once deployed.
const BASE_PATH = "/akilasatolu";

function rewriteMdLinksToHtml(html) {
  // Rewrites href="...something.md" or href="...something.md#anchor" to .html,
  // for both relative paths and root-absolute paths (e.g. /blog/ja/index.md).
  // The root README.md is special-cased since it builds to index.html, not README.html.
  return html.replace(/href="([^"]+?)\.md(#[^"]*)?"/g, (_match, path, anchor = "") => {
    const isRoot = /(^|\/)README$/.test(path);
    const rewrittenPath = isRoot ? path.replace(/README$/, "index") : path;
    const withBase = rewrittenPath.startsWith("/") ? `${BASE_PATH}${rewrittenPath}` : rewrittenPath;
    return `href="${withBase}.html${anchor}"`;
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
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  body {
    font-family: "IBM Plex Mono", monospace;
    background-color: #0d1117;
    color: #c9d1d9;
    padding: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  a {
    color: #58a6ff;
  }
  code, pre {
    background-color: #161b22;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    max-width: 100%;
  }
  hr {
    border-color: #30363d;
  }
</style>
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

// Converts every .md file in the repo into a static .html page under dist/.
// - README.md at the repo root becomes dist/index.html
// - every other file keeps its relative path and filename, only the
//   extension changes (blog/en/index.md -> dist/blog/en/index.html)
// - links pointing at another .md file (relative or root-absolute) are
//   rewritten to point at the generated .html file instead
// - image files (png, jpg, jpeg, gif, svg, webp) are copied as-is into dist/,
//   keeping their relative path (blog/images/a.png -> dist/blog/images/a.png)

import { readFile, writeFile, mkdir, readdir, copyFile } from "node:fs/promises";
import { dirname, join, relative, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const OUT_DIR = join(ROOT, "dist");
const EXCLUDE_DIRS = new Set([".git", "node_modules", "dist", ".github", "scripts"]);
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"]);

async function findFiles(dir, extensions) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (EXCLUDE_DIRS.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findFiles(full, extensions)));
    } else if (entry.isFile() && extensions.has(extname(entry.name))) {
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
    max-width: 80ch;
    margin: 0 auto;
    padding: 32px 20px 64px;
    line-height: 1.8;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  a {
    color: #58a6ff;
    text-underline-offset: 0.2em;
  }
  h1, h2, h3, h4 {
    line-height: 1.4;
  }
  h1 {
    margin: 1.2em 0 0.8em;
  }
  h2 {
    margin: 2.2em 0 0.8em;
    padding-bottom: 0.3em;
    border-bottom: 1px solid #30363d;
  }
  h3 {
    margin: 1.8em 0 0.6em;
  }
  p, ul, ol, table, pre, details {
    margin: 0 0 1.2em;
  }
  ul, ol {
    padding-left: 1.6em;
  }
  li + li {
    margin-top: 0.4em;
  }
  li > ul, li > ol {
    margin: 0.4em 0 0;
  }
  table {
    display: block;
    max-width: 100%;
    overflow-x: auto;
    border-collapse: collapse;
  }
  th, td {
    padding: 0.5em 0.9em;
    border: 1px solid #30363d;
    text-align: left;
    vertical-align: top;
  }
  th {
    background-color: #161b22;
    font-weight: 600;
  }
  code, pre {
    background-color: #161b22;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    max-width: 100%;
  }
  code {
    padding: 0.15em 0.35em;
    border-radius: 4px;
  }
  pre {
    padding: 1em;
    border: 1px solid #30363d;
    border-radius: 6px;
    line-height: 1.6;
  }
  pre code {
    padding: 0;
    border-radius: 0;
    background: none;
  }
  details {
    padding: 0.2em 0;
  }
  summary {
    cursor: pointer;
  }
  details[open] > summary {
    margin-bottom: 0.8em;
  }
  hr {
    border: 0;
    border-top: 1px solid #30363d;
    margin: 2em 0;
  }
  img {
    max-width: 100%;
    height: auto;
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
  const mdFiles = await findFiles(ROOT, new Set([".md"]));

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

  const imageFiles = await findFiles(ROOT, IMAGE_EXTENSIONS);

  for (const srcPath of imageFiles) {
    const outPath = join(OUT_DIR, relative(ROOT, srcPath));
    await mkdir(dirname(outPath), { recursive: true });
    await copyFile(srcPath, outPath);
    console.log(`${relative(ROOT, srcPath)} -> ${relative(ROOT, outPath)}`);
  }
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});

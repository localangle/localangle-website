#!/usr/bin/env node
// Usage: npm run new-post "Your post title"
import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const title = process.argv.slice(2).join(" ").trim();
if (!title) {
  console.error('Usage: npm run new-post "Your post title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/['’]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

const date = new Date().toISOString().slice(0, 10);
const dir = join(process.cwd(), "src", "content", "blog");
const file = join(dir, `${slug}.md`);

if (existsSync(file)) {
  console.error(`Already exists: ${file}`);
  process.exit(1);
}

mkdirSync(dir, { recursive: true });
writeFileSync(
  file,
  `---
title: "${title.replace(/"/g, '\\"')}"
date: ${date}
description: ""
draft: true
---

`
);

console.log(`Created ${file}`);
console.log("Remove `draft: true` when you're ready to publish.");

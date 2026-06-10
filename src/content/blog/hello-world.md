---
title: "A sample post (delete me)"
date: 2026-06-10
description: "A placeholder post showing what writing looks like on this site."
draft: true
---

This is a placeholder post kept in the repo for styling and reference. It is
not published (`draft: true` in the frontmatter keeps it out of the built site).

Posts are plain markdown files with a little frontmatter at the top:

```yaml
---
title: "Your title here"
date: 2026-06-10
description: "Optional one-liner used in RSS and meta tags."
---
```

To start a new post from the command line:

```bash
npm run new-post "Your title here"
```

That's it. Write, commit, push. The site rebuilds itself.

## Some formatting

Body text is set in Newsreader. You get all the usual markdown affordances —
**bold**, *italics*, `inline code`, [links](https://localangle.co), and:

> Blockquotes, for when someone else said it better.

Add `draft: true` to the frontmatter to keep a post out of the built site
while you're working on it.

# localangle.co

The Local Angle website. Static site built with [Astro](https://astro.build),
deployed to GitHub Pages. Everything is administered from the command line —
no CMS, no logins.

## Day-to-day

```bash
npm run dev        # local preview at http://localhost:4321
npm run new-post "Some title"   # create a new draft post
npm run build      # production build to dist/
```

## Writing a post

```bash
npm run new-post "LLMs understand geography better than you think"
```

That creates `src/content/blog/llms-understand-geography-better-than-you-think.md`
with frontmatter filled in and `draft: true` set. Write it in markdown, then
remove the `draft` line (or set it to `false`) when it's ready.

Frontmatter fields:

| Field         | Required | Notes                                  |
| ------------- | -------- | -------------------------------------- |
| `title`       | yes      |                                        |
| `date`        | yes      | `YYYY-MM-DD`; controls sort order      |
| `description` | no       | Used in RSS and meta tags              |
| `draft`       | no       | `true` keeps the post out of the build |

The filename is the URL slug: `foo-bar.md` → `localangle.co/blog/foo-bar`.

## Publishing

```bash
git add . && git commit -m "Post: some title" && git push
```

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys
the site on every push to `main`. Nothing else to do.

### One-time GitHub Pages setup

1. Push this repo to GitHub.
2. In the repo settings → Pages, set **Source** to **GitHub Actions**.
3. Point DNS for `localangle.co` at GitHub Pages (A records for the apex:
   `185.199.108.153`, `.109.`, `.110.`, `.111.`), and add the custom domain in
   the Pages settings. The `public/CNAME` file keeps the domain attached
   across deploys.
4. When `localangle.co` is live, remove `ASTRO_BASE: /localangle-website` from
   `.github/workflows/deploy.yml` and redeploy. That env var is only needed for
   the interim `github.io/localangle-website` preview URL.

## Editing the site itself

- `src/pages/index.astro` — homepage statement + recent writing
- `src/pages/work-with-us.astro` — the Work With Us page
- `src/layouts/Base.astro` — header, nav, footer (the Backfield link lives here)
- `src/styles/global.css` — all styling
- `src/components/Mark.astro` and `public/favicon.svg` — the logo mark

## Before you launch

- The sample post (`src/content/blog/hello-world.md`) stays in the repo as a draft for styling reference; it is not published
- Confirm the contact email on the Work With Us page (currently `hello@localangle.co`)
- Point the Backfield nav link at the real product site when it exists
  (in `src/layouts/Base.astro`)

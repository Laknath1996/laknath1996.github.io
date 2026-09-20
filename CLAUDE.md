# CLAUDE.md

Personal website for Ashwin De Silva (PhD candidate, JHU BME). Replaces an al-folio Jekyll site at `laknath1996.github.io`. Goal: simple, retro, Bactra-style, readable on phone and laptop, and very quick to update.

## Stack
- Eleventy 3 (ESM, `"type": "module"`), Nunjucks layouts, hand-written CSS, **no client-side JS**.
- Content lives in YAML data files and Markdown. Nothing is hard-coded in templates.
- Math: `markdown-it` + `@mdit/plugin-katex`, rendered **at build time**. KaTeX CSS/fonts are copied from `node_modules/katex/dist` to `/assets/katex/` and linked only on pages with `math: true`.
- Hosting target: GitHub Pages (user site `laknath1996.github.io`) deployed via GitHub Actions.

## Commands
- `npm install` once, then `npm start` (dev server at http://localhost:8080, live reload, drafts visible).
- `npm run build` writes `_site/` (production; drafts excluded).
- `npm run new-post "Title"` scaffolds `src/blog/posts/YYYY-MM-DD-slug.md` with `draft: true`.

## Layout
- `eleventy.config.js`: YAML data extension, markdown-it+KaTeX, syntax highlight, Atom feed (`/blog/feed.xml`), filters (`boldMe`, `niceDate`, `year`, `head`, `startsWith`), passthrough copies, `post` collection, draft preprocessor.
- `src/_data/`: `site.yml` (name, tagline, email, links), `news.yml`, `awards.yml`, `publications.yml` (`selected: true` shows on home), `teaching.yml`.
- `src/_includes/`: `base.njk` (shell + nav + footer), `home.njk` (home layout: headshot, bio, news, awards, pubs, teaching), `post.njk`, partials `news-list.njk`, `pub-list.njk`.
- `src/index.md`: the bio text (Markdown body rendered inside `home.njk`).
- Pages: `src/news.njk`, `src/publications.njk`, `src/cv.njk` (embeds `/cv.pdf`), `src/blog/index.njk`.
- Posts: `src/blog/posts/*.md`. `posts.11tydata.js` sets layout `post.njk` and permalink `/blog/<slug>/`.
- `src/assets/style.css` (all styling; CSS variables at top; dark mode via `prefers-color-scheme`; one `max-width: 600px` breakpoint), `src/assets/headshot.jpg`.
- `.github/workflows/deploy.yml`: builds and deploys on push to `main`, `repository_dispatch: cv-updated`, nightly cron, and manual dispatch. `docs/cv-repo-notify.yml` is a template to copy into the CV repo.
- `README.md` has the user-facing update instructions.

## CV sync design
Overleaf → GitHub sync to a CV repo (`CV_REPO` env in `deploy.yml`, currently `laknath1996/cv`, root file `CV_TEX`, currently `main.tex`). The CV repo's workflow pings this repo with `repository_dispatch`. `deploy.yml` checks out the CV repo, compiles it with `xu-cheng/latex-action`, and copies the PDF to `src/cv.pdf` before building. `src/cv.pdf` is git-ignored; for local preview, copy any PDF there.

## Gotchas
- `markdownTemplateEngine` is `false`, so Markdown is not passed through Nunjucks. That keeps LaTeX braces like `{{` safe, but it also means `{{ }}` doesn't work in `.md` files. Permalinks in `.md` therefore must use `eleventyComputed` (JS), not `{{ }}` strings in JSON data.
- Eleventy does not support `draft` natively; the preprocessor in `eleventy.config.js` skips drafts only when `ELEVENTY_RUN_MODE === "build"`.
- `_site/` is not cleaned between dev builds; `rm -rf _site` before trusting a build check (a stale dir once hid a permalink bug).
- `js-yaml` must be imported as `import * as yaml`.
- News item text is inserted with `| safe`, so plain HTML (e.g. `<a>`) works there; Markdown does not.
- Advisor names in the bio are intentionally unlinked (URLs were unverified).

## Status (as of 2026-09-20)
Done and verified locally: all pages, KaTeX math, draft handling, feed, responsive layout at laptop and ~390px, dark mode CSS.
Not done yet:
- Nothing committed (files are staged in a fresh git repo, branch `main`, no remote).
- Not deployed: need to push to `laknath1996.github.io` (back up the old repo first) and set Pages source to "GitHub Actions".
- CV pipeline untested: needs Overleaf GitHub sync, CV repo name/root file confirmed, `notify-site.yml` copied to the CV repo, and a `SITE_DISPATCH_TOKEN` secret.
- Open content questions for the user: the ICML paper is listed as 2023 (old site said 2024; the PDF is ICML 2023 proceedings); all 8 awards are shown; teaching section is included though not requested.

## Conventions
- Keep the site minimal: no JS frameworks, no CSS frameworks, no CMS. Prefer adding data to YAML over changing templates.
- Match the existing retro style (serif body, monospace labels, single column, `max-width: 42em`).
- Do not commit or push unless asked.

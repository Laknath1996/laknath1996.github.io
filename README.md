# Personal website

Eleventy static site, plain CSS, no client-side JS. Math is rendered with KaTeX at build time.

## Everyday updates
| Task | Do this |
|---|---|
| News | Add a line at the top of `src/_data/news.yml` |
| Publication | Add a block to `src/_data/publications.yml` (`selected: true` shows it on the home page) |
| Award / teaching | `src/_data/awards.yml`, `src/_data/teaching.yml` |
| Bio | Edit the text in `src/index.md` |
| Blog post | `npm run new-post "Title"`, write Markdown (`$x^2$`, `$$...$$`), delete the `draft: true` line to publish |
| Name, links, email | `src/_data/site.yml` |

Commit and push to `main`. GitHub Actions builds and deploys in about a minute. You can do all of this from the GitHub web editor, including on a phone.

## Local preview
```
npm install
npm start        # http://localhost:8080, live reload, drafts visible
npm run build    # production build into _site/
```
For the CV page to show locally, copy a PDF to `src/cv.pdf` (git-ignored; CI supplies the real one).

## CV sync (Overleaf -> site)
1. Overleaf: Menu -> GitHub -> link the CV project to the repo named in `CV_REPO` in `.github/workflows/deploy.yml`.
2. Copy `docs/cv-repo-notify.yml` into that repo as `.github/workflows/notify-site.yml` and add the `SITE_DISPATCH_TOKEN` secret (see the file header).
3. After editing the CV in Overleaf, push it to GitHub from Overleaf. The site workflow compiles the LaTeX and republishes `/cv.pdf`. A nightly run also picks up any missed pushes.

Without Overleaf sync: remove the CV steps from `deploy.yml` and commit a `cv.pdf` to `src/` (also remove it from `.gitignore`).

## One-time GitHub setup
Repo settings -> Pages -> Source: **GitHub Actions**.

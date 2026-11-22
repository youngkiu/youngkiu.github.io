# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Homepage for Easy Life Lab (https://easylifelab.site), a static site on GitHub Pages. It lists the team's mobile apps, hosts a privacy policy for each one, and has store download pages for most of them (카드 뭐 내지? and 맛도리 지도 have none). The current app list, grouped by category, is in `README.md`. All content is Korean (`lang="ko"`) in a formal, polite tone.

## Development

There is no build, lint, or test tooling: the site is plain HTML, CSS, and vanilla JS. Merging to `master` deploys through GitHub Pages, and the custom domain is set in `CNAME`.

- Local preview: `python3 -m http.server 8000`, then open http://localhost:8000
- Changes go through feature branches and PRs into `master` (`feature/<app>-privacy`, `feature/<app>-homepage`, `fix/...`). Commit messages are in Korean.

## Architecture

- **`index.html`**: the only landing page. Apps are grouped in `<div class="app-category" data-category="invest|life|map">` blocks. Each app is an `.app-card` with an icon, title, optional badge (`<span class="app-badge hot|new|popular">`), description, `.tech-tag`s, and store badge links.
- **`js/main.js`**: handles category tab filtering (`.category-tab[data-category]`), URL anchors `#apps-<category>`, the active state of the mobile bottom nav, and scroll animations. Anchors are checked against the `validCategories` array, so a new category has to be added there.
- **`css/style.css`**: mobile-first styles shared by the index, privacy, and support pages. Design tokens live in `:root` (warm coral palette, `--primary-color: #FF7B54`), with a `prefers-color-scheme: dark` override. Breakpoints are `min-width: 768px` and `1024px`. `css/privacy.css` adds styles for the privacy pages.
- **`privacy/index.html`**: a table of contents plus a short summary section for every app, each linking to that app's own page at `privacy/<app_name>.html`.
- **`download/<app-name>.html`**: standalone pages with their own inline CSS and JS and no shared stylesheet. They detect iOS or Android from the user agent and redirect to the right store, so one link works on either OS. New ones are copied from a recent compact page such as `stock-trend-signal.html`.
  - Every download page has `<meta name="robots" content="noindex">` and is left out of the sitemap. Googlebot's smartphone user agent contains `Android`, so it gets redirected too, and the page can't be indexed as itself.
  - Every download page has OG tags so shared links (KakaoTalk and similar) show a preview. `description` and `og:description` copy the app's card description in `index.html`. `og:image` is the original icon `images/<app>_icon.png`, or `images/og_image.png` if the icon is under 200px. `twitter:card` is `summary` for a square icon and `summary_large_image` for the landscape `og_image.png`, since `summary` crops the image to a square.
- **`apps/invest.html`**: a sharing landing page with its own OG image (`images/og_invest.png`) that JS-redirects to `/#apps-invest`. It redirects every visitor, Googlebot included, so like the download pages it has `noindex` and is left out of the sitemap.
- **`lab/`**: standalone ML visualization pages. They are not linked from the homepage but are listed in the sitemap.
- **`sitemap.xml`**: maintained by hand. It lists only indexable pages: the home page, every privacy page, support, and `lab/`. Each entry has a `lastmod`, the date of the page's last commit. When you change a listed page, update its `lastmod` in the same PR.

## Naming Conventions

Each app has one slug, written in different forms depending on the file. Newer apps follow this pattern (example: stock trend signal):

| File | Form |
|---|---|
| Privacy page | `privacy/stock_trend_signal.html` (snake_case) |
| Section id in `privacy/index.html` | `#stock-trend-signal` |
| Download page | `download/stock-trend-signal.html` (kebab-case) |
| Icons | `images/stock_trend_signal_icon.png` (original) and `images/optimized/stock_trend_signal_icon_optimized.png` (used by the pages) |
| Android package | `com.youngkiu.stock_trend_signal` |

Older apps don't follow it. Copy their names from the existing files instead of building them from the pattern:

| App | Exceptions |
|---|---|
| 복용일지 | privacy `medication_diary.html`, download `pilltime.html`, package `com.youngkiu.pilltime`. The homepage card uses `app_logo.png` in the repo root, while the download page uses `images/optimized/medication_diary_icon_optimized.png`. |
| 종점 출발 버스 | privacy `busdeparture.html`, icon `busdeparture_icon*.png`, package `com.youngkiu.busdeparture` (the download page is still `bus-departure.html`) |
| 콜키지 맵 | package `com.youngkiu.corkage_free` |
| 다가오는 배당락 | package `com.youngkiu.upcoming_dividend.upcoming_dividend` |
| Toilet Password | package `com.youngki_home.toilet_password` |

## Adding a New App

This happens in two separate PRs, at different times. Do only the stage that was asked for.

1. **Privacy policy**, before store submission, because store review needs its URL. Add only `privacy/<app_name>.html`, copied from a recent one, and update the `최종 업데이트` and `시행일` dates.
2. **Homepage**, after store approval, once the store URLs exist. Put all of these in one PR:
   - an app card in the right category in `index.html` (new apps get the `NEW` badge)
   - the original icon in `images/` and the optimized icon in `images/optimized/`
   - `download/<app-name>.html`, which needs both store URLs and the `noindex` and OG tags described above
   - a TOC entry and summary section in `privacy/index.html`
   - a `sitemap.xml` entry with `lastmod` for the privacy page, plus updated `lastmod` values for `/` and `/privacy/` (download pages are not listed)
   - the app in the matching category table in `README.md`

## Content Rules

- Avoid exaggerated wording, especially for the investment apps. Don't use "실시간" or "놓치지 마세요/않습니다"; use "자동으로" or "수시" instead. New investment app descriptions use the pattern "…을 자동으로 모니터링하고, 주요 변동 시 푸시 알림으로 알려줍니다." Older cards have their own wording with app-specific details, so don't rewrite them to fit the pattern.
- Make sure every file you create or edit ends with a trailing newline. About 20 older files are missing one, including templates you might copy, and the missing newline keeps coming up in review.
- The 복용일지 card has a `<details class="google-integration">` block that discloses how Google Sign-In and Google Calendar data are used. Keep it when editing that card.
- Site-wide: Google Analytics `G-7N4QX98Z7M`, AdMob verification in `ads.txt` and `app-ads.txt`, and the contact email `easylifelab.developer@gmail.com`.

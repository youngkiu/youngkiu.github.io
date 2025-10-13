# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official homepage for Easy Life Lab, a mobile app development team. The website is hosted on GitHub Pages and showcases 5 mobile applications with Korean content. The site serves as a landing page with app information, privacy policies, and customer support pages.

## Technology Stack

- **Static Website**: HTML5, CSS3, JavaScript (vanilla)
- **Hosting**: GitHub Pages
- **Domain**: easylifelab.site
- **Fonts**: Noto Sans KR (Google Fonts)
- **Icons**: Font Awesome 6.4.0
- **Analytics**: Google Analytics (G-7N4QX98Z7M)
- **Monetization**: Google AdMob (ads.txt)

## Site Structure

```
/
├── index.html              # Main homepage (currently focused on "복용일지" app)
├── css/
│   ├── style.css          # Main stylesheet with CSS variables
│   └── privacy.css        # Privacy policy page styles
├── js/
│   └── main.js            # Mobile menu, smooth scrolling, scroll animations
├── images/                # App icons and store badges
│   └── optimized/         # Optimized versions of images
├── privacy/               # Privacy policy pages for each app
│   ├── index.html         # Privacy policy index
│   ├── medication_diary.html
│   ├── busdeparture.html
│   ├── card_alarm.html
│   ├── tasty_map.html
│   └── toilet_password.html
├── support/               # Customer support pages
├── download/              # App download landing pages
└── ads.txt               # Google AdMob publisher file
```

## Featured Applications

1. **복용일지** (Medication Diary) - Main focus of current homepage
   - Tech: i18n, Firebase Auth, Google Sign-In, Google Calendar API
   - Platforms: Android, iOS

2. **종점 출발 버스** (Bus Departure)
   - Tech: GraphQL, MongoDB
   - Platforms: Android, iOS

3. **카드 뭐 내지?** (Card Alarm)
   - Tech: App Push, MariaDB
   - Platform: Android only

4. **맛도리 지도** (Tasty Map)
   - Tech: GIS, Web Crawler, PostgreSQL (PostGIS)
   - Platforms: Android, iOS

5. **Toilet Password**
   - Tech: Flutter
   - Platform: Android only

## Development Workflow

### No Build Process
This is a static website with no build step. Changes to HTML, CSS, or JS are immediately live after pushing to the master branch.

### Deployment
- **Branch**: `master` (main branch)
- **Hosting**: Automatic deployment via GitHub Pages
- **DNS**: Custom domain configured via CNAME file

### Testing Changes Locally
```bash
# Simple HTTP server for local testing
python3 -m http.server 8000

# Or with Node.js
npx http-server
```

Then visit http://localhost:8000

### Git Workflow
```bash
# Check status
git status

# Stage and commit changes
git add .
git commit -m "Description of changes"

# Push to GitHub (auto-deploys to GitHub Pages)
git push origin master
```

## Key Design Patterns

### CSS Variables (css/style.css:2-11)
The site uses CSS custom properties for consistent theming:
- `--primary-color: #4285f4` (Google Blue)
- `--secondary-color: #34a853` (Google Green)
- `--accent-color: #ea4335` (Google Red)
- Color scheme follows Google Material Design principles

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 480px (mobile)
- Mobile menu toggle with fixed positioning (css/style.css:523-595)

### Scroll Effects (js/main.js)
- Fixed header with scroll-based styling (line 43-57)
- Animate-on-scroll for app cards and sections (line 59-79)
- Smooth scrolling for anchor links (line 22-41)

### SEO and Social Media
The homepage includes:
- Open Graph tags for Facebook
- Twitter Card metadata
- Structured Data (JSON-LD) for app information
- Canonical URLs
- Google Analytics tracking

## Important URLs and Links

### Store Links
- Google Play: `https://play.google.com/store/apps/details?id=`
- App Store: `https://apps.apple.com/kr/app/`

### Store Badge Images
- Google Play: `images/optimized/google_play_badge_optimized.png`
- App Store: `images/optimized/app_store_badge_optimized.png`

Note: Store badge sizing is handled in css/style.css:373-392

## Content Management

### Adding a New App
1. Add app card to index.html section `#apps` following existing structure
2. Add app icon to `images/` (80x80px display size)
3. Create privacy policy page in `privacy/[app-name].html`
4. Update footer links in index.html
5. Update privacy/index.html with new app section

### Updating Privacy Policies
Each app has its own privacy policy HTML file in the `privacy/` directory. They all:
- Share common header/footer structure
- Link back to main site
- Include last updated date
- Follow Korean privacy law requirements

## Korean Language Content
All content is in Korean (language code: `ko`). When editing:
- Maintain Korean text encoding (UTF-8)
- Keep formal/polite tone consistent with existing content
- Privacy policies follow Korean Personal Information Protection Act requirements

## Contact Information
- Email: youngkiu@gmail.com
- Contact appears in footer and privacy policies

## Google Services Integration
The 복용일지 (Medication Diary) app prominently features Google integration:
- Google Sign-In for authentication
- Google Calendar API for syncing medication records
- Disclosure of data usage in the Google integration section (index.html:119-125)
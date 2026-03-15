# SEO Checklist - T2MED

## 1) What was fixed

- Added `public/robots.txt` that allows crawling and references the sitemap.
- Added `public/sitemap.xml` with absolute URLs for key public routes:
  - `https://t2med.netlify.app/`
  - `https://t2med.netlify.app/tracks-details`
  - `https://t2med.netlify.app/blog`
- Strengthened baseline SEO tags in `public/index.html`:
  - Title
  - Meta description
  - Meta robots
  - Canonical URL
  - Open Graph tags
  - Twitter title/description/image
- Added SPA route-level SEO management via `src/hooks/usePageSeo.js` so each major route sets:
  - Page title
  - Description
  - Canonical
  - OG URL/title/description/image
  - Twitter title/description/image
- Added structured data (JSON-LD) on homepage:
  - `Event` schema
  - `Organization` schema
- Improved homepage heading hierarchy so there is one clear primary `H1` and section headings are demoted to `H2` where needed.
- Updated Netlify redirects (`public/_redirects`) so `robots.txt` and `sitemap.xml` are explicitly served before SPA fallback.

## 2) What still requires manual action

- Replace placeholder venue address in Event schema:
  - File: `src/containers/Home/HomePage.jsx`
  - Field: `location.address.streetAddress`
  - Current value: `TODO: Add full venue street address`
- Confirm event date/time timezone values are exact and update if needed:
  - `startDate`, `endDate` in Event schema.
- Replace `/blog` placeholder content with real articles before promoting that route heavily in search.
- If you move from Netlify subdomain to a custom domain, update all canonical, OG URL, robots sitemap URL, and sitemap `<loc>` values.

## 3) How to submit the site to Google Search Console

1. Go to Google Search Console: `https://search.google.com/search-console`.
2. Add property:
   - Recommended: Domain property (if you have a custom domain).
   - For Netlify subdomain: URL-prefix property for `https://t2med.netlify.app/`.
3. Complete ownership verification (HTML tag, DNS, or other supported method).

## 4) How to request indexing

1. In Search Console, open **URL Inspection**.
2. Test these URLs one by one:
   - `https://t2med.netlify.app/`
   - `https://t2med.netlify.app/tracks-details`
   - `https://t2med.netlify.app/blog`
3. Click **Request Indexing** for each important URL.

## 5) How to verify robots.txt and sitemap are accessible

- Open in browser and confirm HTTP 200:
  - `https://t2med.netlify.app/robots.txt`
  - `https://t2med.netlify.app/sitemap.xml`
- In Search Console:
  1. Go to **Sitemaps**.
  2. Submit: `https://t2med.netlify.app/sitemap.xml`.
  3. Confirm status changes to success.
- Optional command-line checks:
  - `curl -I https://t2med.netlify.app/robots.txt`
  - `curl -I https://t2med.netlify.app/sitemap.xml`

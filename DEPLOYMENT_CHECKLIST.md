# Deployment Checklist

## Pre-Deployment

- [ ] Review all pages for content accuracy
- [ ] Test all links (internal and external)
- [ ] Verify images are loading correctly
- [ ] Check mobile responsiveness
- [ ] Set up contact form (see CONTACT_FORM_SETUP.md)
- [ ] Update sitemap.xml with your actual domain
- [ ] Update robots.txt with your actual domain
- [ ] Review meta tags and Open Graph tags

## Git Repository Setup

- [ ] Initialize git repository
- [ ] Add all files: `git add .`
- [ ] Commit: `git commit -m "Initial commit - Static site for Liquor & Wine Outlet"`
- [ ] Create repository on GitHub/GitLab/Bitbucket
- [ ] Push to remote: `git push -u origin main`

## Render Deployment

- [ ] Create Render account
- [ ] Connect Git repository
- [ ] Create new Static Site
- [ ] Configure:
  - [ ] Name: `liquor-wine-outlet`
  - [ ] Branch: `main`
  - [ ] Build Command: (leave empty or `echo "No build needed"`)
  - [ ] Publish Directory: `dist`
- [ ] Deploy
- [ ] Test deployed site

## Post-Deployment

- [ ] Test all pages load correctly
- [ ] Test contact form submission
- [ ] Verify email received at nashvillendg@gmail.com
- [ ] Test mobile menu functionality
- [ ] Check FAQ accordion works
- [ ] Verify all images load
- [ ] Test social media links (update with real URLs if needed)
- [ ] Submit sitemap to Google Search Console
- [ ] Test site with Google's Mobile-Friendly Test
- [ ] Verify structured data with Google Rich Results Test

## Custom Domain (Optional)

- [ ] Add custom domain in Render dashboard
- [ ] Update DNS records as instructed by Render
- [ ] Wait for SSL certificate (automatic)
- [ ] Update sitemap.xml with custom domain
- [ ] Update robots.txt with custom domain
- [ ] Test site on custom domain

## SEO Verification

- [ ] Verify sitemap.xml is accessible: `yoursite.com/sitemap.xml`
- [ ] Verify robots.txt is accessible: `yoursite.com/robots.txt`
- [ ] Test with Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Check meta tags with social media debuggers:
  - [ ] Facebook Sharing Debugger
  - [ ] Twitter Card Validator
  - [ ] LinkedIn Post Inspector

## AI Bot Crawlability Test

Test that AI bots can crawl your site:
- [ ] Use ChatGPT's web browsing feature
- [ ] Ask Claude to summarize your site
- [ ] Test with Perplexity AI
- [ ] Verify content is accessible without JavaScript

## Files to Update Before Deployment

1. **dist/contact/index.html**
   - Line ~65: Update Formspree endpoint (see CONTACT_FORM_SETUP.md)

2. **dist/sitemap.xml**
   - Replace `https://www.liquorandwineoutlet.com` with your actual domain

3. **dist/robots.txt**
   - Replace `https://www.liquorandwineoutlet.com` with your actual domain

4. **All HTML files**
   - Update social media links (currently placeholders)
   - Update Nashville Digital Group link if needed

## Notes

- Logo image is currently hosted on Supabase CDN - this is fine, but you may want to host it locally
- All images in `/dist/assets/images/` are local and will be served from your domain
- Contact form requires setup (see CONTACT_FORM_SETUP.md)
- Site uses Google Fonts (Playfair Display, Inter) - loaded from CDN

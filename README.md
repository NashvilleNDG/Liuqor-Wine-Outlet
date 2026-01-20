# Liquor & Wine Outlet - Static Website

A fully static website for Liquor & Wine Outlet in Murfreesboro, TN. This site is optimized for hosting on Render and is fully crawlable by AI bots and search engines.

## Features

- ✅ 5 static pages (Home, About, Collection, Delivery, Contact)
- ✅ Clean URLs (no .html extensions)
- ✅ Fully responsive design
- ✅ SEO optimized with meta tags and structured data
- ✅ AI bot crawlable (ChatGPT, Claude, Gemini, etc.)
- ✅ Contact form with email submission
- ✅ Sitemap.xml and robots.txt included

## Project Structure

```
dist/
├── index.html              # Homepage
├── about/
│   └── index.html         # About page
├── collection/
│   └── index.html         # Collection page
├── delivery/
│   └── index.html         # Delivery page
├── contact/
│   └── index.html         # Contact page
├── assets/
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   ├── js/
│   │   └── main.js        # JavaScript for interactivity
│   └── images/            # All images
├── sitemap.xml            # SEO sitemap
└── robots.txt             # Robots file
```

## Contact Form Setup

The contact form is currently configured to use Formspree. To set it up:

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form endpoint
3. Update the form action in `dist/contact/index.html`:
   - Replace `https://formspree.io/f/xvqgqjkn` with your Formspree endpoint
   - The form will automatically send emails to `nashvillendg@gmail.com`

Alternatively, you can:
- Use EmailJS (client-side email service)
- Set up a serverless function (AWS Lambda, Vercel, etc.)
- Use Render's backend service

## Deployment to Render

### Prerequisites
- Git repository (GitHub, GitLab, or Bitbucket)
- Render account

### Steps

1. **Push code to Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Create Static Site on Render**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Static Site"
   - Connect your Git repository
   - Configure:
     - **Name**: liquor-wine-outlet (or your preferred name)
     - **Branch**: main (or your default branch)
     - **Build Command**: Leave empty (or `echo "No build needed"`)
     - **Publish Directory**: `dist`
   - Click "Create Static Site"

3. **Configure Custom Domain (Optional)**
   - In Render dashboard, go to your static site
   - Click "Settings" → "Custom Domains"
   - Add your domain and follow DNS setup instructions

4. **Set Up Redirects (for clean URLs)**
   - Render automatically handles clean URLs with the folder structure
   - No additional configuration needed

## Local Development

To test locally:

1. **Using Python (simple server)**
   ```bash
   cd dist
   python -m http.server 8000
   ```
   Visit: http://localhost:8000

2. **Using Node.js (http-server)**
   ```bash
   npm install -g http-server
   cd dist
   http-server -p 8000
   ```
   Visit: http://localhost:8000

3. **Using VS Code Live Server**
   - Install "Live Server" extension
   - Right-click on `dist/index.html` → "Open with Live Server"

## SEO & AI Crawlability

This site is optimized for:
- ✅ Search engines (Google, Bing, etc.)
- ✅ AI bots (ChatGPT, Claude, Gemini, Perplexity, etc.)
- ✅ Social media crawlers (Facebook, Twitter, etc.)

Features included:
- Semantic HTML structure
- Meta tags (Open Graph, Twitter Cards)
- Structured data (JSON-LD)
- Sitemap.xml
- Robots.txt (allows all bots)
- Clean, readable URLs
- Alt text on all images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 Nashville Digital Group. All rights reserved.

## Contact

For questions or support, contact: nashvillendg@gmail.com

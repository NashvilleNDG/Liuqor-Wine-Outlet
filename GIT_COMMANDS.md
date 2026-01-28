# Git Commands to Push to GitHub

## Step 1: Add All Changes

```bash
git add .
```

This will add:
- `dist/contact/index.html` (updated with Formspree endpoint)
- `dist/assets/js/main.js` (updated form submission logic)
- `DEPLOYMENT_READY.md` (deployment guide)

## Step 2: Commit Changes

```bash
git commit -m "Configure contact form with Formspree endpoint and cleanup"
```

## Step 3: Push to GitHub

```bash
git push origin main
```

## Complete Command Sequence

```bash
cd "c:\Users\colle\Downloads\L&W-outlet-Html"
git add .
git commit -m "Configure contact form with Formspree endpoint and cleanup"
git push origin main
```

---

## After Pushing to GitHub

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Static Site"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `liquor-wine-outlet`
   - **Branch**: `main`
   - **Build Command**: (leave empty)
   - **Publish Directory**: `dist`
5. Click "Create Static Site"

---

## Formspree Configuration

✅ **Formspree Endpoint**: `https://formspree.io/f/mbddaqgd`

**Email Recipients** (configured in Formspree dashboard):
- liquorandwineoutletboro@gmail.com
- nashvillendg@gmail.com

**Note**: Make sure in your Formspree dashboard that the form is configured to send emails to both addresses, or set up email forwarding as needed.

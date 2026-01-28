# Push Changes to GitHub

## Prerequisites
1. **Install Git** (if not already installed):
   - Download from: https://git-scm.com/download/win
   - Or install via winget: `winget install Git.Git`

2. **Set up GitHub Repository**:
   - Go to https://github.com/new
   - Create a new repository (e.g., `Liquor-Wine-Outlet`)
   - **DO NOT** initialize with README, .gitignore, or license (we already have files)

## Steps to Push

### Step 1: Initialize Git Repository (if not already done)
```bash
git init
```

### Step 2: Add Remote Repository
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```
Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### Step 3: Add All Changes
```bash
git add .
```

### Step 4: Commit Changes
```bash
git commit -m "Add THC category with product images and update collection page"
```

### Step 5: Set Main Branch (if needed)
```bash
git branch -M main
```

### Step 6: Push to GitHub
```bash
git push -u origin main
```

## Complete Command Sequence

```bash
# Initialize repository (if needed)
git init

# Add remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Add all files
git add .

# Commit changes
git commit -m "Add THC category with product images and update collection page"

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## Changes Included in This Commit

✅ Added THC category to collection page
✅ Added THC category to homepage
✅ Created THC icon (thc-icon.svg)
✅ Added THC product image (thc-images.png)
✅ Updated both pages to use local image instead of placeholder

## After Pushing

Once pushed to GitHub, you can:
1. Deploy to Render (if configured)
2. View changes on GitHub
3. Share the repository with others

# GitHub Pages Setup for dakshsammi.github.io

Your portfolio is now configured for GitHub Pages! Follow these steps to deploy it live.

## Automatic Setup (Recommended)

### Step 1: Create Repository
1. Go to https://github.com/new
2. Create a repository named **`dakshsammi.github.io`** (exact name is critical!)
3. Make it **Public**
4. Do NOT initialize with README/license/gitignore

### Step 2: Push Your Code
```bash
cd /path/to/your/portfolio
git init
git add .
git commit -m "Initial commit: Portfolio site"
git branch -M main
git remote add origin https://github.com/dakshsammi/dakshsammi.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Actions
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select **Branch: gh-pages** and **Folder: / (root)**
5. Click **Save**
6. Go to **Actions** tab and wait for the first workflow to complete

### Step 4: Access Your Site
Visit: **https://dakshsammi.github.io**

The GitHub Actions workflow will automatically:
- Build your Next.js app to static HTML
- Deploy to the `gh-pages` branch
- Make it live at your GitHub Pages URL

## Manual Build & Deploy (Alternative)

If you prefer to build locally and push manually:

```bash
# Build static site
npm run build

# The output will be in ./out directory

# Push the 'out' folder to gh-pages branch
git subtree push --prefix out origin gh-pages
```

## Updating Your Site

After the initial setup, every time you push to the `main` branch:
1. GitHub Actions automatically builds your site
2. Deploys it to the `gh-pages` branch
3. Your changes go live at https://dakshsammi.github.io within 1-2 minutes

## Troubleshooting

### Site shows README instead of homepage
- Ensure the **Pages** source is set to `gh-pages` branch in Settings → Pages
- Wait 2-3 minutes for GitHub to process the deployment

### Site shows 404
- Check the GitHub Pages settings are correctly configured
- Verify the repository name is exactly `dakshsammi.github.io`
- Clear your browser cache (Ctrl+Shift+Delete)

### Deployment fails
- Check the **Actions** tab for error messages
- Ensure your main branch is called `main` (not `master`)
- Verify all dependencies installed correctly

## Repository Structure

```
dakshsammi.github.io/
├── app/
├── components/
├── public/
├── .github/workflows/deploy.yml  ← Automatic deployment
├── next.config.mjs                ← Configured for static export
├── package.json
└── README.md
```

## What's Configured

✓ Next.js static export enabled (`output: 'export'`)
✓ GitHub Actions workflow for automatic deployment
✓ Images optimized for static hosting
✓ Resume PDF available for download
✓ All assets served from GitHub Pages CDN

Your portfolio is production-ready!

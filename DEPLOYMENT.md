# 🚀 Deployment Guide

## Deploy to Vercel (Recommended - 2 minutes)

### Step 1: Connect GitHub

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub

### Step 2: Import Project

1. Click "Add New" → "Project"
2. Select your GitHub repository
3. Click "Import"

### Step 3: Configure & Deploy

1. Default settings work perfectly - no environment variables needed
2. Click "Deploy"
3. Wait for the green checkmark ✅

**Your site is now live!** You'll get a URL like `https://your-name.vercel.app`

### Step 4: Custom Domain (Optional)

1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS instructions

---

## Deploy to GitHub Pages

### Step 1: Update Configuration

Create `next.config.mjs`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '', // Change to '/repo-name' if using user page
};

export default nextConfig;
```

### Step 2: Build & Deploy

```bash
# Build the static site
npm run build

# The `out` folder is ready to deploy
# Push to GitHub, then enable Pages in settings
```

Then in GitHub Settings → Pages:
- Source: Deploy from a branch
- Branch: main, folder: /(root)

---

## Deploy to Netlify

### Step 1: Connect GitHub

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select GitHub and your repository

### Step 2: Configure Build

- Build command: `npm run build`
- Publish directory: `.next` (or `out` if using static export)

### Step 3: Deploy

Netlify will automatically deploy on every push!

---

## Deploy with Docker

### Build the Image

```bash
docker build -t my-portfolio .
```

### Run Locally

```bash
docker run -p 3000:3000 my-portfolio
```

### Deploy to Cloud

- **AWS**: Push to ECR and deploy to ECS
- **Google Cloud**: Push to Artifact Registry, deploy to Cloud Run
- **DigitalOcean**: Push to Container Registry, deploy as App Platform
- **Railway**: Connect GitHub, auto-deploys on push

---

## Deploy to AWS

### Using Amplify (Easiest)

1. Push code to GitHub
2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
3. Click "New app" → "Host web app"
4. Select GitHub repository
5. Click "Save and deploy"

### Manual S3 + CloudFront

```bash
# Build static export
npm run build

# Sync to S3
aws s3 sync out/ s3://my-portfolio-bucket/

# Create CloudFront distribution pointing to S3
```

---

## Environment Variables (Optional)

If you add analytics or other integrations:

```env
# Vercel
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_id

# Other services
NEXT_PUBLIC_API_KEY=your_key
```

Set these in your deployment platform's environment settings.

---

## Custom Domain Setup

### For All Platforms

1. Purchase domain from:
   - Vercel Domains
   - Namecheap
   - GoDaddy
   - Route 53

2. Point DNS to your platform:
   - **Vercel**: Add in Vercel dashboard
   - **GitHub Pages**: Add CNAME file or use GitHub settings
   - **Netlify**: Add in Netlify domain settings

### DNS Records

Typical setup (check your provider):
```
Type    Name    Value
CNAME   www     your-site.vercel.app  (or equivalent)
A       @       1.2.3.4               (IP address)
```

---

## Performance Tips

### 1. Enable Compression

Most platforms compress automatically. Verify in headers:
```bash
curl -I https://your-domain.com
# Look for: Content-Encoding: gzip
```

### 2. Cache Assets

Vercel & Netlify cache automatically. For others:
```javascript
// next.config.mjs
const nextConfig = {
  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  }
};
```

### 3. Monitor Performance

- **Vercel**: Built-in analytics
- **Netlify**: Included analytics
- **Others**: Use Google Search Console, Lighthouse

---

## Troubleshooting

### Site shows 404

- Check build command: `npm run build`
- Verify output directory exists
- Check if using static export without proper config

### Images not loading

- Verify image URLs are public
- Check CORS headers if using external images
- Use Next.js Image component (already done)

### Slow performance

- Check Core Web Vitals in Lighthouse
- Optimize image sizes
- Verify CDN is enabled (automatic on Vercel)

---

## Updating Your Portfolio

After deployment, making changes is easy:

1. Edit files locally
2. Commit & push to GitHub
3. Platform auto-deploys (usually < 1 min)

---

## Security

Your site automatically gets:

- HTTPS (SSL/TLS)
- DDoS protection
- Security headers

No additional config needed!

---

**Happy deploying! 🎉**

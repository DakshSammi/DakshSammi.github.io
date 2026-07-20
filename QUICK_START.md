# ⚡ Quick Start Guide (5 minutes)

## Start Here 👇

### 1. Run Locally (30 seconds)
```bash
npm run dev
# Open http://localhost:3000 in your browser
```

### 2. Customize (3-4 minutes)

Edit these files with YOUR information:

**Your Photo & Intro** → `components/hero.tsx`
```typescript
// Line 20: Change image URL
src="YOUR_PHOTO_URL"

// Line 32-37: Update name, title, bio
<h1>Your Name</h1>
<p>Your Title</p>
<p>Your bio...</p>
```

**Your Story** → `components/about.tsx`
```typescript
// Line 13-27: Update about text
<p>Your story here...</p>

// Line 31-39: Update interests
<li>Your Interest 1</li>
<li>Your Interest 2</li>

// Line 51, 62: Update image URLs
src="IMAGE_URL_1"
src="IMAGE_URL_2"
```

**Your Experience** → `components/experience.tsx`
```typescript
// Line 5-20: Update jobs
{
  title: 'Your Job',
  company: 'Your Company',
  period: '2024 - Present',
  description: 'What you did...',
  tags: ['Tech1', 'Tech2'],
}
```

**Your Skills** → `components/skills.tsx`
```typescript
// Line 5-15: Update skill categories
{ title: 'Your Skill', skills: ['Tech1', 'Tech2'] }

// Line 52-66: Update proficiency %
{ label: 'Skill Name', value: 90 }
```

**Your Contact** → `components/contact.tsx`
```typescript
// Line 7-24: Update social links
{
  icon: Mail,
  label: 'Email',
  href: 'mailto:YOUR_EMAIL@gmail.com',
  handle: 'YOUR_EMAIL@gmail.com',
}

// Line 35: Update CTA email
href="mailto:YOUR_EMAIL@gmail.com"
```

**Optional**: `components/publications.tsx`, `components/music.tsx`, `components/footer.tsx`

### 3. Deploy (1-2 minutes)

```bash
# Commit your changes
git add .
git commit -m "Personalize portfolio with my info"
git push origin main

# Go to vercel.com
# Click "New Project"
# Select your GitHub repo
# Click "Deploy"
# Done! Your site is live! 🎉
```

---

## 🎨 Optional Customizations

### Change Colors
**File**: `app/globals.css` (around line 13)

```css
:root {
  --primary: #00d4ff;        /* Cyan - change this! */
  --background: #0a0e27;     /* Dark blue */
  --foreground: #f5f7fa;     /* Light text */
}
```

**Popular color combinations**:
- Cyan + Dark Blue (current)
- Purple + Black
- Orange + Dark Gray  
- Green + Navy

### Change SEO Title
**File**: `app/layout.tsx` (line 7-9)

```typescript
title: 'Your Name - Your Title',
description: 'Your bio (1-2 sentences)',
```

---

## 📱 Test Before Deploying

```bash
# Check everything works
npm run dev

# Test mobile view
# Open DevTools (F12) → Toggle device toolbar

# Check for errors
npm run build

# If no errors, you're good to deploy!
```

---

## 🚀 Commands Reference

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Build for production
npm run start            # Start production server

# Git
git status               # Check changes
git add .                # Stage all changes
git commit -m "message"  # Commit changes
git push origin main     # Push to GitHub

# npm
npm install              # Install dependencies
npm update               # Update dependencies
npm run lint             # Check for code issues
```

---

## 📁 Files You Likely Need to Edit

| File | What to Change |
|------|----------------|
| `components/hero.tsx` | Profile photo, name, title, bio |
| `components/about.tsx` | About section, images |
| `components/experience.tsx` | Jobs and projects |
| `components/skills.tsx` | Technical skills and proficiency |
| `components/contact.tsx` | Email and social links |
| `app/layout.tsx` | Page title and description |
| `app/globals.css` | Colors and theme |

---

## ✨ Files You Probably DON'T Need to Change

- `components/music.tsx` - Unless you want different song
- `components/publications.tsx` - Unless you have papers
- `components/navigation.tsx` - Nav is automatic
- `components/footer.tsx` - Footer is fine as-is
- `page.tsx` - Page structure is good

---

## 🎯 Checklist

Before deploying:
- [ ] Updated name and title
- [ ] Updated profile photo
- [ ] Updated about section
- [ ] Updated experience
- [ ] Updated skills
- [ ] Updated contact links
- [ ] Tested locally (`npm run dev`)
- [ ] Built successfully (`npm run build`)
- [ ] No console errors
- [ ] Links all work

---

## 🐛 Troubleshooting

**Q: Changes not showing?**
- A: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Q: Build failing?**
- A: Check for syntax errors, run `npm run build` to see errors

**Q: Deployment not working?**
- A: Make sure you pushed to GitHub (`git push origin main`)
- A: Check Vercel logs for errors

**Q: Image not showing?**
- A: Check URL is public (test in new tab)
- A: Use https:// not http://
- A: Try uploading to Vercel Blob or Cloudinary

---

## 📚 Learn More

- `CUSTOMIZE.md` - Detailed customization guide
- `DEPLOYMENT.md` - All deployment options
- `README.md` - Full technical docs
- `PORTFOLIO_SUMMARY.md` - Complete overview

---

## 🎉 You're Ready!

1. Run `npm run dev`
2. Edit the files above
3. Deploy when ready!

Good luck! 🚀

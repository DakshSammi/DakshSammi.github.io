# 🎨 Personalization Guide

Quick reference for updating the portfolio with your own information.

## 1. Profile Photo

**File**: `components/hero.tsx` (line 20)

```typescript
// Change this:
src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/asagao7_shukrana-xKkXx5iUrwj70IUCBq67B4gGRkNEK2.jpg"

// To your image URL:
src="https://your-image-url.com/profile.jpg"
```

💡 **Tip**: Upload your image to:
- Vercel Blob
- Cloudinary
- Imgur
- Or any cloud hosting

---

## 2. Name & Title

**File**: `components/hero.tsx` (lines 32-38)

```typescript
// Hero section
<h1>Your Name</h1>
<p>Your Title · Your Focus</p>
<p>Your bio - 1-2 sentences about what you do</p>
```

**File**: `app/layout.tsx` (lines 7-9)

```typescript
title: 'Your Name - Your Title',
description: 'Your bio here',
```

---

## 3. About Section

**File**: `components/about.tsx`

```typescript
// Update your story (lines 17-28)
<p>Your background story...</p>

// Update your interests (lines 31-39)
const interests = [
  'Your Interest 1',
  'Your Interest 2',
  // ...
]

// Update images
src="your-image-url-1.jpg"
src="your-image-url-2.jpg"
```

---

## 4. Experience

**File**: `components/experience.tsx` (lines 5-20)

```typescript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2024 - Present',
    description: 'What you accomplished...',
    tags: ['Tech1', 'Tech2', 'Tech3'],
  },
  // Add more...
]
```

---

## 5. Spotify Music

**File**: `components/music.tsx` (line 20)

1. Go to [Spotify](https://spotify.com)
2. Find a song/artist you love
3. Click Share → Embed → Copy the embed code
4. Replace the `src` URL:

```typescript
// Find this line with the iframe
src="https://open.spotify.com/embed/track/..."

// Replace with your track ID
src="https://open.spotify.com/embed/track/YOUR_TRACK_ID?..."
```

---

## 6. Skills & Technologies

**File**: `components/skills.tsx`

### Update skill categories:

```typescript
const skillCategories = [
  {
    icon: Code2,
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript'], // Your skills
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB'], // Your skills
  },
  // Add/remove categories
]
```

### Update proficiency bars:

```typescript
// Lines 52-66
[
  { label: 'Skill Name', value: 90 }, // 0-100
  { label: 'Another Skill', value: 85 },
  // ... update percentages
]
```

---

## 7. Publications & Research

**File**: `components/publications.tsx`

```typescript
const publications = [
  {
    title: 'Paper Title',
    venue: 'Journal or Conference Name',
    date: '2024',
    abstract: 'Brief summary of your research...',
    link: 'https://doi.org/...',
  },
  // Add more publications
]
```

---

## 8. Contact Links

**File**: `components/contact.tsx`

```typescript
const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:your.email@gmail.com',
    handle: 'your.email@gmail.com',
  },
  {
    icon: Globe,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/your-profile',
    handle: '/in/your-profile',
  },
  {
    icon: GitFork,
    label: 'GitHub',
    href: 'https://github.com/your-username',
    handle: '/your-username',
  },
  {
    icon: Send,
    label: 'Twitter',
    href: 'https://twitter.com/your_handle',
    handle: '@your_handle',
  },
]
```

Also update the CTA button (line 35):
```typescript
<a href="mailto:your.email@gmail.com">
```

---

## 9. Footer

**File**: `components/footer.tsx`

```typescript
// Update links (lines 20-26)
const links = [
  { label: 'Resume', href: 'https://your-resume-link.com' },
  { label: 'GitHub', href: 'https://github.com/your-username' },
  // ... update links
]

// Update about text (line 12)
<p>Your bio...</p>
```

---

## 10. Colors & Styling

**File**: `app/globals.css`

### Change the accent color (currently cyan):

```css
:root {
  /* From cyan */
  --primary: #00d4ff;
  
  /* To your color: */
  --primary: #FF006E;        /* Pink */
  --primary: #3A86FF;        /* Blue */
  --primary: #FB5607;        /* Orange */
  --primary: #06A77D;        /* Green */
}
```

### Change the background:

```css
:root {
  /* From deep blue */
  --background: #0a0e27;
  
  /* To your choice: */
  --background: #0f0f0f;     /* Darker */
  --background: #1a1a2e;     /* Deep blue */
  --background: #0d1117;     /* GitHub dark */
}
```

### Change text color:

```css
:root {
  /* From light gray */
  --foreground: #f5f7fa;
  
  /* To your choice: */
  --foreground: #ffffff;     /* Pure white */
  --foreground: #e0e0e0;     /* Off-white */
}
```

---

## 11. Navigation Menu Items

**File**: `components/navigation.tsx` (lines 26-31)

```typescript
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Music', href: '#music' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
  // Add/remove as needed
]
```

**Important**: Make sure matching section IDs exist (e.g., `<section id="work">`)

---

## 12. Metadata for SEO

**File**: `app/layout.tsx`

```typescript
export const metadata = {
  title: 'Your Name - Your Title',
  description: 'Brief description of who you are and what you do',
}
```

---

## 🎯 Complete Customization Checklist

- [ ] Update profile photo
- [ ] Change name and title
- [ ] Rewrite about section
- [ ] Update experience
- [ ] Add your Spotify track
- [ ] List your skills
- [ ] Add publications
- [ ] Update contact links
- [ ] Customize colors
- [ ] Update footer
- [ ] Change metadata
- [ ] Test all links work
- [ ] Deploy to Vercel!

---

## 💡 Quick Tips

### Testing Changes

```bash
# Start dev server
npm run dev

# Open http://localhost:3000 in browser
# Changes auto-reload (Hot Module Replacement)
```

### Finding Image URLs

1. Upload to [Vercel Blob](https://vercel.com/blob)
2. Use [Cloudinary](https://cloudinary.com) (free tier)
3. Use [Imgur](https://imgur.com) (no account needed)

### Updating Icons

Available icons from Lucide React:
- `Mail` - Email
- `Globe` - Website
- `GitFork` - GitHub
- `Send` - Social/messaging
- `Heart` - Favorites
- `ExternalLink` - Links

[Full icon list →](https://lucide.dev/)

### Color Combinations That Work

- Cyan (`#00d4ff`) + Deep Blue (`#0a0e27`) ✨
- Purple (`#A855F7`) + Dark Blue (`#1e1b4b`) 💜
- Pink (`#FF006E`) + Black (`#0f0f0f`) 💗
- Green (`#10B981`) + Gray (`#111827`) 🌿

---

## 🚀 Next Steps

1. Make all customizations
2. Test locally with `npm run dev`
3. Commit changes: `git add . && git commit -m "Personalize portfolio"`
4. Push to GitHub: `git push origin main`
5. Deploy to Vercel (auto-deploys from GitHub)

**Done! Your portfolio is live! 🎉**

---

Questions? Issues? Check:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)

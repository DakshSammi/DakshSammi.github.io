# 🚀 Daksh Sammi - Tech Portfolio

A stunning, geeky, and ultra-modern portfolio website built with **Next.js 16**, **Tailwind CSS**, and **Vercel**.

## ✨ Features

- **Dark Mode First**: Sleek cyberpunk aesthetic with cyan/blue accent colors
- **Smooth Scrolling**: Buttery smooth scroll experience with section tracking
- **Responsive Design**: Perfect on desktop, tablet, and mobile devices
- **Spotify Integration**: Embedded music player to showcase your vibe
- **Image Gallery**: Beautiful portfolio with professional photos
- **Interactive Navigation**: Smart nav bar that highlights active sections
- **Performance Optimized**: Built for speed with Next.js 16
- **Easy to Deploy**: One-click deployment to Vercel

## 🎨 Design Highlights

- **Neon borders** with glow effects
- **Animated gradient text** for headings
- **Terminal-style code blocks** for technical credibility
- **Responsive skill bars** with proficiency visualization
- **Smooth hover animations** on all interactive elements
- **Professional yet playful** aesthetic

## 📋 Sections

1. **Hero** - Eye-catching introduction with profile image
2. **About** - Your story with portfolio images
3. **Music** - Spotify embed for personality
4. **Experience** - Career highlights with descriptions
5. **Skills** - Technical expertise with categories
6. **Publications** - Research and writing samples
7. **Contact** - Social links and CTA
8. **Footer** - Credits and additional links

## 🛠️ Customization Guide

### 1. Personal Information

Edit `/components/hero.tsx`:
- Change profile image URL
- Update name, title, and bio

Edit `/components/about.tsx`:
- Replace personal story
- Update image URLs
- Modify key interests

### 2. Experience & Projects

Edit `/components/experience.tsx`:
```javascript
const experiences = [
  {
    title: 'Your Title',
    company: 'Your Company',
    period: '2024 - Present',
    description: 'What you did...',
    tags: ['Tech1', 'Tech2'],
  },
  // Add more...
]
```

### 3. Skills

Edit `/components/skills.tsx`:
```javascript
const skillCategories = [
  {
    icon: Code2,
    title: 'Your Category',
    skills: ['Skill1', 'Skill2', 'Skill3'],
  },
]
```

Also update the competency bar percentages.

### 4. Publications

Edit `/components/publications.tsx`:
```javascript
const publications = [
  {
    title: 'Paper Title',
    venue: 'Conference/Journal',
    date: '2024',
    abstract: 'Summary...',
    link: 'https://doi.org/...',
  },
]
```

### 5. Music

Edit `/components/music.tsx`:
- Replace the Spotify embed iframe `src` with your own track
- Update the description

### 6. Contact Links

Edit `/components/contact.tsx`:
```javascript
const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:your.email@example.com',
    handle: 'your.email@example.com',
  },
  // Update other links...
]
```

Also update the "Start a Conversation" button email.

### 7. Styling & Colors

Edit `/app/globals.css` to customize the color scheme:

```css
:root {
  --background: #0a0e27;      /* Main background */
  --foreground: #f5f7fa;      /* Text color */
  --primary: #00d4ff;         /* Cyan accent */
  /* ... update other colors ... */
}
```

Current color palette:
- **Background**: Deep blue (`#0a0e27`)
- **Primary Accent**: Cyan (`#00d4ff`)
- **Secondary**: Blue (`#3b82f6`)
- **Text**: Light gray (`#f5f7fa`)

## 🚀 Deployment

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Follow the prompts and your site will be live in seconds!

### Option 2: GitHub Pages

```bash
# Build the project
npm run build

# Push to GitHub
git push origin main
```

Then enable GitHub Pages in your repository settings.

### Option 3: Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 🔧 Environment Variables

The portfolio works out of the box with no environment variables required. However, if you want to track analytics:

```env
# Optional: Vercel Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_id_here
```

## 📦 Tech Stack

- **Next.js 16** - React framework
- **Tailwind CSS v4** - Utility-first CSS
- **Lucide React** - Beautiful icons
- **Next.js Image** - Optimized images
- **Vercel** - Hosting & deployment

## 🎯 Performance

- **Lighthouse Score**: 95+ (typical)
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🤝 Contributing

Feel free to customize and make it your own! Fork the repo and submit PRs for improvements.

## 📄 License

MIT - Feel free to use this as a template for your own portfolio.
---

**Made with ❤️ for tech enthusiasts and innovators**

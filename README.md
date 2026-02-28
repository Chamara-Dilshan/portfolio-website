# Portfolio Website

A modern minimalist portfolio website built with React + Vite, featuring sections for About Me, Projects, Services, Skills, Contact, and a Markdown-based blog.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Vite | Build tool with fast HMR |
| React 18 | UI framework |
| React Router v6 | Client-side routing |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| React Hook Form | Form handling & validation |
| React Markdown | Blog post rendering |
| React Icons | Icon library |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev      # http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure

```
portfolio-website/
├── public/                    # Static assets
├── src/
│   ├── assets/images/         # Images and media files
│   ├── components/
│   │   ├── layout/            # Layout components (Header, Navigation, Footer)
│   │   ├── sections/          # Homepage sections (Hero, About, Projects, Services, Skills, Contact)
│   │   └── ui/                # Reusable UI components (ProjectCard, ServiceCard, etc.)
│   ├── pages/
│   │   ├── Home.jsx           # Homepage with all sections
│   │   ├── BlogList.jsx       # Blog listing page
│   │   └── BlogPost.jsx       # Individual blog post
│   ├── data/                  # Content data files
│   │   ├── projects.js        # Portfolio projects
│   │   ├── services.js        # Professional services
│   │   ├── skills.js          # Skills & technologies
│   │   └── blogPosts.js       # Blog post content
│   ├── styles/
│   │   └── index.css          # Tailwind imports & custom styles
│   ├── App.jsx                # Main app with routing
│   └── main.jsx               # React entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Routes

| Path | Page |
|------|------|
| `/` | Home (Hero, About, Projects, Services, Skills, Contact) |
| `/blog` | Blog listing |
| `/blog/:slug` | Individual blog post |

### Section Anchors
- `/#about` · `/#projects` · `/#services` · `/#skills` · `/#contact`

## Customization

### Personal Information
- **Hero:** `src/components/sections/Hero.jsx` — name, tagline, CTA
- **About:** `src/components/sections/About.jsx` — bio, social links
- **Footer:** `src/components/layout/Footer.jsx` — social URLs, copyright

### Content Data Files
- **Projects:** `src/data/projects.js`
- **Services:** `src/data/services.js`
- **Skills:** `src/data/skills.js`
- **Blog Posts:** `src/data/blogPosts.js`

### Adding Images

Place images in `src/assets/images/` and import them:
```javascript
import myImage from '@assets/images/my-image.jpg';
```
Or place in `public/` and reference as `/my-image.jpg`.

### Contact Form Integration

The form currently logs to console. Integrate with a service:

**Formspree:**
```javascript
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: { 'Content-Type': 'application/json' },
});
```

**EmailJS:**
```javascript
import emailjs from '@emailjs/browser';
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', data, 'PUBLIC_KEY');
```

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload /dist folder to Netlify
```

### GitHub Pages
1. Add `base: '/repo-name/'` to `vite.config.js`
2. Build and deploy the `/dist` folder

## License

MIT

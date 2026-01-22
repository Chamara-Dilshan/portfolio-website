# Portfolio Website

A modern minimalist portfolio website built with React + Vite, featuring sections for About Me, Projects, Skills, Contact, and a Markdown-based blog.

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

## Commands

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production (outputs to /dist)
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality
```

## Project Structure

```
portfolio-website/
├── public/                    # Static assets
├── src/
│   ├── assets/images/         # Images and media files
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.jsx     # Sticky header with navigation
│   │   │   ├── Navigation.jsx # Nav links (desktop & mobile)
│   │   │   └── Footer.jsx     # Footer with social links
│   │   ├── sections/          # Homepage sections
│   │   │   ├── Hero.jsx       # Landing section with CTA
│   │   │   ├── About.jsx      # Bio and profile
│   │   │   ├── Projects.jsx   # Project showcase grid
│   │   │   ├── Skills.jsx     # Skills by category
│   │   │   └── Contact.jsx    # Contact form
│   │   └── ui/                # Reusable UI components
│   │       ├── ProjectCard.jsx
│   │       ├── SkillBadge.jsx
│   │       ├── BlogCard.jsx
│   │       └── Button.jsx
│   ├── pages/
│   │   ├── Home.jsx           # Homepage (all sections)
│   │   ├── BlogList.jsx       # Blog listing page
│   │   └── BlogPost.jsx       # Individual blog post
│   ├── data/                  # Content data files
│   │   ├── projects.js        # Portfolio projects
│   │   ├── skills.js          # Skills & technologies
│   │   └── blogPosts.js       # Blog post content
│   ├── styles/
│   │   └── index.css          # Tailwind imports & custom styles
│   ├── App.jsx                # Main app with routing
│   └── main.jsx               # React entry point
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind customization
├── postcss.config.js          # PostCSS plugins
└── package.json               # Dependencies & scripts
```

## Customization Guide

### 1. Update Personal Information

**Edit `src/components/sections/Hero.jsx`:**
- Change name and tagline
- Update CTA button text

**Edit `src/components/sections/About.jsx`:**
- Update bio text
- Change profile emoji or add real image
- Update social media links

**Edit `src/components/layout/Footer.jsx`:**
- Update social media URLs
- Change copyright name

### 2. Add Your Projects

**Edit `src/data/projects.js`:**

```javascript
export const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Brief description of the project',
    image: '/path/to/image.jpg',  // or null for default
    tech: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://your-live-site.com',
    githubUrl: 'https://github.com/username/repo',
  },
  // Add more projects...
];
```

### 3. Update Skills

**Edit `src/data/skills.js`:**

```javascript
export const skills = {
  frontend: [
    { name: 'React', icon: 'react' },
    { name: 'TypeScript', icon: 'typescript' },
    // Add more...
  ],
  backend: [
    { name: 'Node.js', icon: 'node' },
    // Add more...
  ],
  tools: [
    { name: 'Git', icon: 'git' },
    // Add more...
  ],
};
```

**Available icon keys:** `react`, `javascript`, `typescript`, `html`, `css`, `tailwind`, `node`, `express`, `mongodb`, `postgresql`, `git`, `github`, `docker`, `figma`, `vite`, `nextjs`, `python`, `firebase`, `redux`, `graphql`

### 4. Add Blog Posts

**Edit `src/data/blogPosts.js`:**

```javascript
export const blogPosts = [
  {
    slug: 'my-post-url',           // URL-friendly identifier
    title: 'My Blog Post Title',
    date: 'January 22, 2026',
    excerpt: 'Short description for card preview',
    tags: ['React', 'Tutorial'],
    readingTime: 5,                // minutes
    content: `
Your markdown content here...

## Headings work

\`\`\`javascript
// Code blocks with syntax highlighting
const hello = 'world';
\`\`\`

- Lists work too
- Like this
    `,
  },
];
```

### 5. Update Contact Information

**Edit `src/components/sections/Contact.jsx`:**
- Change email address
- Update location
- Modify form submission logic (integrate with Formspree, EmailJS, etc.)

## Design System

### Colors (defined in `tailwind.config.js`)

| Color | Usage |
|-------|-------|
| `primary-600` | Accent color, buttons, links |
| `dark-900` | Main text |
| `dark-500` | Secondary text |
| `dark-50` | Background sections |

### CSS Classes (defined in `src/styles/index.css`)

| Class | Purpose |
|-------|---------|
| `.container-custom` | Centered container with max-width |
| `.section-padding` | Consistent section spacing |
| `.heading-1`, `.heading-2`, `.heading-3` | Typography scale |
| `.btn-primary`, `.btn-secondary`, `.btn-outline` | Button variants |
| `.card` | Card component styling |
| `.input`, `.label` | Form elements |
| `.text-gradient` | Gradient text effect |

## Routing

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | All sections (Hero, About, Projects, Skills, Contact) |
| `/blog` | BlogList | Grid of blog post cards |
| `/blog/:slug` | BlogPost | Individual blog post |

### Section Anchors (on homepage)
- `/#about` - About section
- `/#projects` - Projects section
- `/#skills` - Skills section
- `/#contact` - Contact section

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
1. Add to `vite.config.js`: `base: '/repo-name/'`
2. Build and deploy `/dist` folder

## Adding Images

1. Place images in `src/assets/images/`
2. Import in components:
```javascript
import myImage from '@assets/images/my-image.jpg';
// Then use: <img src={myImage} alt="..." />
```

Or place in `public/` folder and reference directly:
```javascript
<img src="/my-image.jpg" alt="..." />
```

## Form Integration Options

The contact form currently logs to console. To make it functional:

### Formspree
```javascript
const onSubmit = async (data) => {
  await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
};
```

### EmailJS
```javascript
import emailjs from '@emailjs/browser';
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', data, 'PUBLIC_KEY');
```

## Performance Tips

1. **Optimize images:** Use WebP format, compress images
2. **Lazy load:** Images below the fold
3. **Code splitting:** Already configured via React Router
4. **Bundle analysis:** Run `npx vite-bundle-visualizer` after build

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

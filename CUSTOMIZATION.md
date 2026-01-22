# Portfolio Customization Guide

This guide explains how to personalize your portfolio website with your own content.

---

## Table of Contents

1. [Update Personal Information](#1-update-personal-information)
2. [Add Your Projects](#2-add-your-projects)
3. [Update Your Skills](#3-update-your-skills)
4. [Add Blog Posts](#4-add-blog-posts)
5. [Update Social Links](#5-update-social-links)
6. [Change Colors & Styling](#6-change-colors--styling)
7. [Add Profile Image](#7-add-profile-image)
8. [Configure Contact Form](#8-configure-contact-form)

---

## 1. Update Personal Information

### Hero Section (`src/components/sections/Hero.jsx`)

Update your name and tagline:

```jsx
// Line 19-20: Change the greeting
<p className="text-primary-600 font-medium mb-4">Hello, I'm</p>

// Line 22-25: Change your name
<h1 className="heading-1 mb-6">
  <span className="text-dark-900">Your First</span>{' '}
  <span className="text-gradient">Name</span>
</h1>

// Line 27-29: Change your tagline
<p className="text-xl md:text-2xl text-dark-500 mb-8 max-w-2xl mx-auto text-balance">
  Your professional tagline goes here - describe what you do
</p>
```

### About Section (`src/components/sections/About.jsx`)

Update your bio:

```jsx
// Line 42-45: Change the heading
<h3 className="heading-3 mb-4">
  Hi there! I'm a passionate developer
</h3>

// Line 47-52: First paragraph - your introduction
<p className="text-dark-600 mb-4 leading-relaxed">
  Write about yourself here. What do you do? What technologies
  do you specialize in? What makes you unique?
</p>

// Line 54-58: Second paragraph - your interests/hobbies
<p className="text-dark-600 mb-6 leading-relaxed">
  Write about your interests, what you do outside of work,
  or what you're currently learning.
</p>
```

### Page Title (`index.html`)

Update the browser tab title:

```html
<!-- Line 12 -->
<title>Your Name | Portfolio</title>

<!-- Line 7: Update meta description -->
<meta name="description" content="Your Name - Your Role Portfolio" />
```

---

## 2. Add Your Projects

### File: `src/data/projects.js`

Each project requires these fields:

| Field | Type | Description |
|-------|------|-------------|
| `id` | number | Unique identifier |
| `title` | string | Project name |
| `description` | string | Brief description (2-3 sentences) |
| `image` | string/null | Path to image or null for default |
| `tech` | array | Technologies used |
| `liveUrl` | string/null | Live demo URL |
| `githubUrl` | string/null | GitHub repository URL |

### Example:

```javascript
export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with product catalog, shopping cart, user authentication, and Stripe payment integration.',
    image: '/projects/ecommerce.jpg',  // Place image in public/projects/
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://mystore.com',
    githubUrl: 'https://github.com/username/ecommerce',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative task manager with drag-and-drop, real-time updates, and team features.',
    image: null,  // Uses default emoji placeholder
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://mytasks.app',
    githubUrl: 'https://github.com/username/tasks',
  },
  // Add more projects...
];
```

### Tips:
- Keep descriptions under 150 characters for best display
- Use 3-5 tech tags per project
- Projects display in a 3-column grid on desktop
- Recommended: 6 projects for balanced layout

---

## 3. Update Your Skills

### File: `src/data/skills.js`

Skills are organized by category. Each skill needs a `name` and `icon`.

### Available Icons:

| Icon Key | Technology |
|----------|------------|
| `react` | React |
| `javascript` | JavaScript |
| `typescript` | TypeScript |
| `html` | HTML5 |
| `css` | CSS3 |
| `tailwind` | Tailwind CSS |
| `node` | Node.js |
| `express` | Express.js |
| `mongodb` | MongoDB |
| `postgresql` | PostgreSQL |
| `git` | Git |
| `github` | GitHub |
| `docker` | Docker |
| `figma` | Figma |
| `vite` | Vite |
| `nextjs` | Next.js |
| `python` | Python |
| `firebase` | Firebase |
| `redux` | Redux |
| `graphql` | GraphQL |

### Example:

```javascript
export const skills = {
  frontend: [
    { name: 'React', icon: 'react' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'HTML5', icon: 'html' },
    { name: 'CSS3', icon: 'css' },
  ],
  backend: [
    { name: 'Node.js', icon: 'node' },
    { name: 'Express', icon: 'express' },
    { name: 'Python', icon: 'python' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'GraphQL', icon: 'graphql' },
  ],
  tools: [
    { name: 'Git', icon: 'git' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Figma', icon: 'figma' },
    { name: 'VS Code', icon: 'vite' },  // Use similar icon
  ],
};
```

### Adding Custom Categories:

You can add new categories:

```javascript
export const skills = {
  frontend: [...],
  backend: [...],
  tools: [...],
  // Add new category
  mobile: [
    { name: 'React Native', icon: 'react' },
    { name: 'Flutter', icon: 'dart' },  // May need to add icon
  ],
};
```

### Adding New Icons:

Edit `src/components/ui/SkillBadge.jsx` to add more icons:

```javascript
import { SiFlutter } from 'react-icons/si'

const iconMap = {
  // ... existing icons
  flutter: SiFlutter,
}

const colorMap = {
  // ... existing colors
  flutter: 'text-[#02569B]',
}
```

---

## 4. Add Blog Posts

### File: `src/data/blogPosts.js`

Each blog post requires:

| Field | Type | Description |
|-------|------|-------------|
| `slug` | string | URL path (no spaces, lowercase) |
| `title` | string | Post title |
| `date` | string | Publication date |
| `excerpt` | string | Short preview (1-2 sentences) |
| `tags` | array | Category tags |
| `readingTime` | number | Estimated read time in minutes |
| `content` | string | Markdown content |

### Example:

```javascript
export const blogPosts = [
  {
    slug: 'my-journey-into-web-dev',
    title: 'My Journey Into Web Development',
    date: 'January 25, 2026',
    excerpt: 'How I transitioned from a different career into web development and what I learned along the way.',
    tags: ['Career', 'Learning', 'Personal'],
    readingTime: 8,
    content: `
Your blog post content in Markdown format.

## Introduction

Start with an engaging introduction...

## Main Section

Write your main content here.

### Subsection

You can use subsections too.

## Code Examples

Include code blocks:

\`\`\`javascript
const greeting = 'Hello, World!';
console.log(greeting);
\`\`\`

## Lists

- Point one
- Point two
- Point three

## Links

[Link text](https://example.com)

## Images

![Alt text](/path/to/image.jpg)

## Conclusion

Wrap up your post here.
    `,
  },
];
```

### Markdown Features Supported:

- **Headings:** `#`, `##`, `###`, etc.
- **Bold:** `**text**`
- **Italic:** `*text*`
- **Code:** `` `inline code` ``
- **Code blocks:** ` ```language ... ``` `
- **Lists:** `-` or `1.`
- **Links:** `[text](url)`
- **Images:** `![alt](url)`
- **Tables:** GitHub-flavored markdown tables
- **Task lists:** `- [ ]` and `- [x]`

---

## 5. Update Social Links

### Footer (`src/components/layout/Footer.jsx`)

```javascript
// Lines 4-9
const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/YOUR_USERNAME', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/YOUR_USERNAME', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/YOUR_USERNAME', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:your@email.com', label: 'Email' },
]

// Line 16: Update copyright name
<p className="text-dark-600">
  &copy; {currentYear} Your Name. All rights reserved.
</p>
```

### About Section (`src/components/sections/About.jsx`)

```javascript
// Lines 8-12
const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/YOUR_USERNAME', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/YOUR_USERNAME', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/YOUR_USERNAME', label: 'Twitter' },
]
```

### Adding More Social Icons:

```javascript
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaDribbble } from 'react-icons/fa'

const socialLinks = [
  { icon: FaGithub, href: '...', label: 'GitHub' },
  { icon: FaLinkedin, href: '...', label: 'LinkedIn' },
  { icon: FaTwitter, href: '...', label: 'Twitter' },
  { icon: FaYoutube, href: '...', label: 'YouTube' },
  { icon: FaInstagram, href: '...', label: 'Instagram' },
  { icon: FaDribbble, href: '...', label: 'Dribbble' },
]
```

---

## 6. Change Colors & Styling

### File: `tailwind.config.js`

#### Primary Color (Accent):

```javascript
colors: {
  primary: {
    50: '#f5f7ff',   // Lightest
    100: '#ebf0fe',
    200: '#ced9fd',
    300: '#a4b8fa',
    400: '#748ef5',
    500: '#4f64ee',
    600: '#3a45e3',  // Main accent
    700: '#2f35cf',
    800: '#2b2fa8',
    900: '#282d85',  // Darkest
  },
}
```

#### Quick Color Changes:

Replace the primary color palette with your preferred color. Use a tool like [UI Colors](https://uicolors.app/) to generate a palette.

**Example - Change to Teal:**

```javascript
primary: {
  50: '#f0fdfa',
  100: '#ccfbf1',
  200: '#99f6e4',
  300: '#5eead4',
  400: '#2dd4bf',
  500: '#14b8a6',
  600: '#0d9488',  // Main accent
  700: '#0f766e',
  800: '#115e59',
  900: '#134e4a',
},
```

---

## 7. Add Profile Image

### Option 1: Replace Emoji with Image

Edit `src/components/sections/About.jsx`:

```jsx
// Replace lines 36-38 (the emoji div)
<div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 p-1">
  <img
    src="/profile.jpg"  // Place image in public/ folder
    alt="Your Name"
    className="w-full h-full rounded-2xl object-cover"
  />
</div>
```

### Option 2: Import Image

```jsx
import profileImage from '../assets/images/profile.jpg'

// Then use:
<img src={profileImage} alt="Your Name" className="..." />
```

### Recommended Image Specs:
- **Size:** 400x400px minimum
- **Format:** JPG or WebP
- **Aspect ratio:** 1:1 (square)

---

## 8. Configure Contact Form

### File: `src/components/sections/Contact.jsx`

The form currently logs to console. To make it functional:

### Option A: Formspree (Free tier available)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update the `onSubmit` function:

```javascript
const onSubmit = async (data) => {
  setIsSubmitting(true)
  setSubmitStatus(null)

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })

    if (response.ok) {
      setSubmitStatus('success')
      reset()
    } else {
      setSubmitStatus('error')
    }
  } catch {
    setSubmitStatus('error')
  } finally {
    setIsSubmitting(false)
  }
}
```

### Option B: EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Update the component:

```javascript
import emailjs from '@emailjs/browser'

const onSubmit = async (data) => {
  setIsSubmitting(true)
  setSubmitStatus(null)

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      'YOUR_PUBLIC_KEY'
    )
    setSubmitStatus('success')
    reset()
  } catch {
    setSubmitStatus('error')
  } finally {
    setIsSubmitting(false)
  }
}
```

### Update Contact Info Display:

```javascript
// Line 71-76: Update email
<a href="mailto:your@email.com" className="...">
  your@email.com
</a>

// Line 84: Update location
<p className="text-dark-800">Your City, Country</p>
```

---

## Quick Reference

| What to Change | File |
|----------------|------|
| Name & tagline | `src/components/sections/Hero.jsx` |
| Bio & about text | `src/components/sections/About.jsx` |
| Projects | `src/data/projects.js` |
| Skills | `src/data/skills.js` |
| Blog posts | `src/data/blogPosts.js` |
| Social links | `Footer.jsx` and `About.jsx` |
| Colors | `tailwind.config.js` |
| Page title | `index.html` |
| Contact info | `src/components/sections/Contact.jsx` |

---

## Need More Help?

- **React Icons:** Browse all icons at [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons)
- **Tailwind CSS:** Documentation at [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Color Palettes:** Generate at [uicolors.app](https://uicolors.app)

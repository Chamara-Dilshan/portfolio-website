export const blogPosts = [
  {
    slug: 'getting-started-with-react',
    title: 'Getting Started with React in 2026',
    date: 'January 22, 2026',
    excerpt:
      'Learn the fundamentals of React and start building modern web applications. This guide covers everything from setup to your first component.',
    tags: ['React', 'JavaScript', 'Tutorial'],
    readingTime: 5,
    content: `
React has become one of the most popular libraries for building user interfaces. In this guide, we'll explore the fundamentals of React and get you started on your journey to becoming a React developer.

## Why React?

React offers several advantages that make it a great choice for modern web development:

- **Component-Based Architecture**: Build encapsulated components that manage their own state
- **Virtual DOM**: Efficient updates and rendering
- **Large Ecosystem**: Tons of libraries and tools available
- **Strong Community**: Extensive documentation and support

## Setting Up Your First React Project

The easiest way to get started is using Vite:

\`\`\`bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
\`\`\`

## Your First Component

Here's a simple React component:

\`\`\`jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Welcome;
\`\`\`

## State Management with useState

React's \`useState\` hook lets you add state to functional components:

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## Conclusion

React is a powerful library that makes building user interfaces enjoyable. Start with the basics, practice regularly, and you'll be building amazing applications in no time!
    `,
  },
  {
    slug: 'tailwind-css-best-practices',
    title: 'Tailwind CSS Best Practices for Clean Code',
    date: 'January 20, 2026',
    excerpt:
      'Discover how to write maintainable Tailwind CSS code with these proven best practices and patterns.',
    tags: ['CSS', 'Tailwind', 'Best Practices'],
    readingTime: 4,
    content: `
Tailwind CSS is a utility-first CSS framework that can dramatically speed up your development workflow. However, without proper organization, your code can become difficult to maintain. Let's explore some best practices.

## 1. Use Component Extraction

Instead of repeating long class strings, extract them into reusable components:

\`\`\`jsx
// Instead of repeating this everywhere
<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Click me
</button>

// Create a reusable component
function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      {...props}
    >
      {children}
    </button>
  );
}
\`\`\`

## 2. Organize Classes Logically

Group your utility classes in a consistent order:

1. Layout (display, position, flex/grid)
2. Sizing (width, height, padding, margin)
3. Typography (font, text)
4. Visual (background, border, shadow)
5. Interactive (hover, focus, transition)

## 3. Use @apply Sparingly

While \`@apply\` can be useful, overusing it defeats the purpose of utility-first CSS:

\`\`\`css
/* Good for base styles */
@layer components {
  .btn {
    @apply px-4 py-2 rounded font-medium transition-colors;
  }
}
\`\`\`

## 4. Leverage Tailwind Config

Customize your design system in \`tailwind.config.js\`:

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4f64ee',
        secondary: '#61636b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
\`\`\`

## Conclusion

Following these best practices will help you write cleaner, more maintainable Tailwind CSS code. Remember, the goal is to find the right balance between utility classes and component abstractions.
    `,
  },
  {
    slug: 'building-restful-apis-nodejs',
    title: 'Building RESTful APIs with Node.js and Express',
    date: 'January 18, 2026',
    excerpt:
      'A comprehensive guide to building robust and scalable REST APIs using Node.js and Express framework.',
    tags: ['Node.js', 'Express', 'API', 'Backend'],
    readingTime: 6,
    content: `
Building APIs is a fundamental skill for any full-stack developer. In this tutorial, we'll create a RESTful API using Node.js and Express.

## Project Setup

First, initialize your project and install dependencies:

\`\`\`bash
mkdir my-api
cd my-api
npm init -y
npm install express cors dotenv
npm install -D nodemon
\`\`\`

## Basic Server Setup

Create your entry point file:

\`\`\`javascript
// index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

## Creating CRUD Routes

Here's a simple example with an in-memory data store:

\`\`\`javascript
let items = [];

// Get all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Get single item
app.get('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === req.params.id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});

// Create item
app.post('/api/items', (req, res) => {
  const item = { id: Date.now().toString(), ...req.body };
  items.push(item);
  res.status(201).json(item);
});

// Update item
app.put('/api/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  items[index] = { ...items[index], ...req.body };
  res.json(items[index]);
});

// Delete item
app.delete('/api/items/:id', (req, res) => {
  items = items.filter(i => i.id !== req.params.id);
  res.status(204).send();
});
\`\`\`

## Error Handling

Add a global error handler:

\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
\`\`\`

## Conclusion

You now have a basic understanding of building REST APIs with Express. From here, you can add authentication, database integration, and more advanced features.
    `,
  },
]

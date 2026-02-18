// Complete Next.js Basic Course - All Chapters
import { Chapter } from './types';

export const nextjsBasicCourse: Chapter[] = [
  {
    id: 'nextjs-basic-ch1-setup',
    title: 'Chapter 1: Next.js Setup & Introduction',
    introduction: 'Learn what Next.js is and set up your development environment.',
    topics: ['What is Next.js?', 'Installation', 'Project Structure', 'First Page', 'Dev Server'],
    content: `# Next.js Setup

Next.js is a React framework for building production-ready web applications.

## Why Next.js?

- **SEO Friendly** - Server-side rendering
- **Fast Performance** - Automatic optimization
- **File-based Routing** - No configuration needed
- **API Routes** - Build full-stack apps
- **TypeScript Support** - Built-in type safety

## Installation

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Project Structure

\`\`\`
my-app/
├── app/
│   ├── page.tsx      # Home page
│   ├── layout.tsx    # Root layout
│   └── globals.css   # Global styles
├── public/           # Static files
└── package.json      # Dependencies
\`\`\`

## Running the Dev Server

\`\`\`bash
npm run dev
# Open http://localhost:3000
\`\`\``,
    codeExamples: [
      {
        title: 'First Next.js Page',
        code: `// app/page.tsx
export default function Home() {
  return (
    <main>
      <h1>Welcome to Next.js!</h1>
      <p>Start building amazing apps</p>
    </main>
  );
}`,
        explanation: 'This is your first Next.js page. The app/page.tsx file is the home page of your application.'
      },
      {
        title: 'Installation Commands',
        code: `# Create new Next.js app
npx create-next-app@latest my-app

# Navigate to project
cd my-app

# Start development server
npm run dev`,
        explanation: 'These commands create a new Next.js project and start the development server.'
      }
    ],
    quiz: {
      id: 'nextjs-ch1-quiz',
      questions: [
        { id: 'q1', question: 'Next.js is built on top of?', options: ['Vue', 'React', 'Angular', 'Svelte'], correctAnswer: 1 },
        { id: 'q2', question: 'Command to create Next.js app?', options: ['npx create-next-app', 'npm init next', 'yarn create next', 'All of above'], correctAnswer: 0 },
        { id: 'q3', question: 'Dev server command?', options: ['npm start', 'npm run dev', 'npm build', 'npm run build'], correctAnswer: 1 },
        { id: 'q4', question: 'App Router uses which folder?', options: ['pages/', 'src/', 'app/', 'routes/'], correctAnswer: 2 },
        { id: 'q5', question: 'Home page file name?', options: ['index.tsx', 'home.tsx', 'page.tsx', 'main.tsx'], correctAnswer: 2 }
      ]
    },
    summary: 'Next.js is a React framework. Use create-next-app to scaffold. app/ folder contains routes. page.tsx is the home page.'
  },
  {
    id: 'nextjs-basic-ch2-routing',
    title: 'Chapter 2: File-based Routing',
    introduction: 'Learn how routing works in Next.js with the App Router.',
    topics: ['Static Routes', 'Dynamic Routes', 'Nested Routes', 'Link Component', 'Navigation'],
    content: `# File-based Routing

Next.js uses file-system based routing.

## Static Routes

Create folders in app/ directory:

\`\`\`
app/
├── page.tsx          → /
├── about/
│   └── page.tsx      → /about
└── contact/
    └── page.tsx      → /contact
\`\`\`

## Dynamic Routes

Use square brackets for dynamic segments:

\`\`\`
app/
└── blog/
    └── [slug]/
        └── page.tsx  → /blog/my-post
\`\`\`

## Link Component

Use Next.js Link for client-side navigation:

\`\`\`tsx
import Link from 'next/link';

<Link href="/about">About</Link>
\`\`\``,
    codeExamples: [
      {
        title: 'Creating Routes',
        code: `// app/about/page.tsx
export default function About() {
  return <h1>About Page</h1>;
}

// app/contact/page.tsx
export default function Contact() {
  return <h1>Contact Page</h1>;
}`,
        explanation: 'Each page.tsx file creates a new route based on its folder path.'
      },
      {
        title: 'Link Component',
        code: `import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}`,
        explanation: 'Link provides client-side navigation without page reload.'
      },
      {
        title: 'Dynamic Route',
        code: `// app/blog/[slug]/page.tsx
export default async function BlogPost({
  params
}: {
  params: { slug: string }
}) {
  return <h1>Post: {params.slug}</h1>;
}`,
        explanation: 'Dynamic routes receive params from the URL.'
      }
    ],
    quiz: {
      id: 'nextjs-ch2-quiz',
      questions: [
        { id: 'q1', question: 'Static route is created from?', options: ['Folder name', 'File content', 'Config file', 'Props'], correctAnswer: 0 },
        { id: 'q2', question: 'Dynamic route syntax?', options: ['{param}', '[param]', '<param>', ':param'], correctAnswer: 1 },
        { id: 'q3', question: 'Link component imported from?', options: ['next/router', 'next/link', 'react-router', 'next/navigation'], correctAnswer: 1 },
        { id: 'q4', question: 'Catch-all route syntax?', options: ['[...slug]', '[slug...]', '{...slug}', '*slug'], correctAnswer: 0 },
        { id: 'q5', question: 'Route groups use?', options: ['(folder)', '[folder]', '{folder}', '_folder'], correctAnswer: 0 }
      ]
    },
    summary: 'File-based routing is automatic. Static routes from folders. Dynamic with [param]. Link for navigation.'
  },
  {
    id: 'nextjs-basic-ch3-layouts',
    title: 'Chapter 3: Layouts',
    introduction: 'Learn how to create shared layouts in Next.js.',
    topics: ['Root Layout', 'Nested Layouts', 'Layout Composition', 'Shared UI'],
    content: `# Layouts

Layouts are UI components shared across multiple pages.

## Root Layout

app/layout.tsx wraps all pages:

\`\`\`tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
\`\`\`

## Nested Layouts

Create layout.tsx in any route:

\`\`\`
app/
├── layout.tsx        # Root layout
└── dashboard/
    ├── layout.tsx    # Dashboard layout
    └── page.tsx      # Dashboard page
\`\`\``,
    codeExamples: [
      {
        title: 'Root Layout with Navbar',
        code: `// app/layout.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}`,
        explanation: 'Root layout wraps all pages with Navbar and Footer.'
      },
      {
        title: 'Nested Dashboard Layout',
        code: `// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <aside className="w-64">
        <nav>Dashboard Nav</nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}`,
        explanation: 'Nested layouts provide section-specific UI.'
      }
    ],
    quiz: {
      id: 'nextjs-ch3-quiz',
      questions: [
        { id: 'q1', question: 'Layout file name?', options: ['layout.tsx', 'Layout.tsx', '_layout.tsx', 'index.tsx'], correctAnswer: 0 },
        { id: 'q2', question: 'Root layout receives?', options: ['children', 'props', 'params', 'state'], correctAnswer: 0 },
        { id: 'q3', question: 'How many root layouts?', options: ['One', 'Two', 'Multiple', 'None'], correctAnswer: 0 },
        { id: 'q4', question: 'Nested layouts go in?', options: ['Any route folder', 'Only root', 'public/', 'components/'], correctAnswer: 0 },
        { id: 'q5', question: 'Layout state persists?', options: ['Yes', 'No', 'Sometimes', 'Never'], correctAnswer: 0 }
      ]
    },
    summary: 'Layouts share UI across pages. Root layout wraps all. Nested layouts for sections.'
  },
  {
    id: 'nextjs-basic-ch4-pages',
    title: 'Chapter 4: Page Components',
    introduction: 'Learn how to create and use page components in Next.js.',
    topics: ['Page Component', 'Metadata', 'Server Components', 'Props'],
    content: `# Page Components

Pages are the main UI for each route.

## Basic Page

\`\`\`tsx
export default function Page() {
  return <h1>My Page</h1>;
}
\`\`\`

## Page with Metadata

\`\`\`tsx
export const metadata = {
  title: 'My Page',
  description: 'Description',
};

export default function Page() {
  return <h1>My Page</h1>;
}
\`\`\`

## Async Page (Server)

\`\`\`tsx
export default async function Page() {
  const data = await fetchData();
  return <div>{data.title}</div>;
}
\`\`\``,
    codeExamples: [
      {
        title: 'Page with Metadata',
        code: `export const metadata = {
  title: 'About Us',
  description: 'Learn about our company',
};

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a great company!</p>
    </div>
  );
}`,
        explanation: 'Metadata is used for SEO (title, description, etc.).'
      },
      {
        title: 'Async Server Page',
        code: `async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <div>{data.title}</div>;
}`,
        explanation: 'Server components can be async for data fetching.'
      }
    ],
    quiz: {
      id: 'nextjs-ch4-quiz',
      questions: [
        { id: 'q1', question: 'Page component must export?', options: ['default', 'named', 'const', 'let'], correctAnswer: 0 },
        { id: 'q2', question: 'Metadata export type?', options: ['const', 'let', 'var', 'function'], correctAnswer: 0 },
        { id: 'q3', question: 'Pages are which component type by default?', options: ['Server', 'Client', 'Hybrid', 'Static'], correctAnswer: 0 },
        { id: 'q4', question: 'Can pages be async?', options: ['Yes', 'No', 'Sometimes', 'Never'], correctAnswer: 0 },
        { id: 'q5', question: 'Metadata helps with?', options: ['SEO', 'Styling', 'Routing', 'State'], correctAnswer: 0 }
      ]
    },
    summary: 'Pages are default exports. Metadata for SEO. Server components by default. Can be async.'
  },
  {
    id: 'nextjs-basic-ch5-client-server',
    title: 'Chapter 5: Client vs Server Components',
    introduction: 'Understand the difference between Client and Server Components.',
    topics: ['Server Components', 'Client Components', 'use client', 'When to use each'],
    content: `# Client vs Server Components

## Server Components (Default)

- Render on server
- Zero bundle size
- Direct database access
- Cannot use hooks

\`\`\`tsx
// Server Component (no directive)
export default async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}
\`\`\`

## Client Components

- Render on client
- Use hooks (useState, useEffect)
- Handle interactivity
- Require 'use client'

\`\`\`tsx
'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
\`\`\``,
    codeExamples: [
      {
        title: 'Server Component',
        code: `// app/page.tsx (Server by default)
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return <h1>{data.title}</h1>;
}`,
        explanation: 'Server components fetch data on server. No bundle size.'
      },
      {
        title: 'Client Component',
        code: `'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`,
        explanation: "'use client' enables hooks and interactivity."
      },
      {
        title: 'Composition Pattern',
        code: `// Server Component importing Client
import Counter from '@/components/Counter';

export default async function Page() {
  const data = await fetchData();
  return (
    <div>
      <h1>{data.title}</h1>
      <Counter />  {/* Client Component */}
    </div>
  );
}`,
        explanation: 'Server components can import and render Client components.'
      }
    ],
    quiz: {
      id: 'nextjs-ch5-quiz',
      questions: [
        { id: 'q1', question: 'Default component type?', options: ['Server', 'Client', 'Hybrid', 'Static'], correctAnswer: 0 },
        { id: 'q2', question: 'use client directive goes?', options: ['Top of file', 'Bottom', 'Middle', 'Anywhere'], correctAnswer: 0 },
        { id: 'q3', question: 'useState can be used in?', options: ['Client', 'Server', 'Both', 'Neither'], correctAnswer: 0 },
        { id: 'q4', question: 'Server components render on?', options: ['Server', 'Client', 'Browser', 'Mobile'], correctAnswer: 0 },
        { id: 'q5', question: 'Client components bundle size?', options: ['Included', 'Zero', 'Half', 'Double'], correctAnswer: 0 }
      ]
    },
    summary: 'Server components default, async, zero bundle. Client for hooks, interactivity. Use "use client".'
  },
  {
    id: 'nextjs-basic-ch6-loading',
    title: 'Chapter 6: Loading & Error States',
    introduction: 'Learn how to handle loading and error states in Next.js.',
    topics: ['loading.tsx', 'error.tsx', 'not-found.tsx', 'Suspense'],
    content: `# Loading & Error States

## Loading UI

Create app/loading.tsx:

\`\`\`tsx
export default function Loading() {
  return (
    <div className="spinner">
      Loading...
    </div>
  );
}
\`\`\`

## Error Handling

Create app/error.tsx:

\`\`\`tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
\`\`\`

## 404 Page

Create app/not-found.tsx:

\`\`\`tsx
export default function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}
\`\`\``,
    codeExamples: [
      {
        title: 'Loading Component',
        code: `export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
    </div>
  );
}`,
        explanation: 'loading.tsx shows automatically during route changes.'
      },
      {
        title: 'Error Boundary',
        code: `'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Error!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}`,
        explanation: 'error.tsx catches errors in the route segment.'
      },
      {
        title: '404 Page',
        code: `export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p>Page not found</p>
    </div>
  );
}`,
        explanation: 'not-found.tsx shows for 404 errors.'
      }
    ],
    quiz: {
      id: 'nextjs-ch6-quiz',
      questions: [
        { id: 'q1', question: 'Loading file name?', options: ['loading.tsx', 'Loading.tsx', 'loader.tsx', 'spin.tsx'], correctAnswer: 0 },
        { id: 'q2', question: 'Error component type?', options: ['Client', 'Server', 'Both', 'Neither'], correctAnswer: 0 },
        { id: 'q3', question: '404 page file name?', options: ['404.tsx', 'not-found.tsx', 'error.tsx', 'missing.tsx'], correctAnswer: 1 },
        { id: 'q4', question: 'Loading shows on?', options: ['Route change', 'Page load', 'Build', 'Deploy'], correctAnswer: 0 },
        { id: 'q5', question: 'Error reset function?', options: ['reset()', 'retry()', 'reload()', 'refresh()'], correctAnswer: 0 }
      ]
    },
    summary: 'loading.tsx for loading states. error.tsx for errors. not-found.tsx for 404. All automatic.'
  },
  {
    id: 'nextjs-basic-ch7-data-fetching',
    title: 'Chapter 7: Data Fetching',
    introduction: 'Learn different ways to fetch data in Next.js.',
    topics: ['fetch API', 'Async Components', 'Caching', 'Revalidation'],
    content: `# Data Fetching

## Using fetch

\`\`\`tsx
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <div>{data.title}</div>;
}
\`\`\`

## Caching Options

\`\`\`tsx
// Cache (default)
fetch(url);

// No cache (dynamic)
fetch(url, { cache: 'no-store' });

// Revalidate every hour
fetch(url, { next: { revalidate: 3600 } });
\`\`\``,
    codeExamples: [
      {
        title: 'Basic Data Fetching',
        code: `async function getPosts() {
  const res = await fetch('https://api.example.com/posts');
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>{post.title}</article>
      ))}
    </div>
  );
}`,
        explanation: 'Fetch data in async server components.'
      },
      {
        title: 'Revalidation',
        code: `export default async function Page() {
  // Revalidate every 10 seconds
  const data = await fetch('https://api.example.com/data', {
    next: { revalidate: 10 }
  });
  
  return <div>{data.title}</div>;
}`,
        explanation: 'revalidate option refreshes cached data.'
      },
      {
        title: 'No Cache (Dynamic)',
        code: `export default async function Dashboard() {
  // Always fresh data
  const data = await fetch('https://api.example.com/user', {
    cache: 'no-store'
  });
  
  return <div>{data.name}</div>;
}`,
        explanation: 'cache: no-store makes request dynamic.'
      }
    ],
    quiz: {
      id: 'nextjs-ch7-quiz',
      questions: [
        { id: 'q1', question: 'Default fetch behavior?', options: ['Cached', 'No cache', 'Dynamic', 'Random'], correctAnswer: 0 },
        { id: 'q2', question: 'Make dynamic with?', options: ['cache: no-store', 'cache: store', 'dynamic: true', 'static: false'], correctAnswer: 0 },
        { id: 'q3', question: 'revalidate value is in?', options: ['Seconds', 'Minutes', 'Hours', 'Milliseconds'], correctAnswer: 0 },
        { id: 'q4', question: 'Data fetching in components?', options: ['async/await', 'useEffect', 'componentDidMount', 'Promise'], correctAnswer: 0 },
        { id: 'q5', question: 'fetch returns?', options: ['Promise', 'Array', 'Object', 'String'], correctAnswer: 0 }
      ]
    },
    summary: 'Use fetch in async components. Cached by default. Revalidate for ISR. No-store for dynamic.'
  },
  {
    id: 'nextjs-basic-ch8-metadata',
    title: 'Chapter 8: Metadata & SEO',
    introduction: 'Learn how to add metadata for SEO in Next.js.',
    topics: ['Metadata API', 'Open Graph', 'Twitter Cards', 'Icons'],
    content: `# Metadata & SEO

## Static Metadata

\`\`\`tsx
export const metadata = {
  title: 'My App',
  description: 'My awesome app',
  keywords: ['nextjs', 'react'],
};
\`\`\`

## Dynamic Metadata

\`\`\`tsx
export async function generateMetadata({
  params
}): Promise<Metadata> {
  return {
    title: \`Post: \${params.id}\`,
  };
}
\`\`\`

## Open Graph

\`\`\`tsx
export const metadata = {
  openGraph: {
    title: 'My App',
    images: ['/og.png'],
  },
};
\`\`\``,
    codeExamples: [
      {
        title: 'Complete Metadata',
        code: `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'A complete Next.js application',
  keywords: ['nextjs', 'react', 'web'],
  authors: [{ name: 'John Doe' }],
  openGraph: {
    title: 'My Next.js App',
    description: 'A complete Next.js application',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Next.js App',
  },
};`,
        explanation: 'Complete metadata for SEO and social sharing.'
      },
      {
        title: 'Dynamic Metadata',
        code: `import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}`,
        explanation: 'Generate metadata dynamically based on content.'
      }
    ],
    quiz: {
      id: 'nextjs-ch8-quiz',
      questions: [
        { id: 'q1', question: 'Metadata export type?', options: ['const', 'let', 'var', 'function'], correctAnswer: 0 },
        { id: 'q2', question: 'Dynamic metadata function?', options: ['generateMetadata', 'createMetadata', 'makeMetadata', 'buildMetadata'], correctAnswer: 0 },
        { id: 'q3', question: 'Open Graph is for?', options: ['Social sharing', 'SEO', 'Styling', 'Routing'], correctAnswer: 0 },
        { id: 'q4', question: 'Twitter card type?', options: ['summary_large_image', 'large_card', 'twitter_card', 'social_card'], correctAnswer: 0 },
        { id: 'q5', question: 'Metadata helps with?', options: ['SEO', 'Performance', 'Styling', 'State'], correctAnswer: 0 }
      ]
    },
    summary: 'Metadata for SEO. Static with export const. Dynamic with generateMetadata. Open Graph for social.'
  }
];

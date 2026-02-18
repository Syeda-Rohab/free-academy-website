// Complete Next.js Advanced Course - All Chapters
import { Chapter } from './types';

export const nextjsAdvancedCourse: Chapter[] = [
  {
    id: 'nextjs-adv-ch1-dynamic-routes',
    title: 'Chapter 1: Advanced Dynamic Routes',
    introduction: 'Master advanced dynamic routing patterns.',
    topics: ['Catch-all Routes', 'Optional Catch-all', 'Multiple Params', 'generateStaticParams'],
    content: `# Advanced Dynamic Routes

## Catch-all Routes

\`\`\`
app/
└── docs/
    └── [...slug]/
        └── page.tsx
\`\`\`

Matches: /docs/a, /docs/a/b, /docs/a/b/c

## Optional Catch-all

\`\`\`
app/
└── docs/
    └── [[...slug]]/
        └── page.tsx
\`\`\`

Also matches: /docs

## generateStaticParams

\`\`\`tsx
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({ slug: post.slug }));
}
\`\`\``,
    codeExamples: [
      {
        title: 'Catch-all Route',
        code: `// app/docs/[...slug]/page.tsx
export default async function DocsPage({
  params
}: {
  params: { slug: string[] }
}) {
  return (
    <div>
      <h1>Docs: {params.slug.join('/')}</h1>
    </div>
  );
}`,
        explanation: 'Catch-all routes receive array of params.'
      },
      {
        title: 'generateStaticParams',
        code: `// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json());
  
  return posts.map(post => ({ slug: post.slug }));
}

export default async function BlogPost({
  params
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug);
  return <article>{post.content}</article>;
}`,
        explanation: 'generateStaticParams pre-renders dynamic routes.'
      }
    ],
    quiz: {
      id: 'nextjs-adv-ch1-quiz',
      questions: [
        { id: 'q1', question: 'Catch-all syntax?', options: ['[...slug]', '[slug...]', '{...slug}', '*slug'], correctAnswer: 0 },
        { id: 'q2', question: 'Optional catch-all?', options: ['[[...slug]]', '[...slug]?', '[...slug]?', '[[slug...]]'], correctAnswer: 0 },
        { id: 'q3', question: 'generateStaticParams is?', options: ['Async function', 'Sync function', 'Component', 'Hook'], correctAnswer: 0 },
        { id: 'q4', question: 'Multiple params syntax?', options: ['[a]/[b]', '[a,b]', '{a}/{b}', ':a/:b'], correctAnswer: 0 },
        { id: 'q5', question: 'generateStaticParams returns?', options: ['Array', 'Object', 'String', 'Promise'], correctAnswer: 0 }
      ]
    },
    summary: 'Catch-all with [...slug]. Optional with [[...slug]]. generateStaticParams for SSG.'
  },
  {
    id: 'nextjs-adv-ch2-route-handlers',
    title: 'Chapter 2: Route Handlers (API)',
    introduction: 'Create API endpoints with Route Handlers.',
    topics: ['GET', 'POST', 'PUT', 'DELETE', 'Request', 'Response'],
    content: `# Route Handlers

Create API endpoints in app/api/:

\`\`\`
app/
└── api/
    └── users/
        └── route.ts
\`\`\`

## HTTP Methods

\`\`\`tsx
export async function GET(request: Request) {
  return Response.json({ users: [] });
}

export async function POST(request: Request) {
  const body = await request.json();
  return Response.json({ created: body });
}
\`\`\``,
    codeExamples: [
      {
        title: 'GET Handler',
        code: `// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ];
  
  return NextResponse.json({ users });
}`,
        explanation: 'GET handler returns JSON response.'
      },
      {
        title: 'POST Handler',
        code: `// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  // Validate
  if (!body.name) {
    return NextResponse.json(
      { error: 'Name required' },
      { status: 400 }
    );
  }
  
  // Create user
  const user = { id: Date.now(), ...body };
  
  return NextResponse.json(user, { status: 201 });
}`,
        explanation: 'POST handler creates new resource.'
      },
      {
        title: 'Dynamic Route Handler',
        code: `// app/api/users/[id]/route.ts
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = { id: params.id, name: 'User' };
  return NextResponse.json(user);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({ deleted: params.id });
}`,
        explanation: 'Dynamic handlers receive params.'
      }
    ],
    quiz: {
      id: 'nextjs-adv-ch2-quiz',
      questions: [
        { id: 'q1', question: 'Route handlers go in?', options: ['app/api/', 'app/routes/', 'api/', 'handlers/'], correctAnswer: 0 },
        { id: 'q2', question: 'GET returns?', options: ['Response', 'String', 'Array', 'Object'], correctAnswer: 0 },
        { id: 'q3', question: 'Parse JSON body?', options: ['request.json()', 'request.body', 'request.data', 'request.parse()'], correctAnswer: 0 },
        { id: 'q4', question: 'Status code in response?', options: ['{ status: 400 }', 'status: 400', 'code: 400', 'error: 400'], correctAnswer: 0 },
        { id: 'q5', question: 'Dynamic handler receives?', options: ['params', 'query', 'body', 'headers'], correctAnswer: 0 }
      ]
    },
    summary: 'Route handlers in app/api/. Export GET, POST, etc. Use NextResponse.'
  },
  {
    id: 'nextjs-adv-ch3-middleware',
    title: 'Chapter 3: Middleware',
    introduction: 'Run code before requests with Middleware.',
    topics: ['middleware.ts', 'NextResponse', 'Auth', 'Redirects'],
    content: `# Middleware

Create middleware.ts in root:

\`\`\`tsx
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Run before every request
  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
\`\`\`

## Use Cases

- Authentication
- Redirects
- Headers
- Logging
- Geo-location`,
    codeExamples: [
      {
        title: 'Auth Middleware',
        code: `// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');
  
  // Protect dashboard routes
  if (
    request.nextUrl.pathname.startsWith('/dashboard') &&
    !token
  ) {
    return NextResponse.redirect(
      new URL('/login', request.url)
    );
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};`,
        explanation: 'Middleware protects routes with auth check.'
      },
      {
        title: 'Add Headers',
        code: `// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Add security headers
  response.headers.set(
    'X-Frame-Options',
    'DENY'
  );
  response.headers.set(
    'X-Content-Type-Options',
    'nosniff'
  );
  
  return response;
}`,
        explanation: 'Middleware can modify response headers.'
      }
    ],
    quiz: {
      id: 'nextjs-adv-ch3-quiz',
      questions: [
        { id: 'q1', question: 'Middleware file name?', options: ['middleware.ts', 'Middleware.ts', 'middleware.js', 'middleware.tsx'], correctAnswer: 0 },
        { id: 'q2', question: 'Middleware runs on?', options: ['Server', 'Client', 'Both', 'Neither'], correctAnswer: 0 },
        { id: 'q3', question: 'Redirect with?', options: ['NextResponse.redirect', 'NextResponse.next', 'NextResponse.rewrite', 'NextResponse.go'], correctAnswer: 0 },
        { id: 'q4', question: 'Matcher config?', options: ['export const config', 'export let config', 'export function config', 'export default config'], correctAnswer: 0 },
        { id: 'q5', question: 'Middleware can access?', options: ['Request', 'Response', 'Both', 'Neither'], correctAnswer: 2 }
      ]
    },
    summary: 'Middleware runs before requests. Use for auth, redirects, headers. Configure with matcher.'
  },
  {
    id: 'nextjs-adv-ch4-caching',
    title: 'Chapter 4: Caching & Revalidation',
    introduction: 'Master Next.js caching strategies.',
    topics: ['Request Memoization', 'Data Cache', 'Revalidation', 'Cache Tags'],
    content: `# Caching

## Cache Options

\`\`\`tsx
// Cache (default)
fetch(url);

// No cache
fetch(url, { cache: 'no-store' });

// Revalidate every hour
fetch(url, { next: { revalidate: 3600 } });

// Cache with tags
fetch(url, { next: { tags: ['posts'] } });
\`\`\`

## Revalidation

\`\`\`tsx
import { revalidatePath } from 'next/cache';

revalidatePath('/blog');
revalidateTag('posts');
\`\`\``,
    codeExamples: [
      {
        title: 'Time-based Revalidation',
        code: `export default async function Page() {
  // Revalidate every 10 minutes
  const data = await fetch('https://api.example.com/data', {
    next: { revalidate: 600 }
  });
  
  return <div>{data.title}</div>;
}`,
        explanation: 'Data refreshes every 10 minutes automatically.'
      },
      {
        title: 'Tag-based Revalidation',
        code: `// Fetch with tags
export default async function Page() {
  const posts = await fetch('https://api.example.com/posts', {
    next: { tags: ['posts'] }
  });
  
  return <div>{posts.title}</div>;
}

// Revalidate in Server Action
'use server';
import { revalidateTag } from 'next/cache';

export async function createPost() {
  await db.post.create(data);
  revalidateTag('posts');
}`,
        explanation: 'Tags allow targeted cache invalidation.'
      },
      {
        title: 'Path Revalidation',
        code: `'use server';
import { revalidatePath } from 'next/cache';

export async function updatePost(formData: FormData) {
  await db.post.update(formData);
  revalidatePath('/blog');
  revalidatePath('/blog/[slug]', 'page');
}`,
        explanation: 'revalidatePath invalidates specific routes.'
      }
    ],
    quiz: {
      id: 'nextjs-adv-ch4-quiz',
      questions: [
        { id: 'q1', question: 'Default cache behavior?', options: ['Cached', 'No cache', 'Dynamic', 'Random'], correctAnswer: 0 },
        { id: 'q2', question: 'revalidate value unit?', options: ['Seconds', 'Minutes', 'Hours', 'Milliseconds'], correctAnswer: 0 },
        { id: 'q3', question: 'Tag revalidation function?', options: ['revalidateTag', 'invalidateTag', 'clearTag', 'removeTag'], correctAnswer: 0 },
        { id: 'q3', question: 'Path revalidation function?', options: ['revalidatePath', 'invalidatePath', 'clearPath', 'removePath'], correctAnswer: 0 },
        { id: 'q5', question: 'No cache option?', options: ['cache: no-store', 'cache: false', 'noCache: true', 'dynamic: true'], correctAnswer: 0 }
      ]
    },
    summary: 'Cached by default. Revalidate with time or tags. Use revalidatePath for on-demand.'
  },
  {
    id: 'nextjs-adv-ch5-server-actions',
    title: 'Chapter 5: Server Actions',
    introduction: 'Run server code directly from components.',
    topics: ['use server', 'Form Actions', 'Mutations', 'Revalidation'],
    content: `# Server Actions

Run server functions from Client components:

\`\`\`tsx
'use server';

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  await db.post.create({ title });
  revalidatePath('/posts');
}
\`\`\`

## Form Action

\`\`\`tsx
<form action={createPost}>
  <input name="title" />
  <button type="submit">Create</button>
</form>
\`\`\``,
    codeExamples: [
      {
        title: 'Basic Server Action',
        code: `'use server';
import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  
  // Create post
  await db.post.create({
    data: { title, content }
  });
  
  // Revalidate
  revalidatePath('/posts');
}`,
        explanation: 'Server actions handle form submissions on server.'
      },
      {
        title: 'Server Action with Form',
        code: `import { createPost } from './actions';

export default function PostForm() {
  return (
    <form action={createPost} className="space-y-4">
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          required
          className="border p-2"
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          required
          className="border p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2"
      >
        Create Post
      </button>
    </form>
  );
}`,
        explanation: 'Form action attribute connects to Server Action.'
      },
      {
        title: 'Action with useOptimistic',
        code: `'use client';
import { useOptimistic } from 'react';
import { addComment } from './actions';

export default function Comments({
  initialComments
}: {
  initialComments: string[];
}) {
  const [optimisticComments, addOptimistic] =
    useOptimistic(
      initialComments,
      (state, newComment: string) => [
        ...state,
        newComment
      ]
    );

  return (
    <form action={async (formData) => {
      const comment = formData.get('comment') as string;
      addOptimistic(comment);
      await addComment(formData);
    }}>
      <input name="comment" />
      <button type="submit">Add</button>
      <ul>
        {optimisticComments.map(c => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </form>
  );
}`,
        explanation: 'useOptimistic shows instant UI updates.'
      }
    ],
    quiz: {
      id: 'nextjs-adv-ch5-quiz',
      questions: [
        { id: 'q1', question: 'Server action directive?', options: ['use server', 'use client', 'use action', 'use api'], correctAnswer: 0 },
        { id: 'q2', question: 'Form action prop?', options: ['action', 'onSubmit', 'handler', 'submit'], correctAnswer: 0 },
        { id: 'q3', question: 'Get form data?', options: ['FormData', 'request.body', 'req.body', 'props'], correctAnswer: 0 },
        { id: 'q4', question: 'Revalidate after mutation?', options: ['revalidatePath', 'revalidateTag', 'Both', 'Neither'], correctAnswer: 2 },
        { id: 'q5', question: 'Optimistic UI hook?', options: ['useOptimistic', 'useOptimisticUI', 'useOptimisticState', 'useOptimisticRender'], correctAnswer: 0 }
      ]
    },
    summary: 'Server actions with use server. Form actions for mutations. Revalidate after changes.'
  },
  {
    id: 'nextjs-adv-ch6-streaming',
    title: 'Chapter 6: Streaming & Suspense',
    introduction: 'Stream content progressively to users.',
    topics: ['Suspense', 'Streaming', 'Progressive Loading', 'use Hook'],
    content: `# Streaming & Suspense

## Suspense Boundaries

\`\`\`tsx
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <SlowComponent />
    </Suspense>
  );
}
\`\`\`

## Multiple Boundaries

\`\`\`tsx
<Suspense fallback={<SidebarSkeleton />}>
  <Sidebar />
</Suspense>
<Suspense fallback={<MainSkeleton />}>
  <MainContent />
</Suspense>
\`\`\``,
    codeExamples: [
      {
        title: 'Basic Streaming',
        code: `import { Suspense } from 'react';

async function SlowComponent() {
  const data = await fetchData();
  return <div>{data}</div>;
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <SlowComponent />
    </Suspense>
  );
}

function Loading() {
  return <div>Loading...</div>;
}`,
        explanation: 'Suspense streams content as it loads.'
      },
      {
        title: 'Progressive Loading',
        code: `import { Suspense } from 'react';

export default function Dashboard() {
  return (
    <div>
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      
      <Suspense fallback={<GraphSkeleton />}>
        <Graph />
      </Suspense>
      
      <Suspense fallback={<TableSkeleton />}>
        <Table />
      </Suspense>
    </div>
  );
}`,
        explanation: 'Multiple Suspense boundaries for progressive loading.'
      },
      {
        title: 'use Hook',
        code: `'use client';
import { use } from 'react';

function Content({
  promise
}: {
  promise: Promise<{ title: string }>;
}) {
  const data = use(promise);
  return <h1>{data.title}</h1>;
}

export default function Page() {
  const dataPromise = fetchData();
  
  return (
    <Suspense fallback={<Loading />}>
      <Content promise={dataPromise} />
    </Suspense>
  );
}`,
        explanation: 'use hook unwraps promises in Client components.'
      }
    ],
    quiz: {
      id: 'nextjs-adv-ch6-quiz',
      questions: [
        { id: 'q1', question: 'Suspense imported from?', options: ['react', 'next', 'next/react', 'react-dom'], correctAnswer: 0 },
        { id: 'q2', question: 'Suspense requires?', options: ['fallback', 'children', 'Both', 'Neither'], correctAnswer: 2 },
        { id: 'q3', question: 'Streaming sends?', options: ['Chunks', 'Full HTML', 'JSON', 'XML'], correctAnswer: 0 },
        { id: 'q4', question: 'use hook unwraps?', options: ['Promises', 'State', 'Props', 'Events'], correctAnswer: 0 },
        { id: 'q5', question: 'Multiple Suspense for?', options: ['Progressive loading', 'Error handling', 'Styling', 'Routing'], correctAnswer: 0 }
      ]
    },
    summary: 'Suspense for streaming. Fallback for loading. Multiple boundaries for progressive UI.'
  },
  {
    id: 'nextjs-adv-ch7-deployment',
    title: 'Chapter 7: Deployment & Production',
    introduction: 'Deploy your Next.js app to production.',
    topics: ['Vercel', 'Docker', 'Environment Variables', 'Build Optimization'],
    content: `# Deployment

## Deploy to Vercel

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Build Locally

\`\`\`bash
npm run build
npm start
\`\`\`

## Environment Variables

\`\`\`
# .env.local
DATABASE_URL="..."
API_KEY="..."
\`\`\``,
    codeExamples: [
      {
        title: 'Vercel Deployment',
        code: `# Push to Git
git push

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod`,
        explanation: 'Vercel automatically builds and deploys Next.js apps.'
      },
      {
        title: 'Docker Deployment',
        code: `# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

# Build and run
docker build -t nextjs-app .
docker run -p 3000:3000 nextjs-app`,
        explanation: 'Docker for self-hosted deployment.'
      },
      {
        title: 'Environment Variables',
        code: `# .env.local
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_API_URL="https://api.example.com"

# Access in code
const dbUrl = process.env.DATABASE_URL;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;`,
        explanation: 'NEXT_PUBLIC_ variables are exposed to client.'
      }
    ],
    quiz: {
      id: 'nextjs-adv-ch7-quiz',
      questions: [
        { id: 'q1', question: 'Vercel command?', options: ['vercel', 'deploy', 'next deploy', 'vercel deploy'], correctAnswer: 0 },
        { id: 'q2', question: 'Build command?', options: ['npm run build', 'npm build', 'next build', 'build next'], correctAnswer: 0 },
        { id: 'q3', question: 'Start production server?', options: ['npm start', 'npm run dev', 'npm run build', 'npm run prod'], correctAnswer: 0 },
        { id: 'q4', question: 'Client env var prefix?', options: ['NEXT_PUBLIC_', 'PUBLIC_', 'CLIENT_', 'BROWSER_'], correctAnswer: 0 },
        { id: 'q5', question: 'Env file name?', options: ['.env.local', '.env', 'env.local', '.env.development'], correctAnswer: 0 }
      ]
    },
    summary: 'Deploy to Vercel or Docker. Build with npm run build. Use .env.local for secrets.'
  }
];

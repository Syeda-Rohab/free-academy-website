import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware - Runs before every request
 * Use cases: Authentication, redirects, headers, logging
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Example 1: Logging (in production, send to logging service)
  console.log(`[${new Date().toISOString()}] ${request.method} ${pathname}`);

  // Example 2: Add security headers
  const response = NextResponse.next();
  
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Example 3: Geo-based customization (if available)
  const country = request.geo?.country || 'US';
  response.cookies.set('country', country, {
    maxAge: 60 * 60 * 24, // 1 day
    httpOnly: false,
  });

  // Example 4: Protected routes (uncomment to enable)
  /*
  const isProtectedRoute = pathname.startsWith('/dashboard');
  const isAuthenticated = request.cookies.has('auth-token');

  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  */

  // Example 5: Redirect old routes to new routes
  if (pathname === '/old-about') {
    return NextResponse.redirect(new URL('/about', request.url));
  }

  return response;
}

// Configure which routes should run middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

import { NextResponse, type NextRequest } from 'next/server';

/**
 * URL Locker Middleware
 * Protects routes based on authentication status and roles (via cookies)
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Get mock auth data from cookies
  const isAuthenticated = request.cookies.get('auth-session')?.value === 'true';
  const userRole = request.cookies.get('auth-role')?.value || 'guest';

  // 1. Dashboard Protection (Requires Auth)
  if (pathname.startsWith('/dashboard')) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL(`/?redirect=${pathname}`, request.url));
    }
  }

  // 2. Admin Protection (Requires Admin Role)
  if (pathname.startsWith('/admin')) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL(`/?redirect=${pathname}`, request.url));
    }
    if (userRole !== 'admin') {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
  ],
};

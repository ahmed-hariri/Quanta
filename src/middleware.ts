import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow the home page and coming-soon page
    if (pathname === '/' || pathname === '/coming-soon') {
        return NextResponse.next();
    }

    // Redirect all other pages to coming-soon
    if (pathname.startsWith('/_next') || 
        pathname.startsWith('/api') || 
        pathname.startsWith('/favicon') ||
        pathname.includes('.')) {
        // Allow Next.js internal routes, API routes, and static files
        return NextResponse.next();
    }

    // Redirect to coming-soon page
    return NextResponse.redirect(new URL('/coming-soon', request.url));
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (images, etc.)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico)).*)',
    ],
};


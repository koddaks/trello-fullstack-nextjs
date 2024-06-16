import { auth, authMiddleware, clerkMiddleware, redirectToSignIn } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// export default clerkMiddleware();

export default authMiddleware({
  publicRoutes: ['/'],
  afterAuth(auth, req) {
    if (auth.userId && auth.isPublicRoute) {
      let path = '/select-org';

      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
      }

      const orgSeletion = new URL(path, req.url);
      return NextResponse.redirect(orgSeletion);
    }

    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    if( auth.userId && !auth.orgId && req.nextUrl.pathname !== '/select-org') {
      const orgSeletion = new URL('/select-org', req.url);
      return NextResponse.redirect(orgSeletion);
    }
  },
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

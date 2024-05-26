import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
    publicRoutes:['/dashboard']
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
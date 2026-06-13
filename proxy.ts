import { withAuth } from "next-auth/middleware";

export const proxy = withAuth({
  pages: {
    signIn: "/auth/login",
  },
});

export const config = {
  matcher: ["/dashboard/:path*"],
};

import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export default {
  providers: [Google],
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error",
  },
} satisfies NextAuthConfig;

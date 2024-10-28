"use server";

import { signIn } from "@/server/auth";

export const signInWithGoogle = async (redirectUrl?: string) => {
  await signIn("google", { redirectTo: redirectUrl ?? "/" });
};

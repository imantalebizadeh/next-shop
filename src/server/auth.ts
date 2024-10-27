import "server-only";

import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

import { db } from "./db";
import { accounts } from "./db/schema/accounts";
import { users } from "./db/schema/users";

import authConfig from "@/config/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, { accountsTable: accounts, usersTable: users }),
  session: { strategy: "jwt" },
  ...authConfig,
});

import "server-only";

import { env } from "@/env";
import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle(env.DATABASE_URL, { casing: "snake_case" });

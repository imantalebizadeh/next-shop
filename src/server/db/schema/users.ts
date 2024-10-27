import { pgEnum, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const userRole = pgEnum("user_role", ["user", "admin"]);

export const users = pgTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("full_name", { length: 255 }).notNull(),
  email: text().unique(),
  password: varchar({ length: 128 }),
  image: varchar({ length: 500 }).notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  role: userRole().default("user"),
});

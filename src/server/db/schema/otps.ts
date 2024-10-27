import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

import { users } from "./users";

export const otps = pgTable("otps", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text()
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  code: varchar({ length: 8 }).notNull(),
  email: varchar({ length: 255 }).unique().notNull(),
  expiresAt: timestamp({
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  textModifiers: text("text_modifiers")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  intModifiers: integer("int_modifiers", { mode: "boolean" })
    .notNull()
    .default(false),
});

export const schema = {
  users,
};

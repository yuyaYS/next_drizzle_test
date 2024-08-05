import {
  varchar,
  serial,
  text,
  timestamp,
  pgTable,
  boolean,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const todoTable = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  isActive: boolean("is_active").default(false).notNull(),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at"),
  userId: varchar("userId", { length: 256 }).notNull(),
});

export type InsertUser = typeof todoTable.$inferInsert;
export type SelectUser = typeof todoTable.$inferSelect;

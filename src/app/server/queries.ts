"use server";

import { asc, between, count, eq, sql } from "drizzle-orm";
import { db } from "./db";
import { InsertUser, SelectUser, todoTable } from "./db/schema";
import { revalidatePath } from "next/cache";

export async function addTodo(
  prevState: { success: boolean },
  formData: FormData
) {
  const title = formData.get("title") as string;
  if (title.trim()) {
    await db.insert(todoTable).values({ title: title.trim() });
    revalidatePath("/");
    return { success: true };
  }
  return { success: false };
}
// export async function toggleTodo(id: number, isActive: boolean) {
//   await db
//     .update(todoTable)
//     .set({ isActive: true })
//     .where(eq(todoTable.id, id));
//   revalidatePath("/");
// }

// Fetch the current state from the database
export async function toggleTodo(formData: FormData) {
  const id = parseInt(formData.get("id") as string);
  const completed = formData.get("isActive") === "true";

  await db
    .update(todoTable)
    .set({ isActive: !completed })
    .where(eq(todoTable.id, id));

  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const id = parseInt(formData.get("id") as string);
  await db.delete(todoTable).where(eq(todoTable.id, id));
  revalidatePath("/");
}

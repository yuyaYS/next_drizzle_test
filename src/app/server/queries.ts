"use server";

import { eq } from "drizzle-orm";
import { db } from "./db";
import { todoTable } from "./db/schema";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

export async function addTodo(
  prevState: { success: boolean },
  formData: FormData
) {
  const user = auth();
  if (!user.userId) {
    throw new Error("User ID is required");
  }
  const title = formData.get("title") as string;
  if (title.trim()) {
    try {
      await db.insert(todoTable).values({
        title: title.trim(),
        isActive: false,
        createdAt: new Date(),
        userId: user.userId,
      });
      revalidatePath("/");
      return { success: true };
    } catch (error) {
      console.error("Error inserting todo:", error);
    }
  }
  return { success: false };
}

export async function toggleTodo(formData: FormData) {
  const id = parseInt(formData.get("id") as string);
  const currentIsActive = formData.get("isActive") === "true";
  const newIsActive = !currentIsActive;

  console.log(
    `Toggling todo ${id} from isActive: ${currentIsActive} to ${newIsActive}`
  );

  await db
    .update(todoTable)
    .set({ isActive: newIsActive })
    .where(eq(todoTable.id, id));

  console.log(`Todo ${id} updated. New isActive state: ${newIsActive}`);

  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const id = parseInt(formData.get("id") as string);
  await db.delete(todoTable).where(eq(todoTable.id, id));
  console.log("deleted");
  revalidatePath("/");
}

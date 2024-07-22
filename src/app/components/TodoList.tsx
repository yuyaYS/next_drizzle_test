import { db } from "../server/db";
import { todoTable } from "../server/db/schema";
import TodoItem from "./TodoItem";
import { asc, desc } from "drizzle-orm";
type todoItem = {
  id: number;
  title: string;
  isActive: boolean;
};
export default async function TodoList() {
  const todoItems = await db
    .select()
    .from(todoTable)
    .orderBy(desc(todoTable.createdAt));

  return (
    <ul className="space-y-4">
      {todoItems.map((todo: todoItem) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

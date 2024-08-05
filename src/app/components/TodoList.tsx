import { auth } from "@clerk/nextjs/server";
import { db } from "../server/db";
import TodoItem from "./TodoItem";
type todoItem = {
  id: number;
  title: string;
  isActive: boolean;
};
export default async function TodoList() {
  const user = auth();
  if (!user.userId) throw new Error("Unauthrized");

  const todoItems = await db.query.todoTable.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <ul className="space-y-4">
      {todoItems.map((todo: todoItem) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

import { db } from "../server/db";
import { todoTable } from "../server/db/schema";
import TodoItem from "./TodoItem";

export default async function TodoList() {
  const todoItems = await db.select().from(todoTable);

  return (
    <ul className="space-y-4">
      {todoItems.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

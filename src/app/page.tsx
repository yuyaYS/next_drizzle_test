import { Createlist } from "./server/queries";
import { useState } from "react";
import { db } from "./server/db";
import { todoTable } from "./server/db/schema";

export type TodoItem = {
  id: number;
  title: string;
  isActive: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
};

export default async function Home() {
  const users = await db.select().from(todoTable);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.title} ({user.isActive})
          </li>
        ))}
        Hi
      </ul>
    </div>
  );
}

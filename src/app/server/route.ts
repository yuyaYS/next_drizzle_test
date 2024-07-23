import { NextResponse } from "next/server";
import { db } from "./db";
import { todoTable } from "./db/schema";

// export async function GET() {
//   const todoItems = await db.select().from(todoTable);
//   return NextResponse.json(todoItems);
// }

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { Suspense } from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
} from "@clerk/nextjs";

export type TodoItem = {
  id: number;
  title: string;
  isActive: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
};
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-gray-500 to-green-500">
      <SignedOut>
        <div className="text-center text-2xl">Please sign in</div>
      </SignedOut>
      <SignedIn>
        <div className="container mx-auto px-4 py-16">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">TaskMaster</h1>
            <p className="text-xl text-white opacity-80">
              Organize your day, achieve your goals
            </p>
          </header>

          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Your Tasks
              </h2>
              <Suspense fallback={<div>Loading todos...</div>}>
                <TodoForm />
              </Suspense>
              <div className="mt-8">
                <Suspense fallback={<div>Loading todos...</div>}>
                  <TodoList />
                </Suspense>
              </div>
            </div>
          </div>

          <footer className="mt-16 text-center text-white opacity-70">
            <p>&copy; 2024 TaskMaster. All rights reserved.</p>
          </footer>
        </div>
      </SignedIn>
    </div>
  );
}

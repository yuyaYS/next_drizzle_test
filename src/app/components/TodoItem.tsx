import { isatty } from "tty";
import { deleteTodo, toggleTodo } from "../server/queries";

export default function TodoItem({
  id,
  title,
  isActive,
}: {
  id: number;
  title: string;
  isActive: boolean;
}) {
  return (
    <li className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
      <form action={toggleTodo}>
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="isActive" value={isActive.toString()} />
        <button type="submit" className="flex items-center w-full text-left">
          <div className="w-5 h-5 mr-3 border-2 border-purple-600 rounded flex items-center justify-center">
            {isActive && (
              <svg
                className="w-3 h-3 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
            )}
          </div>
          <span
            className={`text-lg ${
              isActive ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {title}
          </span>
        </button>
      </form>
      <form action={deleteTodo}>
        <input type="hidden" name="id" value={id} />
        <button
          type="submit"
          className="px-3 py-1 ml-4 text-sm text-red-600 bg-red-100 rounded-full hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Delete
        </button>
      </form>
    </li>
  );
}

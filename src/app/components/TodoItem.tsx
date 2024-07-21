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
      <form action={toggleTodo} className="flex-grow">
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="completed" value={isActive.toString()} />
        <button type="submit" className="flex items-center w-full text-left">
          <input
            type="checkbox"
            checked={isActive}
            readOnly
            className="w-5 h-5 mr-3 text-purple-600 rounded focus:ring-purple-500 cursor-pointer"
          />
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

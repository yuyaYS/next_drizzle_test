import SubmitButton from "./SubmitButton";

export default function TodoForm() {
  return (
    <form className="flex items-center space-x-2">
      <input
        type="text"
        name="title"
        className="flex-grow px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        placeholder="Add a new task..."
      />
      <SubmitButton />
    </form>
  );
}

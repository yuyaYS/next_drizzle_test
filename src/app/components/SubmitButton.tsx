"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 text-white px-4 py-1 rounded disabled:bg-blue-300"
    >
      {pending ? "Adding..." : "Add"}
    </button>
  );
}

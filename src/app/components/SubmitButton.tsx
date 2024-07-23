"use client";
import { useFormStatus, useFormState } from "react-dom";
import { addTodo } from "../server/queries";
import { useRef } from "react";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (formData: FormData) => {
    const result = await addTodo({ success: false }, formData);
    if (result.success) {
      formRef.current?.reset();
    }
  };

  return (
    <button
      type="submit"
      formAction={handleSubmit}
      disabled={pending}
      className="px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 disabled:opacity-50"
    >
      {pending ? "Adding..." : "Add Task"}
    </button>
  );
}

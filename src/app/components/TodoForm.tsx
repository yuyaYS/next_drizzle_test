"use client";
import { useFormState } from "react-dom";
import { addTodo } from "../server/queries";
import SubmitButton from "./SubmitButton";
import { useRef } from "react";

export default function TodoForm() {
  const formRef = useRef<HTMLFormElement>(null);
  async function handleSubmit(formData: FormData) {
    await addTodo(formData);
    formRef.current?.reset();
  }
  return (
    <form action={handleSubmit} ref={formRef} className="flex space-x-2">
      <input
        type="text"
        name="title"
        className="flex-grow border rounded px-2 py-1"
        placeholder="Add a new todo"
      />
      <SubmitButton />
    </form>
  );
}

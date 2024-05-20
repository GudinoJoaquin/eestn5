import { useState } from "react";

export default function Input({ label, type, name, placeholder, value }) {
  return (
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-900 dark:text-slate-200" for="name">
        {label}
      </label>
      <input
        class="mt-1 p-2 w-full bg-gray-300 dark:bg-slate-900 rounded-md text-gray-900 dark:text-slate-200 placeholder:text-gray-700 dark:placeholder:text-slate-400 placeholder:italic"
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
      />
    </div>
  );
}


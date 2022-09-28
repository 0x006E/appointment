import React from "react";

function Input({ type = "text", name, placeholder, label, ...rest }) {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        min={type === "date" && new Date().toISOString().slice(0, 10)}
        required
        {...rest}
      />
    </div>
  );
}

export default Input;

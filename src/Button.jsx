import React from "react";

function Button({ children, type = "button", onClick, ...rest }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none inline-flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed"
      {...rest}
    >
      {children}{" "}
    </button>
  );
}

export default Button;

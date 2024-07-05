import React, { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label = "", className = "", type = "text",placeholder="", ...props },
  ref
) {
  return (
    <div>
      <label htmlFor={label || "input"} className="text-sm font-sans text-slate-700 ">{label}</label>
      <input
        className={`focus-within:border-red-600 outline-none p-2 py-2 w-full border border-gray-300 rounded-md ${className} placeholder:text-sm placeholder:font-normal`}
        type={type}
        name="input"
        id={label || "input"}
        ref={ref}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
});

export default Input;

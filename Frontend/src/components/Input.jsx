import React from "react";

function Input({ label = "", className = "", button = "", refrance="" }) {
  return (
    <div className="h-full  ">
      <label htmlFor={"input"}>{label}</label>
      
        <input
          className={`   outline-none p-2 py-2  w-full border border-gray-300  rounded-md ${className}`}
          type="text"
          name="input"
          id="input"
          ref={refrance}
        />
        
    </div>
  );
}

export default Input;

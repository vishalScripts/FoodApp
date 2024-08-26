import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin border-b-transparent flex items-center justify-center   ">
        {" "}
        <div className="w-10 h-10 border-4 border-blue-500 border-r-transparent border-solid rounded-full animate-ping border-l-transparent  "></div>{" "}
      </div>
    </div>
  );
};

export default Loader;

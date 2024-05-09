import React, { useState } from "react";

const CookingTips = ({ cookingTips }) => {
  const [expand, setExpand] = useState(true)

  return (
    <div className="bg-gray-100 p-6 rounded-lg my-4 shadow-md ">
      <div onClick={() => setExpand((prevValue)=> !prevValue)} className="cursor-pointer hover:bg-navBg hover:bg-opacity-30 rounded-sm duration-200">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <svg
            className={`h-6 w-6 text-gray-600 mr-2 ${expand? "rotate-90" : "rotate-0"} duration-100`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          Cooking Tips
        </h2>
      </div>
      <div className={`${expand? "h-80" : "h-0"} overflow-hidden duration-100`}>
        <ul>
          {cookingTips.map((tip, index) => (
            <li key={index} className="mb-2 flex items-center">
              <div className="bg-gray-600 h-1 aspect-square mx-4 rounded-2xl"></div>
              <span className="text-gray-600">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CookingTips;

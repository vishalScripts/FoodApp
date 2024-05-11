import React from 'react'

function Tags({meal, mode="light"}) {

  if (mode === "light") {
      return (
        <div className=" flex gap-2 ">
          <span
            title="Category"
            className="text-sm text-gray-950 italic hover:text-gray-900 duration-150  bg-slate-950 bg-opacity-15 flex px-3 rounded-md "
          >
            {meal?.strCategory || "Catogery"}
          </span>
          <span
            title="Area"
            className="text-sm text-gray-950 italic hover:text-gray-900 duration-150  bg-slate-950 bg-opacity-15 flex px-3 rounded-md "
          >
            {meal?.strArea || "Area"}
          </span>
        </div>
      );
  }else if (mode === "dark"){
    return (
      <div className=" flex gap-2 ">
        <span
          title="Category"
          className="text-sm text-gray-100 hover:text-white duration-150  bg-slate-200 bg-opacity-40 flex px-3 rounded-md "
        >
          {meal.strCategory}
        </span>
        <span
          title="Area"
          className="text-sm text-gray-100 hover:text-white duration-150  bg-slate-200 bg-opacity-40 flex px-3 rounded-md "
        >
          {meal.strArea}
        </span>
      </div>
    );
  }
  
}

export default Tags

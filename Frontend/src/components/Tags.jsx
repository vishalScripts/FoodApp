import React, { useEffect, useState } from "react";

function Tags({ meal = [], mode = "light", limit=3 }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (meal.strTags) {
      setTags(meal.strTags.split(","));
    }
  }, [meal]);

  
    if (mode === "light") {
      return (
        <div className="flex gap-2">
          {tags.length > 0 ? (
            tags.map((value, index) =>
              index < limit ? (
                <span
                  key={index}
                  title="Category"
                  className="text-sm  text-gray-950 italic hover:text-gray-900 duration-150 bg-slate-950 bg-opacity-15 flex px-3 rounded-md"
                >
                  {value}
                </span>
              ) : null
            )
          ) : (
            <>
              <span
                
                title="Category"
                className="text-sm text-gray-950 italic hover:text-gray-900 duration-150 bg-slate-950 bg-opacity-15 flex px-3 rounded-md"
              >
                {meal.strCategory}
              </span>
              <span
                
                title="Category"
                className="text-sm text-gray-950 italic hover:text-gray-900 duration-150 bg-slate-950 bg-opacity-15 flex px-3 rounded-md"
              >
                {meal.strArea}
              </span>
            </>
          )}
        </div>
      );
    } else if (mode === "dark") {
      return (
        <div className="flex gap-2">
          {tags.length > 0 ? (
            tags.map((value, index) =>
              index < limit ? (
                <span
                  key={index}
                  title="Category"
                  className="text-sm text-gray-100 hover:text-white duration-150 bg-slate-200 bg-opacity-40 flex px-3 rounded-md"
                >
                  {value}
                </span>
              ) : (
                ""
              )
            )
          ) : (
            <>
              <span
                
                title="Category"
                className="text-sm text-gray-100 hover:text-white duration-150 bg-slate-200 bg-opacity-40 flex px-3 rounded-md"
              >
                {meal.strArea}
              </span>
              <span
                
                title="Category"
                className="text-sm text-gray-100 hover:text-white duration-150 bg-slate-200 bg-opacity-40 flex px-3 rounded-md"
              >
                {meal.strCategory}
              </span>
            </>
          )}
        </div>
      );
    }
  

  
}

export default Tags;

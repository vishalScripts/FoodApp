import React, { useEffect, useState } from "react";

function Tags({ meal = [], mode = "light", limit = 3 }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (meal.strTags) {
      setTags(meal.strTags.split(","));
    }
  }, [meal]);

  const baseClasses = "text-sm italic flex px-3 py-1 rounded-md duration-150";
  const lightModeClasses = "text-gray-950 bg-gray-200";
  const darkModeClasses = "text-gray-100 bg-gray-600";
  const hoverEffectClasses =
    "hover:bg-blue-500 hover:text-white hover:scale-105 transform";

  const TagSpan = ({ children }) => (
    <span
      title="Category"
      className={`${baseClasses} ${
        mode === "light" ? lightModeClasses : darkModeClasses
      } ${hoverEffectClasses}`}
    >
      {children}
    </span>
  );

  return (
    <div className="flex gap-2">
      {tags.length > 0 ? (
        tags
          .slice(0, limit)
          .map((value, index) => <TagSpan key={index}>{value}</TagSpan>)
      ) : (
        <>
          <TagSpan>{meal.strCategory}</TagSpan>
          <TagSpan>{meal.strArea}</TagSpan>
        </>
      )}
    </div>
  );
}

export default Tags;

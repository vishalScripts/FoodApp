import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { setQuery } from "../store/searchQuerySlice"; 

function Tags({ meal = [], mode = "light", limit = 3 }) {
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch()

  const hnadleClick = (children)=>{
    console.log(children,"Query Children")
    dispatch(setQuery(children))
  }

  useEffect(() => {
    if (meal.strTags) {
      setTags(meal.strTags.split(","));
    }
  }, [meal]);

  const baseClasses = "text-sm italic flex px-3 py-1 rounded-md duration-150 cursor-pointer ";
  const lightModeClasses = "text-gray-950 bg-gray-200";
  const darkModeClasses = "text-gray-100 bg-gray-600";
  const hoverEffectClasses =
    "hover:bg-navBg hover:text-black hover:scale-105 transform";

  const TagSpan = ({ children }) => (
    <Link to={`/meals`}>
      <span
        onClick={() => {
          hnadleClick(children);
        }}
        title="Search"
        className={`${baseClasses} ${
          mode === "light" ? lightModeClasses : darkModeClasses
        } ${hoverEffectClasses}`}
      >
        {children}
      </span>
    </Link>
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

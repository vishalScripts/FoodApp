import React from 'react'
import img from "../../assets/FoodBg.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function FoodCard({meal ,className=""}) {


  
  return (
    <div
      className={`w-[300px] hover:border-blue-500 whitespace-nowrap min-w-[300px] border border-gray-500 scroll-snap-align-start rounded-lg overflow-hidden ${className}`}
    >
      <div>
        <img
          src={meal.strMealThumb}
          alt="mealImg"
          className="w-full min-w-full h-[200px] object-center object-cover"
        />
      </div>
      <div className="p-2 flex flex-col gap-2 justify-between">
        {meal.strMeal.length > 28 ? (
          <h1 className="text-lg font-semibold text-wrap">
            {meal.strMeal.substring(0, 25)}...
          </h1>
        ) : (
          <h1 className="text-lg font-semibold text-wrap">{meal.strMeal}</h1>
        )}

        <p className="text-sm text-gray-700 text-wrap">
          {meal.strInstructions.substring(0, 100)}...
        </p>
        <div className=" flex gap-2 ">
          <span
            title="Category"
            className="text-sm text-gray-950 italic hover:text-gray-900 duration-150  bg-slate-950 bg-opacity-15 flex px-3 rounded-md "
          >
            {meal.strCategory}
          </span>
          <span
            title="Area"
            className="text-sm text-gray-950 italic hover:text-gray-900 duration-150  bg-slate-950 bg-opacity-15 flex px-3 rounded-md "
          >
            {meal.strArea}
          </span>
        </div>
        <button className="px-4 py-2 bg-customRed hover:bg-red-500 duration-300 my-2 text-white rounded-lg">
          Read More <FontAwesomeIcon icon={faExternalLinkAlt} /> 
        </button>
      </div>
    </div>
  );
}

export default FoodCard

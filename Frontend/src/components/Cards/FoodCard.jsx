import React from "react";
import Button from "../Buttons/Button";
import Tags from "../Tags";
import { Link, useNavigate } from "react-router-dom";

function FoodCard({ meal, className = "" }) {
  return (
    <div
      className={`w-[300px] bg-white hover:border-customRed  min-w-[300px] border border-gray-500 scroll-snap-align-start rounded-lg overflow-hidden ${className}`}
    >
      <div>
        <img
          src={meal.strMealThumb}
          alt="mealImg"
          className="w-full min-w-full h-[200px] object-center object-cover "
        />
      </div>
      <div className="p-2 flex flex-col gap-2 justify-between ">
        {meal.strMeal.length > 25 ? (
          <h1 className="text-lg font-semibold text-wrap">
            {meal.strMeal.substring(0, 25)}...
          </h1>
        ) : (
          <h1 className="text-lg font-semibold text-wrap">{meal.strMeal}</h1>
        )}

        <p className="text-sm text-gray-700 text-wrap">
          {meal.strInstructions.substring(0, 100)}...
        </p>
        <Tags meal={meal || meal} mode="light" />
        <Link to={`/recipe/${meal.id}`}>
          <Button classname="w-full" meal={meal} />
        </Link>
      </div>
    </div>
  );
}

export default FoodCard;

import React from 'react'
import img from "../../assets/FoodBg.jpg";
import Tags from '../Tags';
import Button from '../Button';

function FoodTile({meal, className=""}) {

  
  return (
    <div className=" flex flex-row  w-full h-52  rounded-xl  border p-2 border-blue-300">
      {/* image */}
      <div className=" w-1/3 min-w-1/3">
        <div className="w-full h-full rounded-lg overflow-hidden border border-gray-200">
          <img
            src={meal.strMealThumb}
            alt="Food Image"
            className="  w-full min-h-32 h-full  object-cover object-center"
          />
        </div>
      </div>
      <div className=" w-4/6 min-w-4/6 flex justify-between flex-col px-4 ">
        <div className="h-[65%] flex justify-center flex-col ">
          <h2 className="font-bold text-xl">{meal.strMeal}</h2>
          <div className="w-full h-full overflow-hidden flex ">
            <p className="text-sm text-gray-700 text-wrap relative">
              {meal.strInstructions}
              
            </p>
          </div>
        </div>
        <div className=" w-full h-[30%] flex flex-row justify-between items-center ">
          <Tags meal={meal}/>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default FoodTile

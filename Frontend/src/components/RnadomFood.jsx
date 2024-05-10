import React, { useState } from "react";
import RnadomFoodCard from "./Cards/RnadomFoodCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function RandomFood() {
  

  return (
    <div>
      <p className="text-lg  text-center my-4 underline">
        Feel adventurous? Try one of these five randomly generated recipes!{" "}
        <FontAwesomeIcon icon={faHeart} className="hover:text-customRed duration-200" />
      </p>

      <div className="w-full grid grid-cols-4 grid-rows-2 mb-9 h-[22rem] gap-2">
        <RnadomFoodCard
          isVideo={true}
          classname="col-span-2 row-span-2"
        />
        <RnadomFoodCard  />
        <RnadomFoodCard  />
        <RnadomFoodCard  />
        <RnadomFoodCard  />
      </div>
    </div>
  );
}

export default RandomFood;

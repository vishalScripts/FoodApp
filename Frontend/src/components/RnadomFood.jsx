import React, { useState } from "react";
import RnadomFoodCard from "./Cards/RnadomFoodCard";

function RandomFood() {
  const [rerender, setRerender] = useState(false);

  const handleClick = () => {
    setRerender((prevState) => !prevState); // Toggle the state to trigger rerender
  };

  return (
    <div>
      <p className="text-lg  text-center my-4 underline">
        Feel adventurous? Try one of these five randomly generated recipes!
      </p>

      <div className="w-full grid grid-cols-4 grid-rows-2 mb-9 h-[22rem] gap-2">
        <RnadomFoodCard
          isVideo={true}
          classname="col-span-2 row-span-2"
          rerender={rerender}
        />
        <RnadomFoodCard rerender={rerender} />
        <RnadomFoodCard rerender={rerender} />
        <RnadomFoodCard rerender={rerender} />
        <RnadomFoodCard rerender={rerender} />
      </div>
    </div>
  );
}

export default RandomFood;

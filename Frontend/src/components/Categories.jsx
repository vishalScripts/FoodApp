import React, { useRef } from "react";
import Tags from "./Tags";

function Categories() {
  const foodCategories = [
    "Beverages",
    "Appetizers",
    "Desserts",
    "Snacks",
    "Salads",
    "Soups",
    "Bread",
    "Rice",
    "Pasta",
    "Seafood",
    "Meat",
    "Vegetarian",
    "Vegan",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Brunch",
    "Grilled",
    "Baked",
    "Fried",
    "Steamed",
    "BBQ",
    "Healthy",
    "Kids",
  ];

  const containerRef = useRef(null);

  const scrollRight = () => {
    const container = containerRef.current;
    const scrollAmount = container.clientWidth * 0.9; // Get the 90% width of the container
    container.scrollBy({ left: scrollAmount, behavior: "smooth" }); // Scroll by container width
  };

  const scrollLeft = () => {
    const container = containerRef.current;
    const scrollAmount = container.clientWidth * 0.9; // Get the 90% width of the container
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" }); // Scroll by container width
  };

  return (
    <div className="bg-gray-700 relative flex-col flex items-center justify-center w-full rounded-t-lg">
      <div className="w-full h-10  bg-gray-700 py-4 flex items-center justify-center rounded-md">
        <button
          onClick={scrollLeft}
          className="px-2 z-50 bg-gray-600 bg-opacity-25 hover:bg-gray-400 duration-300 m-2 text-white rounded-sm"
        >
          {`<`}
        </button>
        <div
          ref={containerRef}
          className="w-full overflow-x-auto scroll-smooth no-scrollbar"
        >
          <Tags
            catogries={foodCategories}
            mode="dark"
            limit={foodCategories.length + 1}
          />
        </div>
        <button
          onClick={scrollRight}
          className="px-2 z-50 bg-gray-600 bg-opacity-25 hover:bg-gray-400 duration-300 m-2 text-white rounded-sm"
        >
          {`>`}
        </button>
      </div>

      <div className=" w-full h-3 group absolute -bottom-3 bg-gray-500 rounded-b-sm left-0  flex items-center justify-center cursor-pointer">
        <span className="rotate-90 group-hover:opacity-0 text-xl text-black">{`>`}</span>
        <div className=" w-full  cursor-pointer group-hover:inline-block hidden overflow-hidden duration-200 top-1/2 absolute px-4 rounded-b-lg  bg-gradient-to-r bg-gray-500 to-bg-gray-700 z-50">
          <Tags
            catogries={foodCategories}
            mode="dark"
            limit={foodCategories.length + 1}
            className="h-auto w-full flex-wrap my-4 items-center justify-start"
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;

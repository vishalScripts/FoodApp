import React, { useEffect, useState, useRef } from "react";
import {Link} from "react-router-dom"
import Container from "../components/Container/Container";
import RnadomFood from "../components/RnadomFood";
import CookingTips from "../components/CookingTips";
import FoodCard from "../components/Cards/FoodCard.jsx";
import axios from "axios";
import Banner from "../components/Banner.jsx";

function Home() {
  const cookingTips = [
    "Add a pinch of salt to boiling water before cooking pasta to enhance its flavor.",
    "Use lemon juice or vinegar to prevent sliced fruits like apples and bananas from browning.",
    "To easily peel garlic cloves, crush them lightly with the flat side of a knife before peeling.",
    "Keep a bowl of ice water nearby when peeling hard-boiled eggs to make the shells easier to remove.",
    "To make fluffy pancakes, avoid overmixing the batter. A few lumps are okay!",
    "Sprinkle a little sugar over caramelized onions to enhance their sweetness.",
    "Store fresh herbs like parsley and cilantro in a glass of water in the refrigerator to keep them fresh longer.",
    "Use parchment paper when baking cookies to prevent them from sticking to the baking sheet.",
    "Add a dash of cinnamon to coffee grounds before brewing for a flavorful twist.",
    "To revive stale bread, sprinkle it with water and reheat it in the oven for a few minutes.",
  ];

  const [meals, setMeals] = useState([])

  useEffect(() => {
    axios
      .get(`/api/v1/public/meals?page=${Math.floor(Math.random() * 30 +1)}&limit=12`)
      .then((res) => {
        console.log("Response data:", res.data.data.data);
        setMeals(res.data.data.data);
      })
      .catch((err) => console.log("Home Page", err))
      .finally(() => console.log("meals from finally", meals));
  }, []);


  const containerRef = useRef(null);

  const scrollRight = () => {
    const container = containerRef.current;
    container.scrollLeft += 1000; // Adjust the scroll distance as needed
  };

  const scrollLeft = () => {
    const container = containerRef.current;
    container.scrollLeft -= 1000; // Adjust the scroll distance as needed
  };
  return (
    <>
      <Container>
        <div className="">
          {/* section 1 */}
          <section>
            <RnadomFood />
          </section>
        </div>
      </Container>
      <Banner />
      <Container>
        <section className="my-4 relative">
          {/* header */}
          <div className="">
            <Link to="/about">
              <span className="underline meals text-xl cursor-pointer hover:text-customRed duration-200">
                Meals-{`>`}{" "}
              </span>
            </Link>
          </div>
          <div
            className="scroll-container  flex flex-row gap-4 flex-nowrap overflow-x-auto cards scroll-smooth snap-x snap-mandatory"
            ref={containerRef}
          >
            {meals.map((meal, index) => (
              <FoodCard
                key={index}
                className="mb-11 scroll-item snap-start "
                meal={meal}
              />
            ))}
          </div>
          <div
            className="  w-full h-[50%] flex flex-row items-center justify-between absolute top-1/2  -translate-y-1/2 left-0"
          >
            <button
              onClick={scrollLeft}
              className="px-4 py-2 bg-customRed bg-opacity-25 hover:bg-red-500 duration-300 my-2 text-white rounded-lg"
            >
              {`<`}
            </button>
            <button
              onClick={scrollRight}
              className="px-4 py-2 bg-customRed bg-opacity-25 hover:bg-red-500 duration-300 my-2 text-white rounded-lg"
            >
              {`>`}
            </button>
          </div>
          {/* footer */}
          <div className="absolute bottom-4  right-2">
            <Link to="/about">
              <span className=" px-4 py-1  border border-white hover:border-gray-300 rounded-lg  underline-offset-1 underline italic  text-xl cursor-pointer bg-opacity-0 hover:bg-opacity-85 bg-slate-100 hover:text-customRed duration-300">
                See More&rarr;
              </span>
            </Link>
          </div>
        </section>
        <section>
          <CookingTips cookingTips={cookingTips} />
        </section>
      </Container>
    </>
  );
}

export default Home;

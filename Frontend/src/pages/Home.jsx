import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container/Container";
import RnadomFood from "../components/RnadomFood";
import CookingTips from "../components/CookingTips";
import FoodCard from "../components/Cards/FoodCard.jsx";
import axios from "axios";
import Banner from "../components/Banner.jsx";
import { cookingTips } from "../components/cookingTipsArr.jsx";
import Loader from "../components/Loader.jsx";

function Home() {
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `/api/v1/public/meals?page=${Math.floor(
          Math.random() * 30 + 1
        )}&limit=18`
      )
      .then((res) => {
        console.log("Response data:", res.data.data.data.length);
        if (res.data.data.data.length > 0) {
          setMeals(res.data.data.data);
        }
      })
      .catch((err) => console.log("Home Page", err))
      .finally(() => setLoading(false));
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

  console.log(meals);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <Link to={"/login"}>Login</Link> */}
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
                <Link to="/meals">
                  <span className="underline meals text-xl cursor-pointer hover:text-customRed duration-200">
                    Meals-{`>`}{" "}
                  </span>
                </Link>
              </div>
              <div
                className="scroll-container z-30  flex flex-row gap-4 flex-nowrap overflow-x-auto cards scroll-smooth snap-x snap-mandatory"
                ref={containerRef}
              >
                {meals.length > 0 ? (
                  meals.map((meal, index) => (
                    <FoodCard
                      key={index}
                      className="mb-11 scroll-item snap-start "
                      meal={meal}
                    />
                  ))
                ) : (
                  <>
                    <Loader></Loader>
                  </>
                )}
              </div>
              <div className="  w-full h-[10%] flex flex-row items-center justify-between absolute top-1/2  -translate-y-1/2 left-0">
                <button
                  onClick={scrollLeft}
                  className="px-4 z-50 py-2 bg-customRed bg-opacity-25 hover:bg-red-500 duration-300 my-2 text-white rounded-lg"
                >
                  {`<`}
                </button>
                <button
                  onClick={scrollRight}
                  className="px-4 py-2 z-0 bg-customRed bg-opacity-25 hover:bg-red-500 duration-300 my-2 text-white rounded-lg"
                >
                  {`>`}
                </button>
              </div>
              {/* footer */}
              <div className="absolute bottom-4  right-2">
                <Link to="/meals">
                  <span className=" px-4 py-1  border border-white hover:border-gray-300 rounded-lg  underline-offset-1 underline italic  text-xl cursor-pointer bg-opacity-0 hover:bg-opacity-85 bg-slate-100 hover:text-customRed duration-300">
                    Discover More Meals&rarr;
                  </span>
                </Link>
              </div>
            </section>
            <section>
              <CookingTips />
            </section>
          </Container>
        </>
      )}
    </>
  );
}

export default Home;

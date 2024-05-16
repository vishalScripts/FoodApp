import React, { useEffect, useRef, useState } from "react";
import FoodTile from "../components/Cards/FoodTile";
import Container from "../components/Container/Container";
import axios from "axios";
import PagesButton from "../components/Buttons/PagesButton";
import LayoutIcon from "../components/LayoutIcon";
import FoodCard from "../components/Cards/FoodCard.jsx";
import Input from "../components/Input.jsx";
import Button from "../components/Buttons/Button.jsx";
import sadGif from "../assets/sadFood/sadFood1.gif";
import sadGif2 from "../assets/sadFood/sadFood2.gif";
import { Link } from "react-router-dom";
import Loader from "../components/Loader.jsx";

function Meals() {
  const [meals, setMeals] = useState([]);
  const [mealData, setMealData] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [layoutGrid, setLayoutGrid] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchData = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get(
        `api/v1/public/meals?page=${page}&limit=50&query=${query}`
      );
      setMeals(response.data.data.data);
      setMealData(response.data);
      setTotalPages(response.data.data.totalPages);
      setLoading(false); // End loading
      // Scroll to the top of the page after setting the meals
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // End loading on error
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, query]);

  const inputRef = useRef(null);

  const handleSearchClick = async (e) => {
    setPage(1);
    setQuery(inputRef.current.value);
  };

  return (
    <div className="my-10">
      <Container>
        <div className="w-full h-6 my-6 flex flex-row items-center justify-between">
          <div className="">
            <LayoutIcon setLayoutGrid={setLayoutGrid} layoutGrid={layoutGrid} />
          </div>
          <div className="w-9/12 flex flex-row justify-end items-center ">
            <Input refrance={inputRef} className="h-10 w-64" button="" />
            <Button
              handleClick={handleSearchClick}
              content="Search"
              className="mx-5"
            />
          </div>
        </div>
        {loading ? ( // Show loader if loading
          <Loader />
        ) : meals.length > 0 ? (
          <div
            className={`flex ${
              layoutGrid
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : "flex-col"
            } gap-4 `}
          >
            {meals.map((meal) => (
              <div key={meal.idMeal}>
                {layoutGrid ? (
                  <FoodCard meal={meal} />
                ) : (
                  <FoodTile meal={meal} />
                )}
              </div>
            ))}
          </div>
        ) : query.length < 0 ? (
          <div className="flex flex-col items-center justify-center m-4 p-4 border border-gray-300 rounded-lg">
            <div>
              {/* <img src={sadGif} alt="Sad Gif" /> */}
              <img src={sadGif2} alt="Sad Gif" />
            </div>
            <h2 className="text-gray-600 text-lg font-semibold">
              No Meals were found
            </h2>
            <p className="text-gray-500 text-center text-sm italic">
              Ever wondered how long you could survive without food?
              Surprisingly, the human body can go longer without food than it
              can without water! While the average person might start feeling
              the effects of hunger after several hours without eating, it takes
              about three weeks for the average person to starve to death.
              However, don't get any ideas about trying out a hunger strike!
              While the body can survive without food for an extended period,
              it's certainly not a pleasant experience. Without essential
              nutrients, energy levels plummet, cognitive function declines, and
              the risk of serious health complications skyrockets. So, while
              it's fascinating to ponder our body's resilience, let's remember
              to nourish ourselves properly and enjoy the wonderful variety of
              foods available to us!
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="w-full flex justify-center items-center gap-4 ">
          {[...Array(totalPages)].map((_, index) => (
            <PagesButton key={index} setPage={setPage} index={index} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Meals;

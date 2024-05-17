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
import {useDispatch, useSelector} from "react-redux"
import { setQuery, clearQuery } from "../store/searchQuerySlice.js";


function Meals() {
  const [meals, setMeals] = useState([]);
  const [mealData, setMealData] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [layoutGrid, setLayoutGrid] = useState(false);
  // const [query, setQuery] = useState("");
  const query = useSelector((state)=> state.searchQuery)
  const dispatch = useDispatch()
  
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchData = async () => {
    setLoading(true); // Start loading
    inputRef.current.value = query.query;
    try {
      const response = await axios.get(
        `api/v1/public/meals?page=${page}&limit=50&query=${query.query}`
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

  // Always remember localStorage returns String
  useEffect(() => {
    const savedLayoutGrid = localStorage.getItem("layoutGrid") === "true";
    setLayoutGrid(savedLayoutGrid);
    fetchData();
  }, [page, query]);

  const inputRef = useRef(null);

  const handleSearchClick = async (e) => {
    setPage(1);
    dispatch(setQuery(inputRef.current.value));
  };

  // const handleGoBack = () =>{
  //     dispatch(clearQuery());
  // }

  

  return (
    <div className="my-10">
      <Container>
        <div className="w-full h-6 my-6 flex flex-row items-center justify-between">
          <div className="">
            <LayoutIcon setLayoutGrid={setLayoutGrid} layoutGrid={layoutGrid} />
          </div>
          <div className="w-9/12 flex  flex-row justify-end items-center ">
            {query.query.length > 0 ? (
              <div className="w-1/2 justify-start flex items-center  ">
                {" "}
                <Button
                  // Go Back button Refresh the meals page
                  handleClick={() => {
                    dispatch(clearQuery());
                  }}
                  content="Explore More"
                  className="mx-5 justify-self-start"
                />{" "}
              </div>
            ) : (
              <></>
            )}

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
        ) : query.query.length > 0 ? (
          <div className="flex flex-col items-center justify-center m-4 p-4 border border-gray-300 rounded-lg">
            <div>
              {/* <img src={sadGif} alt="Sad Gif" /> */}
              <img src={sadGif2} alt="Sad Gif" />
            </div>
            <h2 className="text-gray-600 text-lg font-semibold">
              No Meals were found
            </h2>
            <p className="text-gray-500  text-sm italic">
              Aw snap! Looks like our food filters are on a snoozefest vacation
              today. No worries, though! The world of yummy is a vast and
              glorious place, overflowing with surprises waiting to be gobbled
              (or spooned, or forked!).
            </p>
            <p className="text-gray-500  text-sm italic">
              Let's try a{" "}
              <span
                onClick={() => inputRef.current.focus()}
                className="cursor-pointer text-blue-600 underline font-serif font-extralight"
              >
                new search
              </span>{" "}
              adventure and see what hidden gems we can unearth. You might just
              discover your new favorite flavor fiesta!
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="w-full flex justify-center items-center gap-4 ">
          {[...Array(totalPages)].map((_, index) =>
            index > 1 ? (
              <PagesButton key={index} setPage={setPage} index={index} />
            ) : null
          )}
        </div>
      </Container>
    </div>
  );
}

export default Meals;

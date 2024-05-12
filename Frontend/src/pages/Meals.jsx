import React, { useEffect, useRef, useState } from "react";
import FoodTile from "../components/Cards/FoodTile";
import Container from "../components/Container/Container";
import axios from "axios";
import PagesButton from "../components/Buttons/PagesButton";
import LayoutIcon from "../components/LayoutIcon";
import FoodCard from "../components/Cards/FoodCard.jsx";
import Input from "../components/Input.jsx";
import Button from "../components/Buttons/Button.jsx";
import { Link } from "react-router-dom";

function Meals() {
  const [meals, setMeals] = useState([]);
  const [mealData, setMealData] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [layoutGrid, setLayoutGrid] = useState(false);
  const [query, setQuery] = useState("")

  const fetchData = async() => {
    try {
      const response = await axios.get(
        `api/v1/public/meals?page=${page}&limit=50&query=${query}`
      );
        setMeals(response.data.data.data);
        setMealData(response.data);
        setTotalPages(response.data.data.totalPages);
        // Scroll to the top of the page after setting the meals
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    
  };

  useEffect(()=>{
    fetchData()
  }, [page, query])

  const inputRef = useRef(null);

  const handleSearchClick = async (e) => {
    setPage(1);
    setQuery(inputRef.current.value)
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
        <div
          className={`flex   ${
            layoutGrid
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "flex-col"
          } gap-4 `}
        >
          {meals.map((meal) => (
            <div key={meal.idMeal}>
              {layoutGrid ? <FoodCard meal={meal} /> : <FoodTile meal={meal} />}
            </div>
          ))}
        </div>
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

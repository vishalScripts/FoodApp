import React, { useEffect, useState } from "react";
import FoodTile from "../components/Cards/FoodTile";
import Container from "../components/Container/Container";
import axios from "axios";
import PagesButton from "../components/Buttons/PagesButton";
import LayoutIcon from "../components/LayoutIcon";
import FoodCard from "../components/Cards/FoodCard.jsx";

function Meals() {
  const [meals, setMeals] = useState([]);
  const [mealData, setMealData] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [layoutGrid, setLayoutGrid] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `api/v1/public/meals?page=${page}&limit=50`
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

    fetchData();
  }, [page]);

  return (
    <div className="my-4">
      <Container>
        <div className="w-full h-6 my-2">
          <div className="">
            <LayoutIcon setLayoutGrid={setLayoutGrid} layoutGrid={layoutGrid} />
          </div>
        </div>
        <div className={`flex   ${layoutGrid ? "flex-row flex-wrap" : "flex-col"} gap-4`}>
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

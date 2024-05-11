import React, { useEffect, useState } from "react";
import FoodTile from "../components/Cards/FoodTile";
import Container from "../components/Container/Container";
import axios from "axios";
import PagesButton from "../components/Buttons/PagesButton";

function Meals() {
  const [meals, setMeals] = useState([]);
  const [mealData, setMealData] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

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
    <Container>
      <div className="flex flex-col gap-4 py-10">
        {meals.map((meal) => (
          <div key={meal.idMeal}>
            <FoodTile meal={meal} />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center gap-4 ">
        {[...Array(totalPages)].map((_, index) => (
          <PagesButton key={index} setPage={setPage} index={index} />
        ))}
      </div>
    </Container>
  );
}

export default Meals;

import React, { useEffect, useState } from "react";
import FoodTile from "../components/Cards/FoodTile";
import Container from "../components/Container/Container";
import axios from "axios";

function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get(`api/v1/public/meals?page=2&limit=50`)
      .then((res) => setMeals(res.data.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <div className="flex flex-col gap-4 py-10">
        {meals.map((meal, index) => (
          <div key={meal.idMeal}>
            {" "}
            <FoodTile meal={meal} />{" "}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Meals;

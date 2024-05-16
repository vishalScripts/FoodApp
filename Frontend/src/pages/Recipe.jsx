import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "../components/Container/Container";
import Tags from "../components/Tags";
import ReactPlayer from "react-player/lazy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faPrint } from "@fortawesome/free-solid-svg-icons";

function Recipe() {
  const { mealId } = useParams();
  const [meal, setMeal] = useState([]);
  console.log(mealId, "Meal Id from Recipe Comp");

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/v1/public/meals/${mealId}`);
      setMeal(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handlePrint = () => {
    window.print();
  };

  console.log(
    Object.keys(meal)
      .filter(
        // meal[key]: This part checks if the corresponding value of the key is truthy. If the value exists and is not falsy (like null, undefined, 0, "", etc.), it returns true.
        (key) => key.includes("strIngredient") && meal[key]
      )
      .map((key) =>
        console.log(meal[key], "-", meal[`strMeasure${key.slice(-1)}`])
      )
  );
  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col gap-6 items-center">
          <div className="">
            <div className="w-full flex items-center justify-center">
              <img
                src={meal.strMealThumb}
                alt="mealImg"
                className=" aspect-video  h-[70vh] object-center object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold">{meal.strMeal}</h1>
            <p>{meal.strInstructions}</p>
            <div>
              <Tags meal={meal} />
            </div>
            <div>
              <p className="text-gray-800">
                <span className="font-bold text-black">Category-</span>
                {meal.strCategory}
              </p>
              <p className="text-gray-800">
                <span className="font-bold text-black">Area-</span>
                {meal.strArea}
              </p>
            </div>
          </div>
          {/* TAble */}
          <div className="w-4/5 flex items-center ">
            <table className="w-full border border-collapse text-black ">
              <thead className="bg-gray-200 ">
                <tr>
                  <th className="py-2 px-4 border">Ingredient</th>
                  <th className="py-2 px-4 border">Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(meal)
                  .filter((key) => key.includes("strIngredient") && meal[key])
                  .map((key) => (
                    <tr key={key} className=" border">
                      <td className="py-2 px-4 border w-1/4 ">{meal[key]}</td>
                      <td className="py-2 px-4 border w-4/5">
                        {meal[`strMeasure${key.slice(-1)}`]}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="w-4/5 flex items-center aspect-video">
            <ReactPlayer
              width="100%"
              height="100%"
              controls={true}
              url={meal.strYoutube}
            />
          </div>
          <div className=" flex flex-row gap-4 items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handlePrint}
            >
              <FontAwesomeIcon icon={faPrint} /> Print
            </button>
            <a
              target="_blank"
              href={meal.strSource}
              className="underline text-blue-700"
            >
              {" "}
              Source <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
        </div>
      </Container>
      <style>
        {`
          @media print {
            header, footer {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Recipe;

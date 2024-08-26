import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "../components/Container/Container";
import Tags from "../components/Tags";
import ReactPlayer from "react-player/lazy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faPrint } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

function Recipe() {
  const { mealId } = useParams();
  const [meal, setMeal] = useState({});
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
  }, [mealId]);

  const handlePrint = () => {
    window.print();
  };

  // Split instructions based on "Step" or "STEP"
  //! Checkout Notes.md from line1st to line 23rd
  const instructions = meal.strInstructions
    ? meal.strInstructions.split(/(?:Step|STEP)\s?\d*[:.-]?\s*/)
    : [];
  console.log("Instructions Steps:", instructions);

  return (
    <div className="py-10">
      <Container>
        <Link to={"/meals"}>
          <span className="underline-offset-4 underline text-sm  cursor-pointer hover:text-customRed duration-200">
            {`<`}-Back
          </span>
        </Link>
        <div className="flex flex-col gap-6 items-center">
          <div className="">
            <div className="w-full flex items-center justify-center">
              <img
                src={meal.strMealThumb}
                alt="mealImg"
                className="aspect-video h-[70vh] object-center object-cover hover:scale-105 duration-700"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <ScrollAnimation animateIn="fadeIn">
              dfdjsfhdjkshfjkdhfjdhfjkdshfjkhsdjkfhsdjkhfjksdhfjkdhfjkhsdjkfhsdjkhfjksdhfjkdhsfjkhdsjkfhdsjkfhsdjkhfjkdhfjkhsdjkfhsdjkfhdsjkfh
            </ScrollAnimation>
            <h1 className="text-3xl font-semibold">{meal.strMeal}</h1>
            {instructions.length > 1 ? (
              instructions.slice(1).map((val, index) => (
                <p key={index}>
                  {" "}
                  <span className="font-semibold ">
                    {" "}
                    {`STEP ${index + 1}: `}
                  </span>
                  {`${val.trim()}`}
                </p>
              ))
            ) : (
              <p>{meal.strInstructions}</p>
            )}
            <div>
              <Tags meal={meal} />
            </div>
            <div>
              <p className="text-gray-800">
                <span className="font-bold text-black">Category- </span>
                {meal.strCategory}
              </p>
              <p className="text-gray-800">
                <span className="font-bold text-black">Area- </span>
                {meal.strArea}
              </p>
            </div>
          </div>
          {/* Table */}
          <div className="w-4/5 flex items-center">
            <table className="w-full border border-collapse text-black">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 border">Ingredient</th>
                  <th className="py-2 px-4 border">Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(meal)
                  .filter((key) => key.includes("strIngredient") && meal[key])
                  .map((key) => (
                    <tr
                      key={key}
                      className="border odd:bg-white even:bg-slate-50"
                    >
                      <td className="py-2 px-4 border w-1/4">{meal[key]}</td>
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
          <div className="flex flex-row gap-4 items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handlePrint}
            >
              <FontAwesomeIcon icon={faPrint} /> Print
            </button>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={meal.strSource}
              className="underline text-blue-700"
            >
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

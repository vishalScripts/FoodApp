import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import img from "../../assets/FoodBg.jpg";
import axios from "axios";

function RnadomFoodCard({
  content,
  classname = "",
  isVideo = false,
  rerender,
}) {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/public/meals/meal/random")
      .then((res) => setMeal(res.data.data))
      .catch((err) =>
        console.log(
          "errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
          err
        )
      );
  }, []);

  
  if (isVideo) {
    const [isHoverd, setIsHoverd] = useState(false)
    const [playing, setPlaying] = useState(false);
    

    useEffect(() => {
      setTimeout(() => {
        setPlaying(true);
      }, 5000);
      setTimeout(() => {
        setIsHoverd(true)
      }, 10000);
    }, []);
    return (
      <div
        className={`${classname} h-full rounded-2xl relative overflow-hidden bg-slate-900 `}
        onMouseEnter={() => {
          setPlaying(true)
          setIsHoverd(true)}}
        onMouseLeave={() => {
          setPlaying(false)
          setIsHoverd(false)}}
      >
        {/* Video Player */}
        <div>
          <ReactPlayer
            url={meal.strYoutube}
            playing={false}
            controls={true}
            muted={true}
            className="max-w-full max-h-full "
          />
        </div>

        {/* Content */}

        <div
          onMouseEnter={() => {setIsHoverd(false)
             setPlaying(true)}}
          onMouseLeave={() => setIsHoverd(true)}
          className={` text-white bg-opacity-95  bg-slate-700  w-full text-center absolute duration-200 
              ${isHoverd ? "-bottom-20" : "bottom-0"}
          left-1/2 -translate-x-1/2  translate-y-2 flex justify-between items-center flex-row px-4 pb-2`}
        >
          <div className="m-1 text-left">
            <h1 className="font-bold">{meal.strMeal}</h1>
            <div className=" flex gap-2 ">
              <span
                title="Category"
                className="text-sm text-gray-100 hover:text-white duration-150  bg-slate-200 bg-opacity-40 flex px-3 rounded-md "
              >
                {meal.strCategory}
              </span>
              <span
                title="Area"
                className="text-sm text-gray-100 hover:text-white duration-150  bg-slate-200 bg-opacity-40 flex px-3 rounded-md "
              >
                {meal.strArea}
              </span>
            </div>
          </div>
          {/* Button */}
          <div>
            <button className="px-4 py-2 bg-slate-100 duration-200 hover:bg-blue-100 border hover:border-blue-200  rounded-md text-slate-900">
              See Recipe
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    const [hoverd, isHoverd] = useState(false);

    return (
      <div
        className={`${classname}  h-full w-auto rounded-3xl cursor-pointer bg-black  overflow-hidden relative `}
        onMouseEnter={() => isHoverd(true)}
        onMouseLeave={() => isHoverd(false)}
      >
        {/* Image */}
        <div className="w-full h-full relative ">
          <img
            src={meal.strMealThumb}
            className=" h-full max-h-full min-h-full w-full object-cover content-center rounded-3xl"
          />
          <div
            className={`w-full h-full absolute top-0 left-0 bg-black rounded-3xl   ${
              hoverd ? "bg-opacity-60  " : "bg-opacity-0"
            } duration-200`}
          ></div>
        </div>
        {/* Content */}
        <div
          className={` text-white text-center absolute duration-200 ${
            hoverd ? "top-1/2" : "-top-10"
          } left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          <h1 className="font-bold">{meal.strMeal}</h1>
          <div className=" flex gap-2 ">
            <span
              title="Category"
              className="text-sm text-gray-100 hover:text-white duration-150  bg-slate-200 bg-opacity-30 flex px-3 rounded-md "
            >
              {meal.strCategory}
            </span>
            <span
              title="Area"
              className="text-sm text-gray-100 hover:text-white duration-150  bg-slate-200 bg-opacity-30 flex px-3 rounded-md "
            >
              {meal.strArea}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default RnadomFoodCard;

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
import Loader from "../components/Loader.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, clearQuery, setPage } from "../store/searchQuerySlice.js";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Sidebar from "../components/SideBar/Sidebar.jsx";
import Categories from "../components/Categories.jsx";
import { Link } from "react-router-dom";

function Meals() {
  const [meals, setMeals] = useState([]);
  const [mealData, setMealData] = useState({});
  const page = (useSelector((state) => state.searchQuery)).page;
  const [totalPages, setTotalPages] = useState(0);
  const [layoutGrid, setLayoutGrid] = useState(false);
  const [showBackBtn, setShowBackBtn] = useState(false);
  const query = useSelector((state) => state.searchQuery);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    inputRef.current.value = query.query;
    try {
      const response = await axios.get(
        `api/v1/public/meals?page=${page}&limit=50&query=${query.query}`
      );
      setMeals(response.data.data.data);
      setMealData(response.data);
      setTotalPages(response.data.data.totalPages);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedLayoutGrid = localStorage.getItem("layoutGrid") === "true";
    setLayoutGrid(savedLayoutGrid);
    fetchData();

    console.log("Qurry", query.query)

    if (query.query !== ""){
      setShowBackBtn(true)
    }
  }, [page, query]);

  const inputRef = useRef(null);

  const handleSearchClick = () => {
    // setPage(1);
    dispatch(setQuery(inputRef.current.value));
    // setShowBackBtn(true)
  };

  //* For pagination 
  const handleChange = (event, value) => {
    dispatch(setPage(value));
  };

  const handleBackButtonClick = ()=>{
    setShowBackBtn(false)
    dispatch(setQuery(""));
  }

  console.log("page",page)

  return (
    <div className="mt-0 ">
      <Container>
        {showBackBtn ? (
          <Link to={"/meals"}>
            {" "}
            <span
              onClick={handleBackButtonClick}
              className="underline-offset-4 underline text-sm  cursor-pointer hover:text-customRed duration-200"
            >
              {`<`}-Back
            </span>{" "}
          </Link>
        ) : (
          ""
        )}

        <div className="flex relative ">
          {/* TOP BAR */}

          <div className="w-full flex flex-col">
            <div className="w-full  h-auto mb-5 flex items-center justify-between">
              {/* Column 1 */}
              <div className="w-[3%]  flex-shrink-0">
                <LayoutIcon
                  setLayoutGrid={setLayoutGrid}
                  layoutGrid={layoutGrid}
                />
              </div>
              {/* Column 2 */}
              <div className=" w-[70%] h-[100%]  flex items-center justify-center">
                <Categories />
              </div>
              {/* Column 3 */}
              <div className="w-[25%] flex-shrink-0 flex items-center justify-end">
                <Input refrance={inputRef} className="h-10 w-64" button="" />
                <Button
                  handleClick={handleSearchClick}
                  content="Search"
                  className="mx-5"
                />
              </div>
            </div>
            {loading ? (
              <Loader />
            ) : meals.length > 0 ? (
              <div
                className={`flex ${
                  layoutGrid
                    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    : "flex-col"
                } gap-4`}
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
                  <img src={sadGif2} alt="Sad Gif" />
                </div>
                <h2 className="text-gray-600 text-lg font-semibold">
                  No Meals were found
                </h2>
                <p className="text-gray-500 text-sm italic">
                  Aw snap! It seems like a mischievous food-loving ghost has
                  swooped in and spirited away all our delicious meals! 👻🍲
                </p>
                <p className="text-gray-500 text-sm italic">
                  Legend has it that this ghost, known as "Phantom Chef," roams
                  the digital world, feasting on the finest recipes. But fear
                  not! With a little bit of magic and a dash of perseverance, we
                  can conjure up some new culinary delights.
                </p>
                <p className="text-gray-500 text-sm italic">
                  Ready to embark on a{" "}
                  <span
                    onClick={() => (
                      inputRef.current.focus(), inputRef.current.select()
                    )}
                    className="cursor-pointer text-blue-600 underline font-serif font-extralight"
                  >
                    new search
                  </span>{" "}
                  adventure? Let's dive back into the mystical cookbook and see
                  what hidden gems we can unearth. Who knows, you might just
                  discover a recipe that scares away the Phantom Chef and
                  becomes your new favorite dish! 🎃🍴
                </p>
              </div>
            ) : null}
            <div className="w-full flex items-center justify-center my-4">
              <Stack spacing={1}>
                <Pagination
                  count={totalPages}
                  page={page}
                  variant="text"
                  shape="rounded"
                  onChange={handleChange}
                />
              </Stack>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Meals;

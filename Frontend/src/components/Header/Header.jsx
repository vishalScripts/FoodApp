import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo/logo.jpg";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import QuoteComp from "../QuoteComp";
import { useSelector } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";
import loginIcon from "../../assets/loginIcon.svg";
import { burgerPfp } from "../../assets/PfpBg";

function Header() {
  const [userAvatar, setUserAvatar] = useState("");

  const userData = useSelector((state) => state.auth.user);
  const userStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    console.log(userStatus, "THis is userStatus");
    setUserAvatar(userData?.avatar.url);
  }, [userData]);

  return (
    <div className="">
      <header className="bg-white  p-2 w-full  fixed left-0 top-0 shadow-sm z-50 ">
        <Container>
          <nav className="w-full flex flex-row justify-between  items-center  ">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-8 mr-2" />
              <span className="text-lg text-customRed font-semibold">
                Food Review Blog
              </span>
            </div>

            {/* Quote */}
            {/* <div>
          <p className="text-sm text-gray-600 italic">
            "Cooking is <span className="text-customRed">love</span> made
            visible."
          </p>
        </div> */}
            <QuoteComp />

            {/* Navigation */}
            <div className="bg-navBg px-5 py-2 rounded-2xl flex-row flex items-center justify-center">
              <ul className="flex space-x-4">
                <li className="px-2">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-white inset-shadow"
                          : " hover:bg-slate-50 hover:bg-opacity-35"
                      } duration-200 px-2 rounded-md`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/meals"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-white inset-shadow"
                          : " hover:bg-orange-100 hover:bg-opacity-35"
                      } duration-200 px-2 rounded-md`
                    }
                  >
                    Meals
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-white inset-shadow"
                          : " hover:bg-orange-100 hover:bg-opacity-35"
                      } duration-200 px-2 rounded-md`
                    }
                  >
                    Services
                  </NavLink>
                </li>
              </ul>

              <div className="h-full max-h-full ml-2 flex items-center justify-center">
                <NavLink
                  to={userStatus ? "/profile" : "/login"}
                  className={({ isActive }) =>
                    `${
                      isActive ? " shadow-lg shadow-orange-400 " : "   "
                    }group  border-4 border-transparent duration-75  inline-block rounded-full w-8 h-8 relative`
                  }
                >
                  {userStatus ? (
                    <div
                      className={`group-hover:scale-110 z-50 relative  w-full h-full overflow-hidden rounded-full bg-orange-400 border-red-100 border duration-200`}
                    >
                      <img
                        alt="userAvatar"
                        src={userAvatar}
                        className="h-8 object-cover object-center "
                      />
                    </div>
                  ) : (
                    <div
                      title="login"
                      className="group-hover:scale-110  z-50 shadow-sm shadow-orange-500  w-full h-full aspect-square overflow-hidden rounded-full bg-white border-red-100 border flex items-center justify-center hover:bg-slate-100 duration-200 relative"
                    >
                      <img
                        alt="Login Logo"
                        src={loginIcon}
                        className="h-8 object-cover bg-blue-100 object-center "
                      />
                    </div>
                  )}

                  <div className="group-hover:rotate-180 duration-500 z-40 absolute w-12 h-12  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
                    <img
                      src={burgerPfp}
                      alt="burger"
                      className="w-full h-full"
                    />
                  </div>
                </NavLink>
              </div>
            </div>
          </nav>
        </Container>
      </header>
    </div>
  );
}

export default Header;

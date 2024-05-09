import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo/logo.jpg";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import QuoteComp from "../QuoteComp";

function Header() {
  return (
    <div className="">
      <header className="bg-white  p-2 w-full  fixed left-0 top-0 shadow-sm z-50 ">
        <Container>
          <nav className="w-full flex flex-row justify-between items-center  ">
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
            <div className="bg-navBg px-5 py-2 rounded-2xl">
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
                    to="/about"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-white inset-shadow"
                          : " hover:bg-slate-50 hover:bg-opacity-35"
                      } duration-200 px-2 rounded-md`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-white inset-shadow"
                          : " hover:bg-slate-50 hover:bg-opacity-35"
                      } duration-200 px-2 rounded-md`
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-white inset-shadow"
                          : " hover:bg-slate-50 hover:bg-opacity-35"
                      } duration-200 px-2 rounded-md`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </Container>
      </header>
    </div>
  );
}

export default Header;

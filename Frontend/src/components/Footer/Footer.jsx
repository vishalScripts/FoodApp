import React from "react";
import logo from "../../assets/Footer/balanced-diet2.png";
import instaLogo from "../../assets/Footer/instagram-brands.png";
import facebookLogo from "../../assets/Footer/facebook-f-brands.png";
import xLogo from "../../assets/Footer/twitter-brands.png";
import Container from "../Container/Container";
import { Link } from "react-router-dom";




function Footer() {
  return (
    <>
      <footer className="bg-footerBg ">
        <Container>
          <div className="flex flex-row justify-between p-6  ">
            {/* col-1 */}
            <div className=" flex flex-col items-center max-w-[20%] ">
              <div>
                <img src={logo} alt="logo" className="h-16 w-auto" />
              </div>

              <p className=" text-sm text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                nihil.
              </p>
              <div className="w-full my-6">
                <ul className=" flex flex-row w-full  justify-evenly flex-nowrap">
                  <li className=" p-4 h-6  rounded-full shadow-lg aspect-square bg-footerBg drop-shadow-lg flex items-center justify-center cursor-pointer">
                    <img src={instaLogo} alt="insta" className="min-w-4 " />
                  </li>
                  <li className=" p-4 h-6  rounded-full shadow-lg aspect-square bg-footerBg drop-shadow-lg flex items-center justify-center cursor-pointer">
                    <img src={facebookLogo} alt="insta" className="min-w-2 " />
                  </li>
                  <li className=" p-4 h-6  rounded-full shadow-lg aspect-square bg-footerBg drop-shadow-lg flex items-center justify-center cursor-pointer">
                    <img src={xLogo} alt="insta" className="min-w-4 " />
                  </li>
                </ul>
              </div>
            </div>
            {/* col-2 */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            {/* col-2 */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            {/* col-2 */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <div className="border-t-2 border-gray-400  mt-8 p-4 text-center">
          <p className="text-sm ">
            Copyright &copy; 2024{" "}
            <span className="text-customRed "> Food App</span>. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

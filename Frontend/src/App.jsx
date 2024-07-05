import viteLogo from "./assets/grainTexture.png"; // Adjust the path to your SVG file
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  const location = useLocation();

  // Determine if the current route is the login page
  const isLoginPage = location.pathname === "/login";

  return (
    <div
      className="relative bg-slate-100 z-30"
      style={{ backgroundImage: `url(${viteLogo})` }} 
    >
      <Header />
      <main className="mt-14 relative">
        <Outlet />
      </main>
      {/* Conditionally render the Footer */}
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;

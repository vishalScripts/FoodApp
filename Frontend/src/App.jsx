import viteLogo from "./assets/grainTexture.png"; // Adjust the path to your SVG file
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  

  return (
    <div
      className="relative bg-slate-100 z-30   "
      style={{ backgroundImage: `url(${viteLogo})` }} // Correct usage of backgroundImage
    >
      <Header />
      <main className="py-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

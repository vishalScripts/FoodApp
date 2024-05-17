import React, { useState, useEffect } from "react";

function LayoutIcon({ setLayoutGrid, layoutGrid }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const newLayoutGrid = !layoutGrid;
    localStorage.setItem("layoutGrid", newLayoutGrid);
    setLayoutGrid(newLayoutGrid);
  };

  

  return (
    <div
      title="layout"
      className="relative cursor-pointer my-2 mx-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div
        className={`grid ${
          layoutGrid ? "grid-cols-1 grid-rows-3" : "grid-cols-2 grid-rows-2"
        } gap-1 w-6 h-6 place-items-start`}
      >
        <div
          className={`w-full h-full rounded-sm ${
            isHovered ? "bg-customRed" : "bg-slate-700"
          } duration-200`}
        ></div>
        <div
          className={`w-full h-full rounded-sm ${
            isHovered ? "bg-customRed" : "bg-slate-700"
          } duration-200`}
        ></div>
        {layoutGrid ? (
          <div
            className={`w-full h-full rounded-sm ${
              isHovered ? "bg-customRed" : "bg-slate-700"
            } duration-200`}
          ></div>
        ) : (
          <>
            <div
              className={`w-full h-full rounded-sm ${
                isHovered ? "bg-customRed" : "bg-slate-700"
              } duration-200`}
            ></div>
            <div
              className={`w-full h-full rounded-sm ${
                isHovered ? "bg-customRed" : "bg-slate-700"
              } duration-200`}
            ></div>
          </>
        )}
      </div>
    </div>
  );
}

export default LayoutIcon;

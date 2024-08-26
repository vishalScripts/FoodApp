import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function Button({
  children = "",
  classname = "",
  handleClick,
  type = "",
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={` ${classname}  px-4 py-2 bg-customRed hover:bg-red-500 duration-300 my-2 text-white rounded-lg `}
    >
      {children ? (
        children
      ) : (
        <>
          Read More <FontAwesomeIcon icon={faExternalLinkAlt} />
        </>
      )}
    </button>
  );
}

export default Button;

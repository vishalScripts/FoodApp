import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function Button({children="",classname="", handleClick, type="" }) {
  return (
    <button
    type={type}
    onClick={handleClick}
      className={`px-4 ${classname}   py-2 bg-customRed hover:bg-red-500 duration-300 my-2 text-white rounded-lg `}
    >
      {children.length > 0 ? (
        children
      ) : (
        <>
          Read More <FontAwesomeIcon icon={faExternalLinkAlt} />
        </>
      )}
    </button>
  );
}

export default Button

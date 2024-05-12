import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function Button({content="",className="", handleClick }) {
  return (
    <button
    
    onClick={handleClick}
      className={`px-4 ${className} py-2 bg-customRed hover:bg-red-500 duration-300 my-2 text-white rounded-lg `}
    >
      {content.length > 0 ? (
        content
      ) : (
        <>
          Read More <FontAwesomeIcon icon={faExternalLinkAlt} />
        </>
      )}
    </button>
  );
}

export default Button

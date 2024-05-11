import React from 'react'

function PagesButton({setPage , index }) {
  const handleClick = () =>{
    setPage(index+1)
  }

    return (
      <button
        onClick={handleClick}
        className="px-4 py-2 font-bold bg-customRed hover:bg-red-500 duration-300 m-2 text-white rounded-xl"
      >
        {index + 1}
      </button>
    );  
}

export default PagesButton

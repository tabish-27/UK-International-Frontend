import React, { useState } from "react";

const CustomButton = ({ children, onClick, className = "" }) => {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <button
      onClick={onClick}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setIsTouched(false)}
      className={`relative z-10 block font-bold rounded-full shadow-lg transition duration-300 ease-in-out 
        py-2 sm:py-3 px-4 sm:px-6 lg:px-8 text-white 
        focus:outline-none focus:ring-2 focus:ring-[#F8069D] focus:ring-offset-2 
        ${isTouched ? "bg-black" : "bg-[#F8069D] hover:bg-black"} 
        ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;

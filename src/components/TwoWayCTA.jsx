import React, { useState } from "react";
import EnquiryFormPopup from "./EnquiryFormPopup";

const TwoWayCTA = ({ text, buttonText, source }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <section className="py-8 bg-black border-t border-b border-pink-100">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#F8069D] mb-6 sm:mb-0">
          {text}
        </h2>
        <button
          onClick={openPopup}
          className="bg-[#F8069D] text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-white transition-transform transform hover:scale-105"
        >
          {buttonText}
        </button>
      </div>

      {/* Enquiry Form Popup */}
      {isPopupOpen && <EnquiryFormPopup closePopup={closePopup} source={source} />}
    </section>
  );
};

export default TwoWayCTA;

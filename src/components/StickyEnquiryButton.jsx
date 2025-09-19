import React, { useState } from "react";
import EnquiryFormPopup from "./EnquiryFormPopup";

const StickyEnquiryButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <button
        onClick={openPopup}
        className="fixed right-0 top-1/2 z-50 transform -translate-y-1/2 
                   bg-white text-[#F8069D] font-bold py-1 px-2 md:py-2 md:px-4
                   border-3 border-[#F8069D] rounded-l-xl
                   hover:bg-black hover:text-white
                   transition duration-300"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        Enquiry Now
      </button>
      {isPopupOpen && <EnquiryFormPopup closePopup={closePopup} />}
    </>
  );
};

export default StickyEnquiryButton;

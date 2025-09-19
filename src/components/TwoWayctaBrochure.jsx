import React, { useState } from "react";
import EnquiryFormPopup from "./EnquiryFormPopup";

const TwoWayctaBrochure = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="w-full bg-gradient-to-r from-pink-600 to-pink-400 py-12 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        Get Your Free Course Brochure
      </h2>
      <p className="mb-6 text-lg md:text-xl">
        Download the detailed brochure and kickstart your career journey with UK INTERNATIONAL London Beauty School!
      </p>
      <button
        onClick={() => setShowPopup(true)}
        className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-pink-100 transition-all"
      >
        Download Brochure
      </button>

      {showPopup && (
        <EnquiryFormPopup
          closePopup={() => setShowPopup(false)}
          source="popup_brochure_download"
          isBrochure={true}   // 👈 sirf yaha pe true
        />
      )}
    </section>
  );
};

export default TwoWayctaBrochure;

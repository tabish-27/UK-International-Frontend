import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import EnquiryFormPopup from "./EnquiryFormPopup";

const Banner = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupSource, setPopupSource] = useState("");

  const phoneNumber = "918181819449";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const openPopup = (source) => {
    setPopupSource(source);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupSource("");
  };

  return (
    <>
      <section className="fixed bottom-0 left-0 right-0 bg-[#F8069D] py-2 px-3 sm:px-6 lg:px-8 shadow-2xl z-[9999]">
        <div className="flex flex-col sm:flex-row items-center justify-center w-full space-y-2 sm:space-y-0 sm:space-x-4">
          {/* Instant Call Button */}
          <a
            href="tel:+918181814007"
            className="bg-white text-[#F8069D] font-bold py-2 px-4 rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300 transform hover:scale-105 text-sm md:text-base flex items-center justify-center w-40 sm:w-auto"
          >
            <FaPhoneAlt className="mr-2 text-lg" />
            Instant Call
          </a>

          {/* Center Offer Text (clickable now) */}
          <button
            onClick={() => openPopup("popup_50_percent_offer")}
            className="hidden sm:flex flex-grow justify-center"
          >
            <h2 className="bg-white text-[#F8069D] font-extrabold py-2 px-6 rounded-full shadow-lg text-lg lg:text-xl text-center drop-shadow-md transform transition">
              Get up to 50% Off
            </h2>
          </button>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="bg-white text-[#25D366] font-bold py-2 px-4 rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300 transform hover:scale-105 text-sm md:text-base flex items-center justify-center w-50 sm:w-auto"
          >
            <FaWhatsapp className="mr-2 text-lg" />
            WhatsApp Now
          </a>
        </div>
      </section>

      {/* Popup render */}
      {isPopupOpen && (
        <EnquiryFormPopup closePopup={closePopup} source={popupSource} />
      )}
    </>
  );
};

export default Banner;

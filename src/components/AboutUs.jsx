import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import EnquiryFormPopup from "./EnquiryFormPopup";

const AboutUs = () => {
  const images = [
    "/assets/award_folder/534X400_AWARD_1.jpg",
    "/assets/award_folder/534X400_AWARD_2.jpg",
    "/assets/award_folder/534X400_AWARD_3.jpg",
    "/assets/award_folder/534X400_AWARD_4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Popup state
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupSource, setPopupSource] = useState("");

  const openPopup = (source) => {
    setPopupSource(source);
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupSource("");
  };

  // Preload images
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  // Slideshow interval
  useEffect(() => {
    const clear = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 4000);
    }

    return clear;
  }, [isPaused, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000);
  };

  const goToPrevious = () =>
    goToSlide((currentIndex - 1 + images.length) % images.length);
  const goToNext = () => goToSlide((currentIndex + 1) % images.length);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <section className="mt-6 sm:mt-8 py-6 sm:py-8 lg:py-6" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black mb-4 sm:mb-6 leading-tight">
          <span className="block sm:hidden">
            <span className="text-black">WELCOME TO UK INTERNATIONAL</span>
            <br />
            <span className="text-[#F8069D] relative inline-block">
              LONDON BEAUTY SCHOOL
              <span className="absolute left-0 bottom-[-3px] h-[2px] w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </span>
          </span>
          <span className="hidden sm:block">
            WELCOME TO <br />
            <span className="text-[#F8069D] relative inline-block">
              UK INTERNATIONAL LONDON BEAUTY SCHOOL
              <span className="absolute left-0 bottom-[-3px] h-[2px] w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </span>
          </span>
        </h1>

        <div
          className="bg-gradient-to-br from-[#FDDCEE] to-white rounded-2xl shadow-md border border-[#FCCDEE] p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row items-stretch transition-all duration-300"
          style={{ minHeight: isExpanded ? "auto" : "auto" }}
        >
          {/* Left: Text */}
          <div className="flex-1 flex flex-col pr-0 md:pr-8 lg:pr-12">
            <div className="flex justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-lg relative inline-block uppercase text-center">
                <span className="text-[#F8069D]">ABOUT</span>{" "}
                <span className="text-black">US</span>
                <span className="absolute left-0 bottom-[-3px] sm:bottom-[-4px] h-[2px] w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
              </h2>
            </div>

            <div className="overflow-hidden transition-all duration-500 ease-in-out">
              <div style={{ maxHeight: isExpanded ? "600px" : "100%" }}>
                <p className="text-black mb-3 sm:mb-4 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
                  <span className="text-[#F8069D]">
                    UK International London Beauty Academy{" "}
                  </span>
                  is one of the most trusted names in beauty and makeup
                  education. Over the years, we have trained thousands of
                  students in makeup, hair, beauty, nails, and advanced
                  certification courses. Our aim is not just to teach skills,
                  but to shape confident and creative professionals who are
                  ready for today’s workplace.
                  <br />
                  <br />
                  Our reputation has grown because of the success of our
                  students. With branches in{" "}
                  <span className="text-[#F8069D]">
                    Noida, Ghaziabad, Delhi, Patna, and other parts of India,
                  </span>{" "}
                  we are reaching aspiring artists everywhere.
                </p>

                {isExpanded && (
                  <>
                    <p className="text-black mb-3 sm:mb-4 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
                      The global makeup and beauty industry is valued at over
                      $600 billion and continues to expand, creating
                      opportunities for trained professionals every day. At UK
                      International, we prepare our students to meet this demand
                      with practical training in our modern classes, guided by
                      experienced faculty and industry experts.
                    </p>
                    <p className="text-black mb-3 sm:mb-4 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
                      Our training goes beyond just learning techniques. We help
                      students build creativity, confidence, and career
                      readiness. Whether you’re a beginner starting fresh or a
                      professional looking to upgrade your skills,{" "}
                      <span className="text-[#F8069D]">
                        UK International Beauty School
                      </span>{" "}
                      gives you the right platform to grow, succeed, and shine
                      in the competitive beauty world.
                    </p>
                  </>
                )}
              </div>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 sm:mt-3 text-[#F8069D] font-semibold underline focus:outline-none self-center"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>

            <div className="h-4 sm:h-6 lg:h-8"></div>

            {/* Book a Free Demo Button */}
            <div className="flex justify-center">
              <CustomButton
                onClick={() => openPopup("about_demo")}
                className="w-100"
              >
                Book a Free Demo
              </CustomButton>
            </div>
          </div>

          {/* Right: Image Slideshow */}
          <div
            className="flex-shrink-0 w-full md:w-[400px] h-[220px] md:h-[280px] flex items-center justify-center mt-4 md:mt-6 relative overflow-hidden rounded-xl shadow-md"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Image slideshow"
          >
            <div className="relative w-full h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Award ${index + 1}`}
                    className="w-full h-full object-cover transform transition-transform duration-1000 ease-in-out"
                    style={{
                      transform:
                        index === currentIndex ? "scale(1)" : "scale(1.05)",
                    }}
                  />
                  {index === currentIndex && (
                    <div
                      className="absolute bottom-0 left-0 h-[2px] bg-[#F8069D] transition-all duration-[4000ms] ease-linear"
                      style={{
                        width: isPaused ? "100%" : "0%",
                        animation: isPaused ? "none" : "progress 4000ms linear",
                      }}
                    />
                  )}
                </div>
              ))}
              <style>
                {`
                  @keyframes progress {
                    from { width: 0%; }
                    to { width: 100%; }
                  }
                `}
              </style>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-[#F8069D] focus:ring-offset-2 ${
                    index === currentIndex
                      ? "bg-[#F8069D] scale-125"
                      : "bg-gray-300/50 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form Popup */}
      {isPopupOpen && (
        <EnquiryFormPopup closePopup={closePopup} source={popupSource} />
      )}
    </section>
  );
};

export default AboutUs;
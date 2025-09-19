// src/components/Testimonial.jsx
import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-gradient-to-br from-[#FDDCEE] to-white text-black">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <header className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-6 sm:mb-8 tracking-wide relative inline-block text-center leading-snug">
  {/* Mobile: do alag lines */}
  {/* <span className="block sm:hidden">FROM CLASSROOM</span> */}
  <span className="block sm:hidden text-[#F8069D]">SPOTLIGHT</span>

  {/* Desktop: ek hi line */}
  <span className="hidden sm:inline">
    <span className="text-[#F8069D]">SPOTLIGHT</span>
  </span>

  <span className="absolute left-0 bottom-[-4px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
</h2>


        </header>

        {/* Main Testimonials Grid */}
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg border-2 border-[#FCCDEE] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="aspect-video w-full mb-3 sm:mb-4 rounded-lg overflow-hidden shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/pD_ve0I33vs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#F8069D] mb-1 sm:mb-2">
                UK International Students Rock the Ramp at Black Pearl Fashion Week
              </h2>
              <p className="text-xs sm:text-sm text-black">
                Watch our students showcase their skills at Black Pearl Fashion Week.
              </p>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg border-2 border-[#FCCDEE] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="aspect-video w-full mb-3 sm:mb-4 rounded-lg overflow-hidden shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/apC2jrXMuiw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#F8069D] mb-1 sm:mb-2">
                Discover Asia’s No. 1 Beauty Academy
              </h2>
              <p className="text-xs sm:text-sm text-black">
                Learn why UK International is Asia's top beauty academy and about our award-winning courses.
              </p>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg border-2 border-[#FCCDEE] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="aspect-video w-full mb-3 sm:mb-4 rounded-lg overflow-hidden shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/D1O0lF3WHYg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#F8069D] mb-1 sm:mb-2">
                UK International | INDIA'S NO 1 BEAUTY & MAKEUP ACADEMY
              </h2>
              <p className="text-xs sm:text-sm text-black">
                A video showcasing why we are India's number one beauty and makeup academy.
              </p>
            </div>
          </div>

          {/* Testimonial Card 4 */}
          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg border-2 border-[#FCCDEE] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="aspect-video w-full mb-3 sm:mb-4 rounded-lg overflow-hidden shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/fmu7ZZx-Auc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#F8069D] mb-1 sm:mb-2">
                Best Makeup Academy in Delhi NCR | Student Review
              </h2>
              <p className="text-xs sm:text-sm text-black">
                A certified makeup artist course student shares their experience and feedback.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Testimonial;
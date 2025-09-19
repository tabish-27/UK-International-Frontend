import React, { forwardRef } from "react";
import EnquiryForm from "../components/EnquiryForm";

const EnquiryFormSection = forwardRef(({ currentPage }, ref) => {
  return (
    <section
      ref={ref}
      id="EnquiryFormSection"
      className="w-full py-10 flex items-center justify-center bg-gradient-to-br from-[#FDDCEE] to-white"
    >
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 gap-4">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/assets/gold_img.png"
            alt="Celebrity"
            className="rounded-2xl shadow-lg 
                       w-full max-w-[400px] 
                       h-auto sm:h-[300px] lg:h-[340px] 
                       object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full sm:w-[340px] lg:w-[380px]">
            {/* Pass currentPage dynamically */}
            <EnquiryForm source={currentPage} />
          </div>
        </div>
      </div>
    </section>
  );
});

export default EnquiryFormSection;

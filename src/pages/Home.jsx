import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import OurCourses from "../components/OurCourses";
import Testimonial from "../components/Testimonial";
import Banner from "../components/Banner";
import WhyChooseUs from "../components/WhyChooseUs";
import TwoWayctaBrochure from "../components/TwoWayctaBrochure";

const Home = () => {
  const location = useLocation();
  const enquiryRef = useRef(null); // Ref for enquiry section

  useEffect(() => {
    if (location.hash === "#our-courses") {
      const el = document.getElementById("our-courses");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (location.hash === "#EnquiryFormSection") {
      const el = document.getElementById("EnquiryFormSection");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-black">
      <Banner />
      <Hero enquiryRef={enquiryRef} />
      <AboutUs enquiryRef={enquiryRef} />
      <OurCourses />
      <TwoWayctaBrochure/>
      <WhyChooseUs enquiryRef={enquiryRef} />
      <Testimonial />
    </div>
  );
};

export default Home;
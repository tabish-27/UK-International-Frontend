import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CustomButton from "./CustomButton"; // adjust path if needed

// Import images
import MAKEUP from "/assets/main_img_cources_folder/462X346_MAKEUP.jpg";
import BEAUTY from "/assets/main_img_cources_folder/462X346_BEAUTY.jpg";
import HAIR from "/assets/main_img_cources_folder/462X346_HAIR.jpg";
import COSMETOLOGY from "/assets/main_img_cources_folder/462X346_COSMO.jpg";
import BVOC from "/assets/main_img_cources_folder/462X346_BVOC.jpg";

const courses = [
  {
    title: "Beauty Mastery Course",
    subtitle: "International",
    description:
      "Flawless beauty comes from knowledge and skill. At UK International London Beauty School, our 3 month beauty program covers Skincare, Facials, Makeup Basics, Facial Treatments and Hygiene. Our expert trainers help students to build careers in beauty, wellness, and skincare across India.",
    modules: [
      "Professional Hygiene Practices",
      "Fundamentals of Skin Science",
      "Bleaching Techniques",
      "Hand & Foot Care",
    ],
    img: BEAUTY,
    path: "beauty",
    reverse: false,
  },
  {
    title: "Makeup Mastery Course",
    subtitle: "International",
    description:
      "Great makeup builds confidence and opens career doors. At UK International London Beauty School, our 3-month makeup course covers Basics, Bridal, Fashions, and SFX. Expert trainers guide with real industry knowledge. Students gain hands-on skills for salons, bridal work, fashion shoots, and media careers across India and abroad.",
    modules: [
      "Fundamentals of Makeup",
      "Bridal Makeup Artistry",
      "Essential Tools & Product Knowledge",
      "Natural & Everyday Makeup Techniques",
    ],
    img: MAKEUP,
    path: "makeup",
    reverse: true,
  },
  {
    title: "Hair Mastery Course",
    subtitle: "International",
    description:
      "Great hairstyles create confidence and style. At UK International Beauty School, our 3-month international hairstyling course covers Cutting, Styling, Coloring, Barbering, and Advanced Techniques. Expert trainers guide you with real salon knowledge, helping you master trends. Students join to gain practical cutting skills and build creative hairstyling careers.",
    modules: [
      "Fundamentals of Hairdressing",
      "Advanced Haircutting Techniques",
      "Hair Coloring & Highlighting",
      "Professional Barbering",
    ],
    img: HAIR,
    path: "hair",
    reverse: false,
  },
  {
    title: "Cosmetology Course",
    subtitle: "International",
    description:
      "Beauty is not just about looks, it is about complete care and wellness. At UK International London Beauty School, our one-year cosmetology diploma covers Makeup, Hair, Skin, Nails, and Salon management. With expert trainers and hands-on learning, students gain both creative skills and client care experience.",
    modules: [
      "Advanced Skincare Treatments & Facials",
      "Professional Makeup Application Techniques",
      "Waxing & Hair Removal Procedures",
      "Health, Hygiene & Safety Practices",
    ],
    img: COSMETOLOGY,
    path: "cosmetology",
    reverse: true,
  },
  {
    title: "B.Voc Degree",
    subtitle: "International",
    description:
      "A career in beauty is a professional journey. The UKIBS B.Voc Degree program offers 3 years of training in Makeup, Hair, Skin and Wellness with International Certification. Students master 35+ skills, gain industry exposure, and graduate ready for professional opportunities in the fast-growing beauty industry.",
    modules: [
      "Comprehensive Beauty & Wellness Training",
      "Advanced Makeup and Hair Techniques",
      "Internationally Aligned Curriculum",
      "Industry-Oriented Practical Experience",
    ],
    img: BVOC,
    path: "bvoc",
    reverse: false,
  },
];

const OurCourses = () => {
  const navigate = useNavigate();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  const imageRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <section id="our-courses" className="text-center py-8 bg-gradient-to-br from-[#FDDCEE] to-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-2 sm:mb-2 md:mb-10 relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg uppercase inline-block relative z-10 text-center leading-snug">
            <span className="block sm:inline text-black">KICKSTART YOUR</span>{" "}
            <span className="block sm:inline text-black">CAREER WITH</span>{" "}
            <span className="block sm:inline text-[#F8069D]">OUR COURSES</span>
          </h2>
          <span className="absolute left-0 bottom-0 h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
        </div>

        {/* Render all courses dynamically */}
{courses.map((course, idx) => (
  <motion.div
    key={idx}
    className={`flex flex-col md:flex-row ${course.reverse ? "md:flex-row-reverse" : ""} items-stretch mb-16 bg-gradient-to-br from-[#FDDCEE] to-white rounded-xl shadow-lg overflow-hidden`}
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {/* Left Text Section */}
    <div className="md:w-1/2 flex-1 p-8 text-center flex flex-col justify-center">
      <h3 className="text-3xl sm:text-4xl font-bold text-[#F8069D] mb-6 relative inline-block">
        <span className="block">{course.subtitle}</span>
        <span className="block relative">
          {course.title}
          <span className="absolute inset-x-0 bottom-[-4px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
        </span>
      </h3>

      <p className="text-lg sm:text-xl text-black mb-4 text-justify">{course.description}</p>

      <div className="text-left">
        <h4 className="text-xl sm:text-2xl font-semibold text-[#F8069D] mb-2">Key Modules</h4>
        <div className="space-y-2 text-lg ml-6">
          {course.modules.map((module, i) => (
            <div key={i} className="flex items-center space-x-2">
              <span className="text-[#F8069D]">→</span>
              <span>{module}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <CustomButton onClick={() => navigate(`/${course.path}`)} className="px-6 py-2">
          Click To Know More
        </CustomButton>
      </div>
    </div>

    {/* Right Image Section */}
    <div className="md:w-1/2 flex-1">
      <motion.img
        src={course.img}
        alt={course.title}
        className="w-full h-full object-cover"
        variants={course.reverse ? imageLeftVariants : imageRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      />
    </div>
  </motion.div>
))}

      </div>
    </section>
  );
};

export default OurCourses;

import React, { useState } from "react";
import EnquiryForm from "../components/EnquiryForm";
import EnquiryFormPopup from "../components/EnquiryFormPopup";
import CustomButton from "../components/CustomButton";
import { motion } from "framer-motion";

// Import all required images
import MAIN_IMAGE from "/assets/main_img_cources_folder/462X346_COSMO.jpg";
import COSMETOLOGY_T1 from "/assets/cosmetology_folder/219X273_COSMETOLOGY_T1.jpg";
import COSMETOLOGY_T2 from "/assets/cosmetology_folder/219X273_COSMETOLOGY_T2.jpg";
import COSMETOLOGY_T3 from "/assets/cosmetology_folder/219X273_COSMETOLOGY_T3.jpg";
import COSMETOLOGY_T4 from "/assets/cosmetology_folder/219X273_COSMETOLOGY_T4.jpg";
import COSMETOLOGY_T5 from "/assets/cosmetology_folder/219X273_COSMETOLOGY_T5.jpg";
import COSMETOLOGY_T6 from "/assets/cosmetology_folder/219X273_COSMETOLOGY_T6.jpg";
import COSMETOLOGY_T7 from "/assets/cosmetology_folder/219X273_COSMETOLOGY_T7.jpg";
import COSMETOLOGY_T8 from "/assets/cosmetology_folder/219X273_COSMETOLOGY_T8.jpg";

const galleryImages = [
  COSMETOLOGY_T1,
  COSMETOLOGY_T2,
  COSMETOLOGY_T3,
  COSMETOLOGY_T4,
  COSMETOLOGY_T5,
  COSMETOLOGY_T6,
  COSMETOLOGY_T7,
  COSMETOLOGY_T8,
];

const CosmetologyPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupSource, setPopupSource] = useState("unknown");

  const openPopup = (source) => {
    setPopupSource(source);
    setIsPopupOpen(true);
  };
  const closePopup = () => setIsPopupOpen(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.4, ease: "easeInOut" },
    }),
  };

  const getRandomColor = () => {
    const colors = [
      "#FEE2E2",
      "#FFEDD5",
      "#ECFDF5",
      "#F0F9FF",
      "#F3E8FF",
      "#FEF2F2",
      "#E0F2FE",
      "#D1FAE5",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const courseLevels = [
    {
      title: "Basic Cosmetology Course",
      points: [
        "Skin care & facials",
        "Hair care & styling basics",
        "Nail art & care",
        "Waxing & threading",
        "Grooming & hygiene",
        "Massage basics",
        "Skin & hair types",
        "Client communication",
      ],
      desc: "Learn the foundation of beauty and wellness:",
    },
    {
      title: "Advanced Cosmetology Course",
      points: [
        "Advanced facials & treatments",
        "Spa & body therapies",
        "Hair coloring & chemical services",
        "Nail extensions & art",
        "Bridal & party makeup",
        "Anti-aging solutions",
        "Hair spa & scalp care",
        "Salon management",
      ],
      desc: "Master professional-level cosmetology skills:",
    },
    {
      title: "Beginner to Professional Cosmetology Course",
      points: [
        "Basic + advanced cosmetology",
        "Advanced makeup & hairstyling",
        "Hair treatments & chemical services",
        "Nail art, extensions & spa",
        "Portfolio development",
        "Client handling skills",
        "Career guidance & certification",
        "Internship & practical exposure",
      ],
      desc: "A complete program for students who want to become certified professionals:",
    },
  ];

  const whyChoosePoints = [
    {
      title: "Hands-on Training",
      desc: "At UK International we provide practice directly on models and real clients to our students.",
    },
    {
      title: "International Curriculum",
      desc: "Students get a chance to learn the latest beauty and wellness techniques followed globally.",
    },
    {
      title: "100% Placement Support",
      desc: "We provide career guidance and job opportunities with leading salons & beauty brands.",
    },
    {
      title: "Celebrity Workshops",
      desc: "You can get a chance to learn directly from top beauty professionals who have numbers of experience in their fields.",
    },
    {
      title: "Flexible Batches",
      desc: "You can join batches as per your choice because we offer flexible batches options to our students.",
    },
    {
      title: "Portfolio Development",
      desc: "You can also build your professional portfolio during the course.",
    },
    {
      title: "Internship Opportunities",
      desc: "We provide work in real salons and spa environments.",
    },
    {
      title: "Confidence Building",
      desc: "Along with the courses we also provide training in personality development and client handling.",
    },
  ];

  const whoCanJoinPoints = [
    {
      title: "Aspiring Beauticians and Cosmetologists",
      desc: "Seeking professional training.",
    },
    {
      title: "Salon Professionals",
      desc: "Upgrading their skills.",
    },
    {
      title: "Housewives and Freelancers",
      desc: "Exploring beauty careers.",
    },
    {
      title: "Anyone Passionate About Beauty",
      desc: "Passionate about skincare, haircare, and wellness.",
    },
  ];

  const careerOpportunities = [
    {
      title: "Professional Cosmetologist",
      desc: "",
    },
    {
      title: "Beauty Consultant",
      desc: "",
    },
    {
      title: "Makeup & Skin Specialist",
      desc: "",
    },
    {
      title: "Nail Technician",
      desc: "",
    },
    {
      title: "Salon Owner or Freelancer",
      desc: "",
    },
    {
      title: "International Beauty Career",
      desc: "",
    },
    {
      title: "Trainer & Educator",
      desc: "",
    },
  ];

  return (
    <div className="antialiased font-inter text-gray-900 overflow-x-hidden bg-white ">
      {/* Hero Section with EnquiryForm */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-r from-[#FDDCEE] to-white pt-20">
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 gap-8 text-black">
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl mt-1 mb-10 lg:text-5xl font-extrabold text-black tracking-wi relative inline-block">
              Become a{" "}
              <span className="text-[#F8069D]">Certified Cosmetologist</span> with
              UK International London Beauty School
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-4">
              Build a standout position in this competitive world by choosing the right career path. If you are looking for beauty school to improve your cosmetologist career you are the right place. The{" "}
              <span className="text-[#F8069D] font-semibold">
                UK International London Beauty School
              </span>
              is one of the leading beauty academies in India, offering professional cosmetology courses that cover everything from skincare and haircare to nail art, makeup, and advanced beauty treatments.
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-6">
              Get the opportunity to learn from experienced trainers, gain international certification, and build a rewarding career as a professional cosmetologist. With hands-on training, flexible batches, and career support, we provide comprehensive guidance where you turn your passion for beauty into a successful profession.
            </p>
            <button
              onClick={() => openPopup("hero_button")}
              className="animated-border relative group p-[2px] hover:scale-105 active:scale-105"
            >
              <CustomButton>Enroll Now – Limited Seats Available</CustomButton>
            </button>
          </div>
          <div className="flex-1 max-w-lg mt-8 lg:mt-4 mb-8 w-40%">
            <EnquiryForm source="cosmetology_page" />
          </div>
        </div>
      </section>

      {/* About the Cosmetology Course */}
      <section
        id="about"
        className="py-14 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-6 tracking-wide relative inline-block">
              About the <span className="text-[#F8069D]">Cosmetology Course</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 max-w-md">
              <img
                src={MAIN_IMAGE}
                alt="Cosmetology Course"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 relative p-4 rounded-3xl">
              <div className="relative z-10 flex flex-col items-center text-center space-y-3 lg:text-left lg:items-start">
                <div className="space-y-3 text-base sm:text-lg leading-relaxed text-gray-800">
                  <p>
                    Our cosmetology course is especially created to give you a comprehensive knowledge of the beauty industry. From basic skin and hair care to advanced spa treatments, nail extensions, and makeup artistry, this course helps to build you to work in top salons, spas, wellness centers, and even start your own business.
                  </p>
                  <p>
                    The program is the perfect combination of theory, practical training, and live workshops, ensuring you gain the confidence to work with real clients. Whether you are looking for a cosmetology course near you or planning to upgrade your beauty skills, this course is your gateway to a professional career.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => openPopup("about_button")}
              className="animated-border relative group p-[2px] hover:scale-105 active:scale-105"
            >
              <CustomButton>Learn More</CustomButton>
            </button>
          </div>
        </div>
      </section>

      {/* Cosmetology Course Levels */}
      <section className="py-10 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {/* Large screens */}
            <h2 className="hidden sm:block text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center">
              <span className="text-[#F8069D]">Cosmetology Course</span> Highlights (What You Will Learn)
            </h2>

            {/* Mobile screens */}
            <h2 className="block sm:hidden text-3xl font-bold text-black text-center">
              <span className="text-[#F8069D]">
                <br />
                Cosmetology Course
              </span>{" "}
              <br /> Highlights (What You Will Learn)
            </h2>
          </div>
          <p className="text-center text-base sm:text-lg text-gray-800 mb-8">
            Our cosmetology courses cover everything from foundational to advanced skills across all beauty disciplines:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseLevels.map((level, idx) => (
              <motion.div
                key={idx}
                className="relative p-4 rounded-3xl shadow-xl flex flex-col justify-between overflow-hidden bg-white/70 backdrop-blur-md border border-white/50 hover:shadow-2xl transition-shadow duration-300"
                style={{
                  background: `linear-gradient(135deg, ${getRandomColor()}, #ffffff)`,
                }}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  <h3 className="text-xl font-bold text-black">
                    {level.title}
                  </h3>
                  <p className="text-gray-800 text-base leading-relaxed">
                    {level.desc}
                  </p>
                  <ul className="text-gray-800 text-base leading-relaxed list-disc list-inside text-left">
                    {level.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/30 transform translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-white/50 transform translate-x-1/2 -translate-y-1/2"></div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => openPopup("course_levels_button")}
              className="animated-border relative group p-[2px] hover:scale-105 active:scale-105"
            >
              <CustomButton>Explore Courses</CustomButton>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose UK International */}
      <section className="py-14 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-6 tracking-wide relative inline-block">
              Why Choose{" "}
              <span className="text-[#F8069D]">UK International</span> for{" "}
              <br /> Cosmetology Training?
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <p className="text-center text-base sm:text-lg text-gray-800 mb-8">
            Here are the number of reasons why UK International London Beauty School is the best choice for Cosmetology courses in India:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((point, idx) => (
              <motion.div
                key={idx}
                className="relative p-4 rounded-3xl shadow-xl flex flex-col justify-between overflow-hidden bg-white/70 backdrop-blur-md border border-white/50 hover:shadow-2xl transition-shadow duration-300"
                style={{
                  background: `linear-gradient(135deg, ${getRandomColor()}, #ffffff)`,
                }}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  <h3 className="text-xl font-bold text-black">
                    {point.title}
                  </h3>
                  <p className="text-gray-800 text-base leading-relaxed">
                    {point.desc}
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/30 transform translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-white/50 transform translate-x-1/2 -translate-y-1/2"></div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => openPopup("why_choose_button")}
              className="animated-border relative group p-[2px] hover:scale-105 active:scale-105"
            >
              <CustomButton>Discover More</CustomButton>
            </button>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-14 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-6 tracking-wide relative inline-block">
              Who Can Join the{" "}
              <span className="text-[#F8069D]">Cosmetology Course?</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <div className="text-center text-base sm:text-lg text-gray-800 mb-8">
            This course is perfect for:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whoCanJoinPoints.map((point, idx) => (
              <motion.div
                key={idx}
                className="relative p-4 rounded-3xl shadow-xl flex flex-col justify-between overflow-hidden bg-white/70 backdrop-blur-md border border-white/50 hover:shadow-2xl transition-shadow duration-300"
                style={{
                  background: `linear-gradient(135deg, ${getRandomColor()}, #ffffff)`,
                }}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  <h3 className="text-xl font-bold text-black">
                    {point.title}
                  </h3>
                  <p className="text-gray-800 text-base leading-relaxed">
                    {point.desc}
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/30 transform translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-white/50 transform translate-x-1/2 -translate-y-1/2"></div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => openPopup("who_can_join_button")}
              className="animated-border relative group p-[2px] hover:scale-105 active:scale-105"
            >
              <CustomButton>Join Now</CustomButton>
            </button>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-14 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-6 tracking-wide relative inline-block">
              Career Opportunities After Completing the <br />
              <span className="text-[#F8069D]">Cosmetology Course</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <div className="text-center text-base sm:text-lg text-gray-800 mb-8">
            A cosmetology certification from UK International London Beauty School opens multiple career options:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerOpportunities.map((point, idx) => (
              <motion.div
                key={idx}
                className="relative p-4 rounded-3xl shadow-xl flex flex-col justify-between overflow-hidden bg-white/70 backdrop-blur-md border border-white/50 hover:shadow-2xl transition-shadow duration-300"
                style={{
                  background: `linear-gradient(135deg, ${getRandomColor()}, #ffffff)`,
                }}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  <h3 className="text-xl font-bold text-black">
                    {point.title}
                  </h3>
                  <p className="text-gray-800 text-base leading-relaxed">
                    {point.desc}
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/30 transform translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-white/50 transform translate-x-1/2 -translate-y-1/2"></div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => openPopup("career_opportunities_button")}
              className="animated-border relative group p-[2px] hover:scale-105 active:scale-105"
            >
              <CustomButton>Start Your Career</CustomButton>
            </button>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-14 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-6 tracking-wide relative inline-block">
              Your Career in{" "}
              <span className="text-[#F8069D]">Cosmetology Starts Here!</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <div className="text-center space-y-3 text-base sm:text-lg text-gray-800 max-w-4xl mx-auto">
            <p>
              Join{" "}
              <span className="text-[#F8069D] font-semibold">
                UK International London Beauty School
              </span>{" "}
              today and build your professional career with us! We are one of the leading cosmetology academies in India. Take your first step towards a successful beauty career with us. Whether you are looking for a cosmetology course nearby you or planning to get advanced cosmetology, we offer everything you need – from training to certification and placements.
            </p>
            <p>
              Turn your passion for beauty and wellness into a professional career. Apply now and begin your journey in cosmetology.
            </p>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => openPopup("final_cta_button")}
              className="animated-border relative group p-[2px] hover:scale-105 active:scale-105"
            >
              <CustomButton>Apply Now</CustomButton>
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-14 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-6 tracking-wide relative inline-block">
              Our <span className="text-[#F8069D]">Gallery</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
            <p className="text-center text-base sm:text-lg text-gray-800 mb-8">
              Take a look at the highlights from our cosmetology courses, workshops, and events.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((src, idx) => (
              <motion.div
                key={idx}
                className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1 }}
              >
                <img
                  src={src}
                  alt={`Gallery Image ${idx + 1}`}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form Popup */}
      {isPopupOpen && (
        <EnquiryFormPopup closePopup={closePopup} source={popupSource} />
      )}
    </div>
  );
};

export default CosmetologyPage;
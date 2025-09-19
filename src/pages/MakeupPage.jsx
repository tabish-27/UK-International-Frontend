import React, { useState } from "react";
import EnquiryForm from "../components/EnquiryForm";
import EnquiryFormPopup from "../components/EnquiryFormPopup";
import CustomButton from "../components/CustomButton";
import { motion } from "framer-motion";

// Import all required images
import MAIN_IMAGE from "/assets/main_img_cources_folder/462X346_MAKEUP.jpg";
import MAKEUP_T1 from "/assets/makeup_folder/219X273_MAKEUP_T1.jpg";
import MAKEUP_T2 from "/assets/makeup_folder/219X273_MAKEUP_T2.jpg";
import MAKEUP_T3 from "/assets/makeup_folder/219X273_MAKEUP_T3.jpg";
import MAKEUP_T4 from "/assets/makeup_folder/219X273_MAKEUP_T4.jpg";
import MAKEUP_T5 from "/assets/makeup_folder/219X273_MAKEUP_T5.jpg";
import MAKEUP_T6 from "/assets/makeup_folder/219X273_MAKEUP_T6.jpg";
import MAKEUP_T7 from "/assets/makeup_folder/219X273_MAKEUP_T7.jpg";
import MAKEUP_T8 from "/assets/makeup_folder/219X273_MAKEUP_T8.jpg";

const galleryImages = [
  MAKEUP_T1,
  MAKEUP_T2,
  MAKEUP_T3,
  MAKEUP_T4,
  MAKEUP_T5,
  MAKEUP_T6,
  MAKEUP_T7,
  MAKEUP_T8,
];

const MakeupPage = () => {
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
      title: "Basic Makeup Course",
      points: [
        "Understand skin types & tones",
        "Skincare before makeup",
        "Basics: foundation, concealer, blush, powder",
        "Face, eyes, lips application",
        "Basic contouring & highlighting",
        "Everyday & party looks",
        "Eye & lip techniques",
        "Hygiene & tool handling",
        "Client consultation basics",
      ],
      desc: "Ideal for beginners starting their makeup journey:",
    },
    {
      title: "Advanced Makeup Course",
      points: [
        "Bridal & party makeup",
        "HD & Airbrush makeup",
        "Creative/editorial looks",
        "Red carpet & runway makeup",
        "Evening & glam looks",
        "Makeup for all skin tones",
        "Advanced contouring & color correction",
        "Portfolio building",
        "Client handling skills",
      ],
      desc: "For aspiring professional makeup artists:",
    },
    {
      title: "Basic to Bridal Makeup Course",
      points: [
        "Complete bridal makeup training",
        "Basics & casual looks",
        "Bridal foundation & contouring",
        "Indian & international bridal styles",
        "Pre-bridal & reception makeup",
        "Long-lasting techniques",
        "Eye & lip artistry",
        "Basic hair styling for brides",
        "Groom & family makeup",
        "Client consultation & bookings",
      ],
      desc: "This course offers a complete bridal makeup training program:",
    },
    {
      title: "Basic to International Makeup Course",
      points: [
        "Beginner to advanced techniques",
        "Fashion, editorial & avant-garde makeup",
        "HD & Airbrush for media & photoshoots",
        "Global bridal trends",
        "Runway & event makeup",
        "International client handling",
        "Portfolio & career guidance",
        "Internship & masterclasses",
        "International certification",
      ],
      desc: "A full program designed to take you from a beginner to a global makeup expert:",
    },
  ];

  const whyChoosePoints = [
    {
      title: "Hands-on Training",
      desc: "We provide models to our students for live practice and real events to build their confidence.",
    },
    {
      title: "International Curriculum",
      desc: "At UK International our expert faculty make learn basic to standard techniques to students that match global beauty standards.",
    },
    {
      title: "Worldwide Certification",
      desc: "This school has global recognition which offers an international certificate to work in India and abroad.",
    },
    {
      title: "100% Placement Support",
      desc: "We offer career guidance and job support with top brands and salons.",
    },
    {
      title: "Portfolio Building",
      desc: "We help our students by creating 5 professional portfolios with models and photographers.",
    },
    {
      title: "Digital Marketing Skills",
      desc: "We know the meaning of marketing and guide our students, how to grow on social media and attract clients.",
    },
    {
      title: "Celebrity Masterclasses",
      desc: "Train with top makeup artists and learn industry secrets.",
    },
    {
      title: "Flexible Batches",
      desc: "We offer flexible batches where the students can choose weekday or weekend classes as per their schedule.",
    },
    {
      title: "Free Internship",
      desc: "At UK International you can gain real-world experience through live projects and shows.",
    },
    {
      title: "Personality Development",
      desc: "We not only focus on makeup courses but Improve confidence, communication, and client handling skills.",
    },
    {
      title: "EMI Option Available",
      desc: "We provide EMI and installment options which can be helpful for students.",
    },
  ];

  const whoCanJoinPoints = [
    {
      title: "Aspiring Makeup Artists",
      desc: "Wanting professional training.",
    },
    {
      title: "Salon professionals & beauticians",
      desc: "Upgrading their skills.",
    },
    {
      title: "Housewives & Freelancers",
      desc: "Exploring new opportunities.",
    },
    {
      title: "Career changers",
      desc: "Who want to enter the beauty industry.",
    },
  ];

  const careerOpportunities = [
    {
      title: "Professional Makeup Artist for Bridal & Events",
      desc: "",
    },
    {
      title: "Celebrity & Fashion Show Makeup Specialist",
      desc: "",
    },
    {
      title: "Editorial & Media Makeup Expert",
      desc: "",
    },
    {
      title: "Freelance Makeup Artist",
      desc: "",
    },
    {
      title: "Beauty Blogger / Influencer",
      desc: "",
    },
    {
      title: "Makeup Trainer / Educator",
      desc: "",
    },
    {
      title: "Special Effects & Theatrical Makeup Artist",
      desc: "",
    },
    {
      title: "Corporate & Event Styling Consultant",
      desc: "",
    },
    {
      title: "Freelance Fashion Stylist & Makeup Collaborator",
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
              <span className="text-[#F8069D]">Globally Recognized Makeup Artist</span> with
              UK International London Beauty School
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-4">
              Learn professional makeup from professional trainers, gain international certification, and build a career that takes you beyond borders.
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-6">
              Are you dreaming to be a professional makeup artist, working with big celebs and fashion tycoons or even planning to start your beauty brand? So, at{" "}
              <span className="text-[#F8069D] font-semibold">
                UK International London Beauty School
              </span>
              , your dream can become reality. Our internationally recognized makeup courses are specially designed to transform a beginner into industry ready professional with hand-on training, expert guidance and a globally valid diploma.
            </p>
            <button
              onClick={() => openPopup("hero_button")}
              className="animated-border relative group p-[2px] hover:scale-105 active:scale-105"
            >
              <CustomButton>Enroll Now – Limited Seats Available</CustomButton>
            </button>
          </div>
          <div className="flex-1 max-w-lg mt-8 lg:mt-4 mb-8 w-40%">
            <EnquiryForm source="makeup_page" />
          </div>
        </div>
      </section>

      {/* About the Makeup Course */}
      <section
        id="about"
        className="py-14 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-6 tracking-wide relative inline-block">
              About the <span className="text-[#F8069D]">Makeup Course</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 max-w-md">
              <img
                src={MAIN_IMAGE}
                alt="Makeup Course"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 relative p-4 rounded-3xl">
              <div className="relative z-10 flex flex-col items-center text-center space-y-3 lg:text-left lg:items-start">
                <div className="space-y-3 text-base sm:text-lg leading-relaxed text-gray-800">
                  <p>
                    At UK International London Beauty School, we specially designed our Makeup Artist Courses for beginners as well professionals who wanted to be professional and master in the art of makeup. With the perfect managing balance of practical training, Live workshops and theory classes where students learn every aspect of makeup artistry from basic techniques to advanced fashion fusion.
                  </p>
                  <p>
                    Our curriculum is recognized internationally and trained by industrial experts with 15+ years of experience. Whether you want to open your brand or dream to work in the fashion industry, film, bridal makeup or as a freelance artist this course scales up your skills, confidence and exposure in the real life stage.
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

      {/* Makeup Course Levels */}
      <section className="py-10 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {/* Large screens */}
            <h2 className="hidden sm:block text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center">
              Levels of Our{" "}
              <span className="text-[#F8069D]">Makeup Course</span> (What You
              Will Learn)
            </h2>

            {/* Mobile screens */}
            <h2 className="block sm:hidden text-3xl font-bold text-black text-center">
              Levels of Our{" "}
              <span className="text-[#F8069D]">
                <br />
                Makeup Course
              </span>{" "}
              <br /> (What You Will Learn)
            </h2>
          </div>
          <p className="text-center text-base sm:text-lg text-gray-800 mb-8">
            Our Makeup Course is divided into four levels, so you can start from the basics and move up to international mastery:
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
              Why Choose <span className="text-[#F8069D]">UK International</span> for{" "}
              <br /> Makeup Artist Course?
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <p className="text-center text-base sm:text-lg text-gray-800 mb-8">
            Selecting the right makeup course from a recognized academy is the initial step toward curating your successful career. UK International can be your best choice for a Makeup Artist course for the following reasons:
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
              <span className="text-[#F8069D]">Makeup Course?</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <div className="text-center text-base sm:text-lg text-gray-800 mb-8">
            This course is open to:
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
              <span className="text-[#F8069D]">Makeup Course</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <div className="text-center text-base sm:text-lg text-gray-800 mb-8">
            A certification from UK International London Beauty School opens doors to endless career opportunities:
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
              Your Dream Career in{" "}
              <span className="text-[#F8069D]">Makeup Starts Here!</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <div className="text-center space-y-3 text-base sm:text-lg text-gray-800 max-w-4xl mx-auto">
            <p>
              Join{" "}
              <span className="text-[#F8069D] font-semibold">
                UK International London Beauty School
              </span>{" "}
              today! It is one of the leading makeup academies in India. This school helps you have a successful career in makeup. Whether you are looking for a makeup course nearby you or planning to take advanced makeup courses, we offer complete support – from training to certification and placements.
            </p>
            <p>
              Turn your passion into a profession with our professional makeup artist course training. Apply now and take the first step towards your makeup career.
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
              Take a look at the highlights from our makeup courses, workshops,
              and events.
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

export default MakeupPage;
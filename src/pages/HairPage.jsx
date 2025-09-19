import React, { useState } from "react";
import EnquiryForm from "../components/EnquiryForm";
import EnquiryFormPopup from "../components/EnquiryFormPopup";
import CustomButton from "../components/CustomButton";
import { motion } from "framer-motion";

// Import all required images
import MAIN_IMAGE from "/assets/main_img_cources_folder/462X346_HAIR.jpg";
import HAIR_T1 from "/assets/hair_folder/219X273_HAIR_T1.jpg";
import HAIR_T2 from "/assets/hair_folder/219X273_HAIR_T2.jpg";
import HAIR_T3 from "/assets/hair_folder/219X273_HAIR_T3.jpg";
import HAIR_T4 from "/assets/hair_folder/219X273_HAIR_T4.jpg";
import HAIR_T5 from "/assets/hair_folder/219X273_HAIR_T5.jpg";
import HAIR_T6 from "/assets/hair_folder/219X273_HAIR_T6.jpg";
import HAIR_T7 from "/assets/hair_folder/219X273_HAIR_T7.jpg";
import HAIR_T8 from "/assets/hair_folder/219X273_HAIR_T8.jpg";

const galleryImages = [
  HAIR_T1,
  HAIR_T2,
  HAIR_T3,
  HAIR_T4,
  HAIR_T5,
  HAIR_T6,
  HAIR_T7,
  HAIR_T8,
];

const HairPage = () => {
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
      title: "Basic Hair Course",
      points: [
        "Hair washing & scalp care",
        "Basic hair treatments",
        "Simple hairstyles & braiding",
        "Hair trimming & basic cuts",
        "Introduction to styling tools",
        "Hygiene & safety",
        "Hair brushing & combing techniques",
        "Sectioning & basic hair care tips",
      ],
      desc: "Learn the foundation of hair care and styling:",
    },
    {
      title: "Advanced Hair Course",
      points: [
        "Hair coloring basics",
        "Highlights & lowlights",
        "Bridal & party hairstyles",
        "Blow-drying techniques",
        "Curling & straightening",
        "Hair treatments & masks",
        "Client interaction skills",
        "Quick styling hacks",
      ],
      desc: "Master professional-level hair techniques:",
    },
    {
      title: "Haircutting Course",
      points: [
        "Men & women haircut techniques",
        "Layered cuts",
        "Bob & textured cuts",
        "Precision trimming",
        "Thinning & shaping hair",
        "Practical client exercises",
        "Razor cutting techniques",
        "Basic hair sculpting",
      ],
      desc: "Specialized training for cutting and shaping hair:",
    },
    {
      title: "Hair Chemical Course",
      points: [
        "Hair rebonding & straightening",
        "Perming techniques",
        "Hair relaxing & keratin treatments",
        "Hair color correction",
        "Chemical safety & precautions",
        "Application techniques",
        "Understanding hair structure",
        "Maintenance tips post-chemical services",
      ],
      desc: "Learn hair treatments and chemical services:",
    },
    {
      title: "Basic to Professional Hair Course",
      points: [
        "All basic & advanced skills",
        "Hair coloring mastery",
        "Advanced hairstyling",
        "Portfolio creation",
        "Client handling & communication",
        "Career guidance",
        "International certification",
        "Real-world practical exposure",
      ],
      desc: "This is a complete program combining all levels, ideal for students who want full knowledge from beginner to expert:",
    },
  ];

  const whyChoosePoints = [
    {
      title: "Hands-on Practice",
      desc: "We provide you work with real clients during your hair classes.",
    },
    {
      title: "International Curriculum",
      desc: "You get the opportunity to learn hair techniques followed in top global salons.",
    },
    {
      title: "100% Career Support",
      desc: "We provide placement guidance with leading salons & hair brands.",
    },
    {
      title: "Portfolio Development",
      desc: "We help our students to build a professional portfolio during your training.",
    },
    {
      title: "Celebrity Masterclasses",
      desc: "We make our students learn hairstyling secrets from top industry experts.",
    },
    {
      title: "Flexible Batches",
      desc: "We have flexible batches options where you can join weekday or weekend hair stylist courses as per your schedule.",
    },
    {
      title: "Internship Opportunities",
      desc: "The students can gain real-world salon and hairdressing experience.",
    },
    {
      title: "Confidence Building",
      desc: "We know the value of confidences therefore we provide personality development and client handling sessions to our students.",
    },
    {
      title: "EMI Option Available",
      desc: "We provide EMI and installment options which can be helpful for students.",
    },
  ];

  const whoCanJoinPoints = [
    {
      title: "Aspiring Hair Stylists and Barbers",
      desc: "Seeking professional training.",
    },
    {
      title: "Salon Professionals",
      desc: "Upgrading their skills.",
    },
    {
      title: "Housewives & Freelancers",
      desc: "Exploring new opportunities.",
    },
    {
      title: "Anyone Passionate About Hair",
      desc: "Passionate about hair care, styling, and beauty.",
    },
  ];

  const careerOpportunities = [
    {
      title: "Professional Hair Stylist",
      desc: "",
    },
    {
      title: "Barber & Hairdresser",
      desc: "",
    },
    {
      title: "Hair Color Specialist",
      desc: "",
    },
    {
      title: "Salon Owner or Freelancer",
      desc: "",
    },
    {
      title: "Hair Trainer or Salon Manager",
      desc: "",
    },
    {
      title: "International Hair Career",
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
              <span className="text-[#F8069D]">Certified Hair Professional</span> with
              UK International London Beauty School
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-4">
              Wanted to build your career in the hair and styling industry with one of the top hair academies in India? If yes, you are in the right place. At{" "}
              <span className="text-[#F8069D] font-semibold">
                UK International London Beauty School
              </span>
              , we offer professional hairstyle courses which cover each and everything from basic hair care to advanced hair treatment and coloring techniques.
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-6">
              Get the opportunity to learn from expert trainers and get an international certificate from the global recognized beauty academy. We offer hands-on training, career support and flexible batches options where you can turn your passion for hair into a profession.
            </p>
            <button
              onClick={() => openPopup("hero_button")}
              className="animated-border relative group p-[2px] hover:scale-105 active:scale-105"
            >
              <CustomButton>Enroll Now – Limited Seats Available</CustomButton>
            </button>
          </div>
          <div className="flex-1 max-w-lg mt-8 lg:mt-4 mb-8 w-40%">
            <EnquiryForm source="hair_page" />
          </div>
        </div>
      </section>

      {/* About the Hair Course */}
      <section
        id="about"
        className="py-14 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-6 tracking-wide relative inline-block">
              About the <span className="text-[#F8069D]">Hair Course</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 max-w-md">
              <img
                src={MAIN_IMAGE}
                alt="Hair Course"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 relative p-4 rounded-3xl">
              <div className="relative z-10 flex flex-col items-center text-center space-y-3 lg:text-left lg:items-start">
                <div className="space-y-3 text-base sm:text-lg leading-relaxed text-gray-800">
                  <p>
                    Our hair course is specially designed for students who want to set up their career in hair styling. We provide stepwise hair styling levels, starting from basic hair care to advanced hairdressing techniques. Whether you are a beginner searching for a hairdressing course nearby you or a professional polishing your skills, this program gives you all the knowledge and practical experience you need.
                  </p>
                  <p>
                    The course is a complete mixture of theory, practical training, and live workshops, ensuring that you not only learn but also gain the confidence to work with real clients.
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

      {/* Hair Course Levels */}
      <section className="py-10 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {/* Large screens */}
            <h2 className="hidden sm:block text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center">
              Levels of Our{" "}
              <span className="text-[#F8069D]">Hair Course</span> (What You
              Will Learn)
            </h2>

            {/* Mobile screens */}
            <h2 className="block sm:hidden text-3xl font-bold text-black text-center">
              Levels of Our{" "}
              <span className="text-[#F8069D]">
                <br />
                Hair Course
              </span>{" "}
              <br /> (What You Will Learn)
            </h2>
          </div>
          <p className="text-center text-base sm:text-lg text-gray-800 mb-8">
            We have divided our Hair Courses into five levels where you can start from the basics and move up to professional expertise:
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
              <br /> Hair Course Training?
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <p className="text-center text-base sm:text-lg text-gray-800 mb-8">
            Here are the number of reasons why UK International London Beauty School is the best choice for Hair Courses in India -
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
              <span className="text-[#F8069D]">Hair Course?</span>
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
              <span className="text-[#F8069D]">Hair Course</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <div className="text-center text-base sm:text-lg text-gray-800 mb-8">
            A certification from UK International London Beauty School opens multiple career paths in the hair industry:
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
              <span className="text-[#F8069D]">Hair Starts Here!</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <div className="text-center space-y-3 text-base sm:text-lg text-gray-800 max-w-4xl mx-auto">
            <p>
              Join the{" "}
              <span className="text-[#F8069D] font-semibold">
                UK International London Beauty School
              </span>{" "}
              today! This school is one of the leading hair academies in India, and built a successful career in hair styling and coloring. Whether you are looking for a professional hairstyle course near to you or planning to take advanced hair courses, we offer comprehensive support from training to certification and placements.
            </p>
            <p>
              Turn your passion into a profession with our Hairdressing and Hair Stylist Courses. Apply now and take the first step towards your hair career!
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
              Take a look at the highlights from our hair courses, workshops, and events.
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

export default HairPage;
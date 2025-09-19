import React, { useState } from "react";
import EnquiryForm from "../components/EnquiryForm";
import EnquiryFormPopup from "../components/EnquiryFormPopup";
import CustomButton from "../components/CustomButton";
import { motion } from "framer-motion";

const BeautyPage = () => {
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
      title: "Basic Beautician Course",
      points: [
        "Skincare basics & facials",
        "Hair care & simple hairstyles",
        "Nail care & basic nail art",
        "Intro to makeup",
        "Hygiene & safety",
      ],
      desc: "In this course, you will learn the foundation of beauty care:",
    },
    {
      title: "Advanced Beautician Course",
      points: [
        "Advanced facials & treatments",
        "Hair styling & coloring",
        "Bridal & party makeup",
        "Advanced nail art",
        "Client handling",
      ],
      desc: "After mastering the basics, the Advanced Beauty Course helps you learn professional-level techniques:",
    },
    {
      title: "Basic to Professional Beauty Course",
      points: [
        "All basic & advanced skills",
        "Special beauty treatments",
        "Portfolio building",
        "Career guidance",
        "International certificate",
      ],
      desc: "This is a complete course combining all levels, ideal for students who want full knowledge from beginner to expert.",
    },
  ];

  const whyChoosePoints = [
    {
      title: "Hands-on Practice",
      desc: "At UK International, we offer work with real clients during your beauty classes.",
    },
    {
      title: "International Curriculum",
      desc: "UK international has international recognition where the students get the opportunity to learn beauty techniques followed in top global salons.",
    },
    {
      title: "100% Career Support",
      desc: "We offer placement guidance with leading salons & beauty brands.",
    },
    {
      title: "Portfolio Development",
      desc: "In this school students can build professional client portfolios during their training.",
    },
    {
      title: "Celebrity Masterclasses",
      desc: "We provide beauty secrets from top industry experts where students can learn each technique and celebrity management.",
    },
    {
      title: "Flexible Batches",
      desc: "We offer flexible batches where the students can join weekday or weekend beautician classes as per your schedule.",
    },
    {
      title: "Internship Opportunities",
      desc: "The students get real-world salon and beauty parlour course experience.",
    },
    {
      title: "Confidence Building",
      desc: "During the course the students get personality development and client handling sessions.",
    },
    {
      title: "EMI Option Available",
      desc: "At UK International you will get EMI and installment options which can be helpful.",
    },
  ];

  const whoCanJoinPoints = [
    {
      title: "Aspiring Beauticians",
      desc: "Wanting professional beauty training.",
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
      title: "Anyone Passionate About Beauty",
      desc: "Passionate about beauty & personal care.",
    },
  ];

  const careerOpportunities = [
    {
      title: "Professional Beautician in Salons & Spas",
      desc: "",
    },
    {
      title: "Skincare & Beauty Therapist",
      desc: "",
    },
    {
      title: "Beauty Parlour Owner or Freelancer",
      desc: "",
    },
    {
      title: "Salon Manager or Trainer",
      desc: "",
    },
    {
      title: "Beauty Blogger / Influencer",
      desc: "",
    },
    {
      title: "International Career in Wellness & Beauty Services",
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
              <span className="text-[#F8069D]">Certified Beautician</span> with
              UK International London Beauty School
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-4">
              Accelerate your professional beauty career with one of the top
              Beauty Academies in India. At{" "}
              <span className="text-[#F8069D] font-semibold">
                UK International London Beauty School
              </span>
              , we offer professional beauty courses which cover each and
              everything from skincare and facial to advanced beauty treatments.
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-6">
              Enroll today and learn from top experts trainers and get
              International certification and choose the success path as
              beautician. With hands-on training, career support and flexible
              bathes, you can push your dream to reality.
            </p>
            <button
              onClick={() => openPopup("hero_button")}
              className="animated-border relative group p-[2px] hover:scale-105 active:scale-105"
            >
              <CustomButton>Enroll Now – Limited Seats Available</CustomButton>
            </button>
          </div>
          <div className="flex-1 max-w-lg mt-8 lg:mt-4 mb-8 w-40%">
            <EnquiryForm source="beauty_page" />
          </div>
        </div>
      </section>

      {/* About the Beauty Course */}
      <section
        id="about"
        className="py-14 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-6 tracking-wide relative inline-block">
              About the <span className="text-[#F8069D]">Beauty Course</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 max-w-md">
              <img
                src="/assets/main_img_cources_folder/462X346_BEAUTY.jpg"
                alt="Beauty Course"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 relative p-4 rounded-3xl">
              <div className="relative z-10 flex flex-col items-center text-center space-y-3 lg:text-left lg:items-start">
                <div className="space-y-3 text-base sm:text-lg leading-relaxed text-gray-800">
                  <p>
                    Our Beauty Course is specially designed for the passionate
                    students who dreamt to be professional in the beauty field.
                    In this course the student gets the opportunity to learn
                    stepwise beauty techniques which start from the basics of
                    skincare to advance beauty treatment. Whether you are a
                    beginner looking for a top beautician course near you or a
                    professional and experienced one who wants to upgrade their
                    skills, this beauty program gives a chance to you. Learn and
                    live your dream career.
                  </p>
                  <p>
                    This complete course is a blend of theory, live training and
                    live workshops which assure that you are not only learning
                    but also gaining confidence to work in real life stage.
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

      {/* Beauty Course Levels */}
      <section className="py-10 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {/* Large screens */}
            <h2 className="hidden sm:block text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center">
              Levels of Our{" "}
              <span className="text-[#F8069D]">Beauty Course</span> (What You
              Will Learn)
            </h2>

            {/* Mobile screens */}
            <h2 className="block sm:hidden text-3xl font-bold text-black text-center">
              Levels of Our{" "}
              <span className="text-[#F8069D]">
                <br />
                Beauty Course
              </span>{" "}
              <br /> (What You Will Learn)
            </h2>
          </div>
          <p className="text-center text-base sm:text-lg text-gray-800 mb-8">
            We have three levels in our beauty course so you can initiate from
            the basics and move up to professional expertise:
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
              <br /> Beautician Course Training?
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <p className="text-center text-base sm:text-lg text-gray-800 mb-8">
            Here are the number of reasons that why UK International London
            Beauty School is the best choice for Beautician Courses in India -
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
              <span className="text-[#F8069D]">Beautician Course?</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <div className="text-center text-base sm:text-lg text-gray-800 mb-8">
            This course is suitable for:
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
              <span className="text-[#F8069D]">Beauty Course</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <div className="text-center text-base sm:text-lg text-gray-800 mb-8">
            A certification from UK International London Beauty School opens
            multiple career paths in the beauty industry:
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
              <span className="text-[#F8069D]">Beauty Starts Here!</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <div className="text-center space-y-3 text-base sm:text-lg text-gray-800 max-w-4xl mx-auto">
            <p>
              Join the{" "}
              <span className="text-[#F8069D] font-semibold">
                UK International London Beauty School
              </span>{" "}
              today! It is one of the leading beauty academies in India. This
              school helps to have a successful career in beauty. Whether you
              are looking for a beautician course nearby you or planning to take
              advanced beauty courses, we offer complete support – from training
              to certification and placements.
            </p>
            <p>
              Turn your passion into a profession with our professional
              beautician course training. Apply now and take the first step
              towards your beauty career.
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
              Take a look at the highlights from our beauty courses, workshops,
              and events.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "/assets/beauty_folder/219X273_BEAUTY_T1.jpg",
              "/assets/beauty_folder/219X273_BEAUTY_T2.jpg",
              "/assets/beauty_folder/219X273_BEAUTY_T3.jpg",
              "/assets/beauty_folder/219X273_BEAUTY_T4.jpg",
              "/assets/beauty_folder/219X273_BEAUTY_T5.jpg",
              "/assets/beauty_folder/219X273_BEAUTY_T6.jpg",
              "/assets/beauty_folder/219X273_BEAUTY_T7.jpg",
              "/assets/beauty_folder/219X273_BEAUTY_T8.jpg",
            ].map((src, idx) => (
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

export default BeautyPage;

import React, { useState } from "react";
import CustomButton from "./CustomButton";
import EnquiryFormPopup from "./EnquiryFormPopup"; // Import EnquiryFormPopup
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBriefcase,
  FaHandsHelping,
  FaGlobe,
} from "react-icons/fa";

const WhyChooseUs = ({ enquiryRef }) => {
  // Popup state
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupSource, setPopupSource] = useState("unknown"); // <-- Added

  // Updated openPopup to accept source
  const openPopup = (source) => {
    setPopupSource(source);
    setIsPopupOpen(true);
  };
  const closePopup = () => setIsPopupOpen(false);

  const points = [
    {
      icon: <FaHandsHelping />,
      title: "Hands-on Training",
      desc: "At UK International, we ensure you practice directly on real faces, clients, and models for maximum confidence.",
    },
    {
      icon: <FaGlobe />,
      title: "International Curriculum",
      desc: "We provide globally updated makeup, hair, and beauty techniques to keep you ahead of industry trends.",
    },
    {
      icon: <FaUserGraduate />,
      title: "International Certification",
      desc: "We award internationally recognized certificates that open career opportunities both in India and abroad.",
    },
    {
      icon: <FaBriefcase />,
      title: "Latest Tools & Products",
      desc: "We train you with premium professional kits and industry-standard equipment.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Portfolio Building",
      desc: "We help you create a professional portfolio to showcase your artistry and skills.",
    },
    {
      icon: <FaUserGraduate />,
      title: "100% Placement Support",
      desc: "We guide you with career opportunities and provide full placement assistance after course completion.",
    },
    {
      icon: <FaGlobe />,
      title: "Flexible Batches",
      desc: "We offer weekday and weekend classes, so you can learn as per your convenience.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Free Internship",
      desc: "Gain real-world industry experience in Beauty and makeup during your course with our free internship program.",
    },
    {
      icon: <FaBriefcase />,
      title: "Digital Marketing Masterclass",
      desc: "We teach you how to grow your personal brand online through social media and other digital platforms.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Experienced Faculty",
      desc: "We have expert trainers with years of real-world industry experience to guide you.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Career Guidance",
      desc: "We mentor you with placement support, entrepreneurship tips, and startup advice.",
    },
    {
      icon: <FaGlobe />,
      title: "Workshops & Masterclasses",
      desc: "We regularly organize advanced sessions with celebrity makeup artists and industry leaders.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Personality Development",
      desc: "We groom your communication skills, confidence, and client-handling techniques for a professional edge.",
    },
    {
      icon: <FaBriefcase />,
      title: "Networking Opportunities",
      desc: "We connect you with industry professionals, brands, and alumni for better exposure.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Entrepreneurship Support",
      desc: "At UK International, we guide you in starting your own salon, studio, or freelancing career.",
    },
  ];

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

  return (
    <section className="py-14 px-6 lg:px-16 md:pb-12 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg uppercase relative inline-block text-center">
            <span className="text-black block sm:inline">Why Students</span>{" "}
            <span className="block sm:inline text-[#F8069D]">LOVE</span>{" "}
            <span className="block sm:inline text-[#F8069D]">
              UK INTERNATIONAL
            </span>
            <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              className="relative p-6 rounded-3xl shadow-xl flex flex-col justify-between overflow-hidden bg-white/70 backdrop-blur-md border border-white/50"
              style={{
                background: `linear-gradient(135deg, ${getRandomColor()}, #ffffff)`,
              }}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/50 text-[#F8069D] text-3xl mb-4 shadow-inner">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  {point.title}
                </h3>
                <p className="text-black text-lg leading-relaxed">
                  {point.desc}
                </p>
              </div>

              {/* Decorative blob on top right */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/30 transform translate-x-1/4 -translate-y-1/4"></div>
              <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-white/50 transform translate-x-1/2 -translate-y-1/2"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 mb-0">
          <button
            onClick={() => openPopup("why_choose_us_button")} // source set here
            className="animated-border relative group p-[2px] hover:scale-105 active:scale-105"
          >
            <CustomButton>Click To Instant Callback</CustomButton>
          </button>
        </div>
      </div>

      {/* Enquiry Form Popup */}
      {isPopupOpen && (
        <EnquiryFormPopup closePopup={closePopup} source={popupSource} />
      )}
    </section>
  );
};

export default WhyChooseUs;

import React, { useState } from "react";
import EnquiryForm from "../components/EnquiryForm";
import EnquiryFormPopup from "../components/EnquiryFormPopup";
import CustomButton from "../components/CustomButton";
import { motion } from "framer-motion";

// Import images
import MAIN_IMAGE from "/assets/main_img_cources_folder/462X346_BVOC.jpg";

const BVocPage = () => {
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

  const courseDetails = [
    {
      title: "Makeup Artistry",
      points: [
        "In this module you will learn makeup from basic to advanced levels, including bridal, fashion, party, and creative looks.",
      ],
    },
    {
      title: "Haircut & Hair Chemical Treatments",
      points: [
        "In this module you will understand and learn the basics to advance techniques of master professional haircutting, coloring, smoothening, rebonding, keratin, and other chemical treatments.",
      ],
    },
    {
      title: "Beauty (Basic to Advanced Level)",
      points: [
        "Here you will get the opportunity to explore skincare techniques, facials, advanced treatments, and the latest beauty equipment.",
      ],
    },
    {
      title: "Hair Styling",
      points: [
        "In this module will make you learn the classic to trending hairstyles, updos, and creative styling for different occasions.",
      ],
    },
    {
      title: "Hair Extensions",
      points: [
        "Here you will learn professional methods of applying, styling, and maintaining hair extensions.",
      ],
    },
    {
      title: "Nail Care (Basic to Advanced)",
      points: [
        "In the Nail care module you will understand Nail art, gel extensions, manicure-pedicure, and trending nail techniques with live practice.",
      ],
    },
    {
      title: "Hydra Facial & Skin Treatments",
      points: [
        "Here you will get hands-on training in hydra facials, modern skincare, and advanced therapies under the professional experts of these industries.",
      ],
    },
    {
      title: "Spa & Body Therapies",
      points: [
        "In this module you will learn massage techniques, spa rituals, and relaxation treatments for holistic wellness.",
      ],
    },
    {
      title: "Communication & Management",
      points: [
        "Here you will learn professional grooming, client communication, salon management, and personality development.",
      ],
    },
  ];

  const whyChoosePoints = [
    {
      title: "India’s Only International Bachelor Degree in Beauty & Wellness",
      desc: "UK International is proud to be the first and only institute in India to offer this B.Voc unique program.",
    },
    {
      title: "International Internship",
      desc: "By completing B.voc degree from UK international you will get global exposure with our exclusive internship opportunities abroad.",
    },
    {
      title: "Hands-on Training",
      desc: "Here we are providing live practice directly on real faces, models, and clients to build confidence.",
    },
    {
      title: "International Curriculum",
      desc: "You will get to learn the latest makeup, hair, and beauty techniques followed globally.",
    },
    {
      title: "International Certification",
      desc: "Here you will earn globally recognized certificates that open doors to career opportunities in India and overseas as well.",
    },
    {
      title: "100% Placement Support",
      desc: "We not just make learn theory but also guide you with job opportunities and career assistance after course completion.",
    },
    {
      title: "Portfolio Building",
      desc: "We help our students to create 5 professional portfolios to showcase your skills to clients and employers by our side.",
    },
    {
      title: "Digital Marketing Masterclass",
      desc: "We teach our students how to grow your personal brand, get clients, and expand your business online.",
    },
    {
      title: "Workshops & Masterclasses",
      desc: "Here you will get the opportunity to attend exclusive sessions with celebrity makeup artists and industry leaders which aids in building your confidence level.",
    },
  ];

  const careerScopePoints = [
    {
      title: "Makeup Artist (Bridal, Fashion, Film & TV)",
      desc: "",
    },
    {
      title: "Hair Stylist / Hair Technician",
      desc: "",
    },
    {
      title: "Skin Care & Beauty Therapist",
      desc: "",
    },
    {
      title: "Nail Artist / Nail Technician",
      desc: "",
    },
    {
      title: "Spa & Wellness Expert",
      desc: "",
    },
    {
      title: "Salon Manager or Owner",
      desc: "",
    },
    {
      title: "Beauty Trainer / Educator",
      desc: "",
    },
    {
      title: "Freelancer in Events & Media Industry",
      desc: "",
    },
  ];

  const whoCanApplyPoints = [
    {
      title: "Students who have just completed 12th",
      desc: "And want a career-focused degree.",
    },
    {
      title: "Working Professionals",
      desc: "Looking to upgrade their skills with a B.VOC Degree.",
    },
    {
      title: "Beauty Enthusiasts",
      desc: "Who want to gain an international-level qualification.",
    },
    {
      title: "Salon Owners or Freelancers",
      desc: "Who wish to expand their knowledge and get global recognition.",
    },
  ];

  return (
    <div className="antialiased font-inter text-gray-900 overflow-x-hidden bg-white ">
      {/* Hero Section with EnquiryForm */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-r from-[#FDDCEE] to-white pt-20">
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 gap-8 text-black">
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl mt-1 mb-10 lg:text-5xl font-extrabold text-black tracking-wi relative inline-block">
              Get Your <span className="text-[#F8069D]">B.Voc Degree</span> in
              Beauty & Wellness with UK International London Beauty School
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-4">
              Build a professional career in the beauty and wellness industry
              with the B.Voc Degree program at{" "}
              <span className="text-[#F8069D] font-semibold">
                UK International London Beauty School
              </span>
              . This program is specially created for those who want to set
              their career in the advanced beauty industry.
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-6">
              Get the opportunity to learn from experts, gain global exposure
              and receive a degree that is recognized not only in India but
              globally. You will not only learn beauty techniques but experience
              hands-on practices, internship and career guidance. Here you can
              reshape your passion into a professional journey.
            </p>
            <button
              onClick={() => openPopup("hero_button")}
              className="animated-border relative group p-[2px] hover:scale-105 active:scale-105"
            >
              <CustomButton>Enroll Now – Limited Seats Available</CustomButton>
            </button>
          </div>
          <div className="flex-1 max-w-lg mt-8 lg:mt-4 mb-8 w-40%">
            <EnquiryForm source="bvoc_page" />
          </div>
        </div>
      </section>

      {/* About the B.Voc Degree Program */}
      <section
        id="about"
        className="py-14 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-6 tracking-wide relative inline-block">
              What is a <span className="text-[#F8069D]">B.VOC Degree</span>{" "}
              Program in Beauty and Wellness?
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 max-w-md">
              <img
                src={MAIN_IMAGE}
                alt="B.Voc Program"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 relative p-4 rounded-3xl">
              <div className="relative z-10 flex flex-col items-center text-center space-y-3 lg:text-left lg:items-start">
                <div className="space-y-3 text-base sm:text-lg leading-relaxed text-gray-800">
                  <p>
                    The B.Voc Degree stands for the Bachelor of Vocation. It is
                    an undergraduate program that is focused on skills and
                    practical learning along with theory. B.Voc (Bachelor of
                    Vocation) beauty is a specially designed program for those
                    who want to set their career in makeup, hair, spa, skin care
                    and overall wellness.
                  </p>
                  <p>
                    This is a professional course and carries more weight in the
                    care & well industry and is recognized globally. If someone
                    is doing the B.Voc in beauty and wellness program they will
                    not only learn beauty techniques but also develop managing
                    skills, global standard and communication which is very much
                    required in this industry.
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

      {/* Course Details of B.Voc Degree Program */}
      <section className="py-10 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {/* Large screens */}
            <h2 className="hidden sm:block text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center">
              Course Details of Our{" "}
              <span className="text-[#F8069D]">B.Voc Degree</span> Program
              
            </h2>

            {/* Mobile screens */}
            <h2 className="block sm:hidden text-3xl font-bold text-black text-center">
              Course Details of Our{" "}
              <span className="text-[#F8069D]">
                <br />
                B.Voc Degree
              </span>{" "}
              <br /> Program
            </h2>
          </div>
          <p className="text-center text-base sm:text-lg text-gray-800 mb-8">
            The B.Voc in beauty and wellness course is specially structured in a
            way where students can learn each technique and essential part of
            the beauty & wellness industry. Program modules covers:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseDetails.map((detail, idx) => (
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
                    {detail.title}
                  </h3>
                  <p className="text-gray-800 text-base leading-relaxed">
                    {detail.points[0]}
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/30 transform translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-white/50 transform translate-x-1/2 -translate-y-1/2"></div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => openPopup("course_details_button")}
              className="animated-border relative group p-[2px] hover:scale-105 active:scale-105"
            >
              <CustomButton>Explore Program</CustomButton>
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
              <br /> B.Voc Degree Program?
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <p className="text-center text-base sm:text-lg text-gray-800 mb-8">
            UK International London Beauty School is a leading brand in the
            beauty industry that not only teaches beauty but creates future
            industry leaders. Our B.Voc Degree program is curated with
            international standards so our students can build a strong and
            successful career not just in India but abroad.
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

      {/* Career Scope */}
      <section className="py-14 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-6 tracking-wide relative inline-block">
              Career Scope After a{" "}
              <span className="text-[#F8069D]">B.Voc Degree</span> in Beauty and
              Wellness
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <p className="text-center text-base sm:text-lg text-gray-800 mb-8">
            When you complete the B.Voc degree, you will get a wide range of
            career options in the beauty and wellness industry. This bachelor
            course opens doors not only in India but also on a global stage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerScopePoints.map((point, idx) => (
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
              onClick={() => openPopup("career_scope_button")}
              className="animated-border relative group p-[2px] hover:scale-105 active:scale-105"
            >
              <CustomButton>Start Your Career</CustomButton>
            </button>
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-14 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-6 tracking-wide relative inline-block">
              Who Can Apply for the{" "}
              <span className="text-[#F8069D]">B.Voc Program?</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>
          <div className="text-center text-base sm:text-lg text-gray-800 mb-8">
            The B.Voc in Beauty and Wellness Program is suitable for:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whoCanApplyPoints.map((point, idx) => (
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
              onClick={() => openPopup("who_can_apply_button")}
              className="animated-border relative group p-[2px] hover:scale-105 active:scale-105"
            >
              <CustomButton>Join Now</CustomButton>
            </button>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-14 px-6 lg:px-16 bg-gradient-to-b from-[#FDDCEE] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-6 tracking-wide relative inline-block">
              Start Your{" "}
              <span className="text-[#F8069D]">Beauty Career Today</span>
              <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
            </h2>
          </div>

          <div className="text-center space-y-3 text-base sm:text-lg text-gray-800 max-w-4xl mx-auto">
            <p>
              A career in beauty and wellness is exciting, creative, and full of
              opportunities. But to succeed, you should have the right education
              and the right guidance. The B.VOC Degree Program in beauty and
              wellness is not just another course; it is a proper career path
              that sets you apart from others in this rival world.
            </p>
            <p>
              By choosing the B.Voc with LISD, you are investing in a future
              that is bright, secure, and global. So, whether you are looking
              for a B.Voc in beauty and wellness program, or an International
              Bachelor’s Degree in Beauty & Wellness from London,{" "}
              <span className="text-[#F8069D] font-semibold">
                UK International London Beauty School
              </span>{" "}
              is here to guide you every step of the way.
            </p>
            <p>
              Your dream career starts with the right choice. Take your first
              step today and make your mark in the world of beauty and wellness.
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

      {/* Enquiry Form Popup */}
      {isPopupOpen && (
        <EnquiryFormPopup closePopup={closePopup} source={popupSource} />
      )}
    </div>
  );
};

export default BVocPage;

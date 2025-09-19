"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "Q1. Why should I choose UK International London Beauty School?",
    answer:
      "UK International London Beauty School is one of the top beauty schools in India offering expert trainers, hands-on practice, and global certifications. We provide professional courses in makeup, hair, nails, and beauty to prepare students for successful careers worldwide.",
  },
  {
    question: "Q2. What are the course fees at UK International Beauty School?",
    answer:
      " Our beauty school fees are the same across Delhi, Noida, and other branches. We also offer flexible payment options, making it easier for students to join makeup, hair, nail art, and beauty courses confidently.",
  },
  {
    question: "Q3. Can beginners join the professional makeup artist course?",
    answer:
      "Yes, beginners can join our professional makeup artist course. At UK International, training starts with basics and moves to advanced techniques, helping learners gain practical skills step-by-step to become successful bridal and fashion makeup artists.",
  },
  {
    question: "Q4. Do you provide job placement support after the course?",
    answer:
      "Yes, UKIBS offers job placement assistance. Students receive career guidance for working in top salons, fashion and media industry, or as freelance professionals after completing makeup, hair, beauty, or nail art courses with certification.",
  },
  {
    question: "Q5. How can I apply for courses?",
    answer:
      "Students can apply online through our website or visit centers in Delhi, Noida, and other branches. UK International Beauty Academy provides complete guidance on course details, fees, schedules, and helps choose the right program for your career.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-[#FDDCEE] to-white py-12 font-sans">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 drop-shadow-lg relative inline-block uppercase">
            <span className="text-black">FREQUENTLY ASKED QUESTIONS</span>{" "}
            <span className="text-[#F8069D]"> (FAQs)</span>
            <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
          </h2>

          <p className="text-black-700 text-lg md:text-xl max-w-3xl mx-auto">
            Get quick answers about our programs, admissions, and career
            opportunities.
          </p>
        </div>

        {/* FAQ Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-pink-100 hover:shadow-pink-200/50 transition-shadow duration-500">
          {faqData.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleAnswer(index)}
              className="p-6 md:p-8 border-b last:border-b-0 cursor-pointer transition-colors hover:bg-pink-50"
            >
              {/* Question */}
              <div className="flex w-full items-center justify-between text-left">
                <span className="text-xl md:text-2xl font-bold text-black pr-6 leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`text-[#F8069D] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown size={28} />
                </span>
              </div>

              {/* Answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-black text-lg md:text-xl leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

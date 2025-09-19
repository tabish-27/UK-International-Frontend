"use client";

import React, { useRef, useEffect } from "react";

// Data for the awards images
const awardsData = [
  { src: "/assets/awards_img/a1.webp", label: "SDC CANADA" },
  { src: "/assets/awards_img/a2.webp", label: "NSDC" },
  { src: "/assets/awards_img/a3.webp", label: "ICI UK" },
  { src: "/assets/awards_img/a4.webp", label: "UNGPC" },
  { src: "/assets/awards_img/a5.webp", label: "Award 5" },
  { src: "/assets/awards_img/a6.webp", label: "Award 6" },
  { src: "/assets/awards_img/a7.webp", label: "Award 7" },
  { src: "/assets/awards_img/a8.webp", label: "Award 8" },
  { src: "/assets/awards_img/a9.webp", label: "Award 9" },
  { src: "/assets/awards_img/a10.webp", label: "Award 10" },
  { src: "/assets/awards_img/a11.webp", label: "Award 11" },
];

// InfiniteMovingCards component for seamless scrolling
const InfiniteMovingCards = ({ items, direction = "left", speed = "slow" }) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    // Duplicate items for seamless infinite scroll
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current.appendChild(duplicatedItem);
    });

    // Set animation duration based on speed
    const duration =
      speed === "slow" ? "96s" : speed === "medium" ? "64s" : "32s";

    // Set CSS variables for animation
    if (scrollerRef.current) {
      scrollerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "reverse" : "normal"
      );
      scrollerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[200px] overflow-hidden "
    >
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left var(--animation-duration) linear infinite;
        }
      `}</style>
      <ul
        ref={scrollerRef}
        className="flex min-w-full shrink-0 w-max items-center gap-10 justify-center animate-scroll-left"
      >
        {items.map((item, idx) => (
          <li key={`${item.label}-${idx}`} className="m-0 p-0">
            <img
              src={item.src}
              alt={item.label}
              className="w-[217px] h-[189px] object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Awards component
const Awards = () => {
  return (
    <section className="bg-gradient-to-br from-[#FDDCEE] to-white py-10 md:py-12 font-sans w-full ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-6 tracking-wide relative inline-block">
            OUR LEGACY OF <span className="text-[#F8069D]">AWARDS & RECOGNITIONS</span>
            <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
          </h2>

          <p className="text-black/80 text-base md:text-lg">
            Honoured by global institutions for excellence and quality
          </p>
        </div>

        <div className="w-full mt-15">
          <InfiniteMovingCards
            items={awardsData}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Awards;

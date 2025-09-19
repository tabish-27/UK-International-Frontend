"use client";

import React, { useRef, useEffect } from "react";

// The data for the partner logos
const partnersData = [
  {
    name: "Partner 1",
    logo: "/assets/Partners_img/p1.webp",
    alt: "Partner 1 logo",
  },
  {
    name: "Partner 2",
    logo: "/assets/Partners_img/p2.webp",
    alt: "Partner 2 logo",
  },
  {
    name: "Partner 3",
    logo: "/assets/Partners_img/p3.webp",
    alt: "Partner 3 logo",
  },
  {
    name: "Partner 4",
    logo: "/assets/Partners_img/p4.webp",
    alt: "Partner 4 logo",
  },
  {
    name: "Partner 5",
    logo: "/assets/Partners_img/p5.webp",
    alt: "Partner 5 logo",
  },
  {
    name: "Partner 6",
    logo: "/assets/Partners_img/p6.webp",
    alt: "Partner 6 logo",
  },
];

// A self-contained component for the infinite moving cards
const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "slow",
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    // Duplicate items for infinite scroll effect
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current.appendChild(duplicatedItem);
    });

    const isSlow = speed === "slow";
    const duration = isSlow ? "40s" : "20s";

    if (scrollerRef.current) {
      scrollerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "reverse" : "normal"
      );
      scrollerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden md:py-8">
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-left {
            animation: scroll-left var(--animation-duration) linear infinite;
          }
        `}
      </style>
      <ul
        ref={scrollerRef}
        className="flex min-w-full shrink-0 w-max items-center gap-12 justify-center animate-scroll-left"
      >
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center justify-center">
            <img
              src={item.logo}
              alt={item.alt}
              className="md:h-60 h-50 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

// The main Partners component
const Partners = () => {
  return (
    <section className="bg-gradient-to-br from-[#FDDCEE] to-white py-12 md:py-24 font-sans">
      <div className="mx-auto px-4 h-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8069D] mb-6 tracking-wide relative inline-block">
            BRANDS OUR <br className="sm:hidden" />
            STUDENTS <br className="sm:hidden" />
            <span className="text-black">WORKING WITH</span>
            <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
          </h2>

          <p className="text-black/80 text-base md:text-lg">
            100% Job assistance with unlimited placement opportunities
          </p>
        </div>

        <InfiniteMovingCards
          items={partnersData}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Partners;

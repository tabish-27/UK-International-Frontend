"use client";

import React, { useRef, useEffect } from "react";

// Data for the placement images
const placementsData = [
  {
    name: "Placement 1",
    logo: "/assets/placement_img/sp1.jpg",
    alt: "Placement 1 logo",
  },
  {
    name: "Placement 2",
    logo: "/assets/placement_img/sp2.jpg",
    alt: "Placement 2 logo",
  },
  {
    name: "Placement 3",
    logo: "/assets/placement_img/sp3.jpg",
    alt: "Placement 3 logo",
  },
  {
    name: "Placement 4",
    logo: "/assets/placement_img/sp4.jpg",
    alt: "Placement 4 logo",
  },
  {
    name: "Placement 5",
    logo: "/assets/placement_img/sp5.jpg",
    alt: "Placement 5 logo",
  },
  {
    name: "Placement 6",
    logo: "/assets/placement_img/sp6.jpg",
    alt: "Placement 6 logo",
  },
  {
    name: "Placement 7",
    logo: "/assets/placement_img/sp7.jpg",
    alt: "Placement 7 logo",
  },
  {
    name: "Placement 8",
    logo: "/assets/placement_img/sp8.jpg",
    alt: "Placement 8 logo",
  },
  {
    name: "Placement 9",
    logo: "/assets/placement_img/sp9.jpg",
    alt: "Placement 9 logo",
  },
  {
    name: "Placement 10",
    logo: "/assets/placement_img/sp10.jpg",
    alt: "Placement 10 logo",
  },
  {
    name: "Placement 11",
    logo: "/assets/placement_img/sp11.jpg",
    alt: "Placement 11 logo",
  },
  {
    name: "Placement 12",
    logo: "/assets/placement_img/sp12.jpg",
    alt: "Placement 12 logo",
  },
  {
    name: "Placement 13",
    logo: "/assets/placement_img/sp13.jpg",
    alt: "Placement 13 logo",
  },
  {
    name: "Placement 14",
    logo: "/assets/placement_img/sp14.jpg",
    alt: "Placement 14 logo",
  },
  {
    name: "Placement 15",
    logo: "/assets/placement_img/sp15.jpg",
    alt: "Placement 15 logo",
  },
  {
    name: "Placement 16",
    logo: "/assets/placement_img/sp16.jpg",
    alt: "Placement 16 logo",
  },
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
      className="relative w-full h-[320px] overflow-hidden"
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
          <li key={`${item.name}-${idx}`}>
            <img
              src={item.logo}
              alt={item.alt}
              className="w-[217px] h-[304px] object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Placements component
const Placements = () => {
  return (
    <section className="bg-gradient-to-br from-[#FDDCEE] to-white py-8 md:py-24 font-sans w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8069D] mb-4 tracking-wide relative inline-block uppercase">
            OUR STARS IN <br className="sm:hidden" />
            <span className="text-black">THE INDUSTRY</span>
            {/* Underline same width as text */}
            <span className="absolute left-0 bottom-[-4px] h-1 w-full bg-gradient-to-r from-transparent via-[#F8069D] to-transparent rounded-full"></span>
          </h2>

          <p className="text-black/80 text-base md:text-lg">
            100% Job assistance with unlimited placement opportunities
          </p>
        </div>

        <div className="w-full mt-15">
          <InfiniteMovingCards
            items={placementsData}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Placements;

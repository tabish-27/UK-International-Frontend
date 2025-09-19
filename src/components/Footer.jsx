import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const locations = [
  {
    label: "NOIDA SECTOR 16",
    address:
      "A-4, First Floor, Logix Park, Sector 16, Noida, Uttar Pradesh 201301",
    phone: "+91-8181814007",
    email: "info@uk-international.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.684443501289!2d77.31246307459912!3d28.579236975693927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458d0000001%3A0x675786d88c822e7a!2sUK%20International%20London%20beauty%20school!5e0!3m2!1sen!2sin!4v1757052588334!5m2!1sen!2sin",
  },
  {
    label: "RAJOURI GARDEN",
    address:
      "A-2/41, Third Floor Rajouri Garden Near Metro Station Above Reliance Trends New Delhi-110027",
    phone: "+91-8181819449",
    email: "info@uk-international.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.452872097656!2d77.11881242460215!3d28.646155725657273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03ae15c4dbc9%3A0x327cf8cdbfc62ec5!2sUk%20International%20London%20Beauty%20School!5e0!3m2!1sen!2sin!4v1757052449562!5m2!1sen!2sin",
  },
  {
    label: "LAJPAT NAGAR",
    address: "B-6 2nd & 3rd Floor Lajpat Nagar-II NEW DELHI 110024",
    phone: "+91-8181819449",
    email: "info@uk-international.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7007.862154232741!2d77.22788269357908!3d28.57183229999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce37795a7ab19%3A0x3e538a3732564287!2sUK%20International%20London%20Beauty%20School!5e0!3m2!1sen!2sin!4v1757052747598!5m2!1sen!2sin",
  },
  {
    label: "RDC GHAZIABAD",
    address:
      "R1-78, 1st Floor, District Center, Block 1, P & T Colony, Raj Nagar, Ghaziabad, Uttar Pradesh 201017",
    phone: "+91-8181814007",
    email: "info@uk-international.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448054.047230868!2d76.83239828906247!3d28.67701320000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1e982d16ff7%3A0x25911a16b648abbf!2sUK%20International%20London%20Beauty%20School!5e0!3m2!1sen!2sin!4v1757052001977!5m2!1sen!2sin",
  },
  {
    label: "PATNA CAMPUS",
    address:
      "7th floor, SKU Centre, Boring Rd, Anandpuri, Patna, Bihar 800001.",
    phone: "+91-8181814007",
    email: "info@uk-international.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7195.441799564372!2d85.117109!3d25.614189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59a1bd789283%3A0x5ca5c4947050fbd1!2sUK%20International!5e0!3m2!1sen!2sin!4v1756969488761!5m2!1sen!2sin",
  },
];

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [activeMap, setActiveMap] = useState("NOIDA SECTOR 16");

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) setShowScroll(true);
    else if (showScroll && window.pageYOffset <= 400) setShowScroll(false);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <>
      <footer className="bg-[#FDDCEE] text-black py-8 font-sans">
        <div className="container mx-auto px-4 lg:px-12">
          {/* CORPORATE OFFICE Section */}
          <h2 className="text-3xl font-extrabold mb-8 text-[#F8069D] text-center">
            CORPORATE OFFICE
          </h2>
          <div className="mb-8">
            <div key={locations[0].label} className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#F8069D]">
                  {locations[0].label}
                </h3>
                <button
                  onClick={() =>
                    setActiveMap(
                      activeMap === locations[0].label
                        ? null
                        : locations[0].label
                    )
                  }
                  className="bg-[#F8069D] text-white px-3 py-1 rounded text-sm md:px-4 md:py-2 hover:bg-pink-600 transition-colors duration-200"
                >
                  {activeMap === locations[0].label ? "Hide Map" : "View Map"}
                </button>
              </div>
              <div className="space-y-4 text-black">
                {/* Mobile layout: Location first, then phone and email in a row */}
                <div className="md:hidden space-y-4">
                  <p className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-[#F8069D] flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        "A-4, First Floor, Logix Park, Sector 16, Noida, Uttar Pradesh 201301"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F8069D] transition-colors duration-200 text-sm md:text-base"
                    >
                      A-4, First Floor, Logix Park, Sector 16, Noida, Uttar
                      Pradesh 201301
                    </a>
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="flex items-start w-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 text-[#F8069D] flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <a
                        href="tel:+91-8181814007"
                        className="hover:text-[#F8069D] transition-colors duration-200 text-lg md:text-base"
                      >
                        +91-8181814007
                      </a>
                    </p>
                    <p className="flex items-start w-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 text-[#F8069D] flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <a
                        href="tel:+91-8181819449"
                        className="hover:text-[#F8069D] transition-colors duration-200 text-lg md:text-base"
                      >
                        +91-8181819449
                      </a>
                    </p>
                  </div>
                  <p className="flex items-start justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-[#F8069D] flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a
                      href="mailto:info@uk-international.com"
                      className="hover:text-[#F8069D] transition-colors duration-200 text-sm md:text-base"
                    >
                      info@uk-international.com
                    </a>
                  </p>
                </div>
                {/* Desktop layout: Location, phone, and email in one row */}
                <div className="hidden md:flex justify-between items-center">
                  <p className="flex items-start w-1/3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-[#F8069D] flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        "A-4, First Floor, Logix Park, Sector 16, Noida, Uttar Pradesh 201301"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F8069D] transition-colors duration-200 text-sm md:text-base"
                    >
                      A-4, First Floor, Logix Park, Sector 16, Noida, Uttar
                      Pradesh 201301
                    </a>
                  </p>
                  <p className="flex items-start w-1/3 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-[#F8069D] flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a
                      href="tel:+91-8181814007"
                      className="hover:text-[#F8069D] transition-colors duration-200 text-lg md:text-xl"
                    >
                      +91-8181814007
                    </a>
                  </p>
                  <p className="flex items-start w-1/3 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-[#F8069D] flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a
                      href="tel:+91-8181819449"
                      className="hover:text-[#F8069D] transition-colors duration-200 text-lg md:text-xl"
                    >
                      +91-8181819449
                    </a>
                  </p>
                  <p className="flex items-start w-1/3 justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-[#F8069D] flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a
                      href="mailto:info@uk-international.com"
                      className="hover:text-[#F8069D] transition-colors duration-200 text-sm md:text-base"
                    >
                      info@uk-international.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-8 border-t-2 border-[#F8069D]" />

          {/* OUR BRANCHES Section */}
          <div className="relative">
            <h2 className="text-3xl font-extrabold mb-8 text-[#F8069D] text-center">
              OUR BRANCHES
            </h2>
            <div className="relative">
              <div className="grid grid-cols-2 gap-14 md:gap-x-8 lg:gap-x-72">
                {[locations[1], locations[2]].map((loc) => (
                  <div key={loc.label} className="space-y-2 md:space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-base md:text-xl font-bold text-[#F8069D] leading-tight">
                        {loc.label}
                      </h3>
                      <button
                        onClick={() =>
                          setActiveMap(
                            activeMap === loc.label ? null : loc.label
                          )
                        }
                        className="bg-[#F8069D] text-white ml-5 px-3 py-1 rounded text-xs md:text-sm hover:bg-pink-600 transition-colors duration-200"
                      >
                        {activeMap === loc.label ? "Hide Map" : "View Map"}
                      </button>
                    </div>
                    <div className="space-y-2 text-black text-xs md:text-base">
                      <p className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2 text-[#F8069D] flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            loc.address
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#F8069D] transition-colors duration-200"
                        >
                          {loc.address}
                        </a>
                      </p>
                      <p className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2 text-[#F8069D] flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <a
                          href={`tel:${loc.phone}`}
                          className="hover:text-[#F8069D] transition-colors duration-200"
                        >
                          {loc.phone}
                        </a>
                      </p>
                      <p className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2 text-[#F8069D] flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <a
                          href={`mailto:${loc.email}`}
                          className="hover:text-[#F8069D] transition-colors duration-200"
                        >
                          {loc.email}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="my-8 border-t-[1px] border-[#F8069D]" />
              <div className="grid grid-cols-2 gap-14 md:gap-x-8 lg:gap-x-72 mb-8">
                {[locations[3], locations[4]].map((loc) => (
                  <div key={loc.label} className="space-y-2 md:space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-base md:text-xl text-center font-bold text-[#F8069D] leading-tight">
                        {loc.label}
                      </h3>
                      <button
                        onClick={() =>
                          setActiveMap(
                            activeMap === loc.label ? null : loc.label
                          )
                        }
                        className="bg-[#F8069D] text-white ml-5 px-3 py-1 rounded text-xs md:text-sm hover:bg-pink-600 transition-colors duration-200"
                      >
                        {activeMap === loc.label ? "Hide Map" : "View Map"}
                      </button>
                    </div>
                    <div className="space-y-2 text-black text-xs md:text-base">
                      <p className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2 text-[#F8069D] flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            loc.address
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#F8069D] transition-colors duration-200"
                        >
                          {loc.address}
                        </a>
                      </p>
                      <p className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2 text-[#F8069D] flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <a
                          href={`tel:${loc.phone}`}
                          className="hover:text-[#F8069D] transition-colors duration-200"
                        >
                          {loc.phone}
                        </a>
                      </p>
                      <p className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2 text-[#F8069D] flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <a
                          href={`mailto:${loc.email}`}
                          className="hover:text-[#F8069D] transition-colors duration-200"
                        >
                          {loc.email}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#F8069D] transform -translate-x-1/2"></div>
            </div>
          </div>

          {/* Map Display */}
          <div className="w-full mt-8">
            {activeMap && (
              <iframe
                title={`${activeMap} Map`}
                src={locations.find((loc) => loc.label === activeMap)?.mapSrc}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl shadow-2xl w-full h-64 md:h-80"
              ></iframe>
            )}
          </div>
        </div>
      </footer>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            <div className="mb-12 ml-0 lg:ml-28 lg:mb-0 lg:w-1/2 flex justify-start">
              <div>
                <h3 className="text-3xl font-extrabold mb-8 text-[#F8069D]">
                  Useful Links
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  <ul className="space-y-4 text-lg">
                    {[
                      { label: "Home", href: "/" },
                      { label: "About Us", href: "/about-us" },
                      { label: "Courses", href: "/courses" },
                      { label: "Placements", href: "/placements" },
                      { label: "Contact Us", href: "/contact-us" },
                    ].map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          className="border-b-2 border-transparent hover:border-[#F8069D] pb-1 transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-4 text-lg">
                    <li>
                      <Link
                        to="/PrivacyPolicy"
                        className="border-b-2 border-transparent hover:border-[#F8069D] pb-1 transition-colors duration-200 text-left"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/TermsAndConditions"
                        className="border-b-2 border-transparent hover:border-[#F8069D] pb-1 transition-colors duration-200 text-left"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div>
                <h3 className="text-3xl font-extrabold mb-8 text-[#F8069D]">
                  Get In Touch
                </h3>
                <div className="space-y-6 text-lg">
                  <p className="flex items-center hover:text-[#F8069D] transition-colors duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-4 text-[#F8069D] flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <a
                      href="mailto:info@uk-international.com"
                      className="hover:text-[#F8069D] transition-colors duration-200"
                    >
                      info@uk-international.com
                    </a>
                  </p>
                  <p className="flex items-center hover:text-[#F8069D] transition-colors duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-4 text-[#F8069D] flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                      <line x1="2.1" y1="12" x2="21.9" y2="12" />
                    </svg>
                    <a
                      href="https://www.uk-international.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F8069D] transition-colors duration-200"
                    >
                      www.uk-international.com
                    </a>
                  </p>
                  <p className="flex items-center hover:text-[#F8069D] transition-colors duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-4 text-[#F8069D] flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <a
                      href="tel:+918181819449"
                      className="hover:text-[#F8069D] transition-colors duration-200"
                    >
                      +91 8181819449
                    </a>
                  </p>
                  <p className="flex items-center hover:text-[#F8069D] transition-colors duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-4 text-[#F8069D] flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <a
                      href="tel:+918181814007"
                      className="hover:text-[#F8069D] transition-colors duration-200"
                    >
                      +91 8181814007
                    </a>
                  </p>
                  <p className="flex items-start hover:text-[#F8069D] transition-colors duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-4 text-[#F8069D] flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        "A-4, First Floor, logix park, Sector 16, Noida, Uttar Pradesh 201301"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F8069D] transition-colors duration-200"
                    >
                      A-4, First Floor, logix park, Sector 16, Noida, Uttar
                      Pradesh 201301
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-12 border-[#F8069D]" />
          <div className="flex flex-col items-center mt-4 mb-10">
            <h4 className="text-xl font-semibold mb-4 text-[#F8069D]">
              Social Links
            </h4>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.instagram.com/uk_londonbeautyschool/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black-100 text-black-800 shadow-md 
                 hover:bg-[#F8069D] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://www.facebook.com/ukInternationallondonbeautyschool"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black-100 text-black-800 shadow-md 
                 hover:bg-[#F8069D] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebookF size={22} />
              </a>
              <a
                href="https://in.pinterest.com/uklondonbeautyschool/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black-100 text-black-800 shadow-md 
                 hover:bg-[#F8069D] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaPinterestP size={22} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCBr6U1jwAR0KfIaZlhC1PiQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black-100 text-black-800 shadow-md 
                 hover:bg-[#F8069D] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaYoutube size={22} />
              </a>
              <a
                href="https://x.com/uk_beautyschool"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black-100 text-black-800 shadow-md 
                 hover:bg-[#F8069D] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 220.8 289.1 380H175.9L210 208.4 104 116.9l56-0 81.1 76.6L313.1 116z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 mb-8 text-sm text-gray-400">
          © 2025 UK International London Beauty School. All rights reserved.
        </div>
      </div>
      {showScroll && (
        <>
          {/* PC / Large Screen Button */}
          <div className="hidden md:flex fixed bottom-22 right-8 flex-col items-center z-[10001]">
            <span className="mb-1 text-sm font-bold text-[#F8069D] animate-bounce select-none">
              Click to Go Top
            </span>
            <button
              onClick={scrollTop}
              className="bg-[#F8069D] text-white p-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"
              aria-label="Back to top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
          {/* Mobile / Small Screen Button */}
          <div className="flex md:hidden fixed bottom-6 right-4 z-[10001] flex-col items-center">
            <span className="mb-1 text-[10px] font-bold text-black animate-bounce select-none">
              Click to Go Top
            </span>
            <button
              onClick={scrollTop}
              className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
              aria-label="Back to top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#F8069D]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
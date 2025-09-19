import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const courses = ["beauty", "makeup", "hair", "cosmetology", "bvoc"];

  const handleScrollToCourses = () => {
    const coursesSection = document.getElementById("our-courses");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#our-courses");
    }
  };

  const handleDropdownSelect = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const getLinkClasses = (path) => {
    return `text-lg lg:text-xl text-white transition duration-300 ${
      location.pathname === path
        ? "border-b-2 border-[#F8069D] pb-1"
        : "hover:text-[#F8069D] hover:border-b-2 hover:border-[#F8069D] pb-1"
    }`;
  };

  const getCourseLinkClasses = (path) => {
    return `block px-4 py-2 text-white text-base lg:text-lg hover:bg-[#F8069D] hover:text-white transition duration-300 ${
      location.pathname === path
        ? "border-b-2 border-[#F8069D]"
        : "border-b-2 border-transparent"
    }`;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
      <nav className="mx-auto flex items-center justify-between px-4 md:px-8 py-2 h-16 md:h-20">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center"
        >
          <img
            src="/assets/logo_official.webp"
            alt="UK-International Logo"
            className="h-12 md:h-16 lg:h-20 cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6 md:space-x-12 lg:space-x-16 items-center">
          <Link
            to="/"
            className={getLinkClasses("/")}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onMouseEnter={() => setIsDropdownOpen(false)}
          >
            Home
          </Link>

          {/* Courses Dropdown */}
          <div className="relative group">
            <button
              onClick={handleScrollToCourses}
              className={`text-lg lg:text-xl text-white transition duration-300 ${
                location.hash === "#our-courses"
                  ? "border-b-2 border-[#F8069D] pb-1"
                  : "hover:text-[#F8069D]"
              }`}
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              Courses
            </button>

            {isDropdownOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 md:w-56 bg-black border border-[#F8069D] rounded-md shadow-xl overflow-hidden z-30"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <ul className="py-2">
                  {courses.map((item) => (
                    <li key={item}>
                      <Link
                        to={`/${item}`}
                        className={getCourseLinkClasses(`/${item}`)}
                        onClick={handleDropdownSelect}
                      >
                        {item.charAt(0).toUpperCase() +
                          item.slice(1).replace("bvoc", "B.Voc")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={getLinkClasses("/contact")}
            onMouseEnter={() => setIsDropdownOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-3xl focus:outline-none"
          >
            <span className="text-[#F8069D]">
              {isMobileMenuOpen ? "✖" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black flex flex-col items-start p-4 z-40 sm:hidden">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-2 text-white text-lg w-fit ${
                location.pathname === "/" ? "border-b-2 border-[#F8069D]" : ""
              }`}
            >
              Home
            </Link>
            <hr className="w-1/2 my-2 border-[#F8069D]" />

            {/* Courses - Always Expanded in Mobile */}
            <div className="w-full">
              <Link
                to="/#our-courses"
                onClick={() => {
                  handleScrollToCourses();
                  setIsMobileMenuOpen(false);
                }}
                className={`py-2 text-white text-lg w-fit ${
                  location.hash === "#our-courses"
                    ? "border-b-2 border-[#F8069D]"
                    : ""
                }`}
              >
                Courses
              </Link>

              <ul className="pl-4 w-full space-y-1 mt-2">
                {courses.map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`py-1 text-[#F8069D] text-base lg:text-lg w-fit ${
                        location.pathname === `/${item}`
                          ? "border-b-2 border-white"
                          : ""
                      }`}
                    >
                      {item.charAt(0).toUpperCase() +
                        item.slice(1).replace("bvoc", "B.Voc")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="w-1/2 my-2 border-[#F8069D]" />

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-2 text-white text-lg w-fit ${
                location.pathname === "/contact"
                  ? "border-b-2 border-[#F8069D]"
                  : ""
              }`}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

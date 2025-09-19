import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BEAUTY_VIDEO from "/assets/Hero_video.mp4";
import CustomButton from "./CustomButton";
import EnquiryFormPopup from "./EnquiryFormPopup";

function Hero() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    course: "",
  });
  const [errors, setErrors] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupSource, setPopupSource] = useState("");

  const validateName = (name) =>
    !name.trim()
      ? "Name is required"
      : /\d/.test(name)
      ? "Name cannot contain numbers"
      : "";
  const validatePhone = (phone) => {
    if (!phone.trim()) return "Phone number is required";
    return /^\+?\d{10}$/.test(phone.replace(/\s+/g, ""))
      ? ""
      : "Enter a valid phone number (+91 followed by 10 digits)";
  };

  const validateForm = () => {
    const newErrors = {};
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    if (nameError) newErrors.name = nameError;
    if (phoneError) newErrors.phone = phoneError;

    const filledFields = Object.values(formData).filter((v) => v.trim()).length;
    if (filledFields < 3) newErrors.general = "Please fill at least 3 fields";
    if (!formData.city.trim() && !formData.course.trim())
      newErrors.cityOrCourse = "Please fill either City or Course";

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "name" ? value.replace(/\d/g, "") : value,
    }));
    if (errors[name])
      setErrors((prev) => ({
        ...prev,
        [name]: "",
        general: "",
        cityOrCourse: "",
      }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    let phone = formData.phone.trim();
    if (!phone.startsWith("+91")) {
      phone = `+91${phone.replace(/^\+?/, "").slice(0, 10)}`;
    }

    try {
      const response = await fetch(
        `https://uk-international-backend.onrender.com/api/user/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, source: "hero_form" }),
        }
      );
      // WhatsApp section can be uncommented similarly if needed
    } catch (err) {
      setErrors({ general: "Failed to submit. Please try again." });
    }
  };

  const openPopup = (source) => {
    setPopupSource(source);
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupSource("");
  };

  useEffect(() => {
    document
      .querySelectorAll("form")
      .forEach((f) => f.setAttribute("autocomplete", "off"));
    document.querySelectorAll("input").forEach((i) => {
      i.setAttribute("autocomplete", "new-password");
      i.setAttribute("data-form-type", "other");
    });
  }, []);
  return (
    <div className="relative lg:py-6 mt-0 w-full overflow-hidden">
      <div className="absolute inset-0 w-full sm:h-full overflow-hidden">
        <video
          className="w-full h-200 object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={BEAUTY_VIDEO} type="video/mp4" />
          <div className="flex items-center justify-center h-full bg-gray-900 text-white text-lg">
            Your browser does not support the video tag.
          </div>
        </video>
      </div>

      <div className="relative z-10 w-[90%] max-w-12xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 gap-12">
        <div className="hidden lg:flex flex-1 max-w-lg">
          <div className="backdrop-blur-0 bg-gray-900/40 border border-white/20 rounded-2xl mb-2 mt-20 p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-gray-900/70 hover:border-white/30">
            <h1 className="font-playfair text-2xl sm:text-5xl lg:text-3xl font-extrabold text-white mb-4 leading-tight tracking-tight transition-all duration-300 hover:text-gray-100">
              <span className="text-[#F8069D]">Shape Your Future with</span>
              <br />
              <span className="text-white">Our Beauty Course</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed transition-all duration-300 hover:text-white">
              Master professional beauty techniques, makeup, and skincare with
              expert trainers at India's leading makeup academy.
            </p>
            <div className="mt-8">
              <CustomButton onClick={() => openPopup("hero_admission_button")}>
                ADMISSION OPEN - Secure Your Seat Today
              </CustomButton>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-30 mb-3 max-w-lg w-full">
          <div className="backdrop-blur-0 bg-gray-900/40 border border-white/20 rounded-2xl p-2 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-1 pt-0 text-center">
              Get In Touch
            </h2>
            <p className="text-gray-200 text-center mb-2">
              Fill out the form below and we'll get back to you
            </p>

            {(errors.general || errors.cityOrCourse) && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-200 text-sm">
                  {errors.general || errors.cityOrCourse}
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-3"
              autoComplete="new-password"
              data-form-type="other"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 ${
                    errors.name ? "border-red-500/50" : "border-white/20"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 ${
                    errors.phone ? "border-red-500/50" : "border-white/20"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter your city"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="course"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Course
                </label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  placeholder="e.g., Cosmetology, Makeup"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="flex justify-center">
                <CustomButton type="submit">Submit Enquiry</CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* {isPopupOpen && <EnquiryFormPopup closePopup={closePopup} source={popupSource} />}/ */}
    </div>
  );
}

export default Hero;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";

const EnquiryForm = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isMessageBoxVisible, setIsMessageBoxVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    let phone = form.phone.value.trim();
    const course = form.course.value.trim();
    const city = form.city.value.trim();

    // Format phone number
    if (!phone.startsWith("+91")) {
      phone = `+91${phone.replace(/^\+?/, "").slice(0, 10)}`;
    }

    let valid = true;
    let errorMessage = "";

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      errorMessage = "Name should only contain letters and spaces.";
      valid = false;
    } else if (!/^\+91\d{10}$/.test(phone)) {
      errorMessage = "Phone number must be +91 followed by 10 digits.";
      valid = false;
    } else if (course === "" && city === "") {
      errorMessage =
        "Please fill either 'Course' or 'City' field along with Name & Phone.";
      valid = false;
    }

    if (valid) {
      try {
        const response = await fetch(
          `https://uk-international-backend.onrender.com/api/user/register`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone, city, course, source: "bottom_form" }),
          }
        );

        if (response.ok) {
          setMessage("Thank you! Your enquiry has been submitted.");
          setMessageType("success");
          setIsMessageBoxVisible(true);

          // WhatsApp trigger
          try {
            const whatsappRes = await fetch(
              "https://uk-international-backend.onrender.com/api/whatsapp/send-message",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phoneNumber: phone }),
              }
            );
            const whatsappData = await whatsappRes.json();

            if (!whatsappRes.ok || !whatsappData.success) {
              setMessage(
                `Enquiry submitted, but failed to send WhatsApp message: ${
                  whatsappData.message || "Unknown error"
                }`
              );
              setMessageType("error");
            }
          } catch {
            setMessage(
              "Enquiry submitted, but network error prevented WhatsApp message."
            );
            setMessageType("error");
          }

          setTimeout(() => navigate("/thanku"), 2000);
        } else {
          throw new Error("Submission failed");
        }
      } catch {
        setMessage("Failed to submit. Please try again.");
        setMessageType("error");
        setIsMessageBoxVisible(true);
      }
    } else {
      setMessage(errorMessage);
      setMessageType("error");
      setIsMessageBoxVisible(true);
    }
  };

  const closeMessageBox = () => setIsMessageBoxVisible(false);

  return (
    <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-0">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl bg-white/90 backdrop-blur-md border border-[#F8069D]/30"
        autoComplete="off"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2">
          <span className="text-[#F8069D]">Enquiry</span>{" "}
          <span className="text-black">Form</span>
        </h2>

        <label className="block mb-1 text-base sm:text-lg font-medium text-black">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full mb-2 px-4 py-3 border-2 border-[#F8069D]/50 rounded-lg bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F8069D] transition"
          autoComplete="off"
          spellCheck="false"
        />

        <label className="block mb-1 text-base sm:text-lg font-medium text-black">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full mb-2 px-4 py-3 border-2 border-[#F8069D]/50 rounded-lg bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F8069D] transition"
          autoComplete="off"
          spellCheck="false"
        />

        <label className="block mb-1 text-base sm:text-lg font-medium text-black">
          Enter City
        </label>
        <input
          type="text"
          name="city"
          placeholder="Your City"
          className="w-full mb-2 px-4 py-3 border-2 border-[#F8069D]/50 rounded-lg bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F8069D] transition"
          autoComplete="off"
          spellCheck="false"
        />

        <label className="block mb-1 text-base sm:text-lg font-medium text-black">
          Enter Course
        </label>
        <input
          type="text"
          name="course"
          placeholder="e.g., Cosmetology, Makeup"
          className="w-full mb-8 px-4 py-3 border-2 border-[#F8069D]/50 rounded-lg bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F8069D] transition"
          autoComplete="off"
          spellCheck="false"
        />

        <CustomButton type="submit" className="w-full py-3 px-6">
          Submit Enquiry
        </CustomButton>

        {isMessageBoxVisible && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50">
            <div className="bg-white text-black p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md text-center">
              <p
                className={`text-lg sm:text-xl font-semibold ${
                  messageType === "error" ? "text-red-600" : "text-green-600"
                }`}
              >
                {message}
              </p>
              <CustomButton
                onClick={closeMessageBox}
                className="mt-6 px-6 sm:px-8 py-3"
              >
                Close
              </CustomButton>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default EnquiryForm;

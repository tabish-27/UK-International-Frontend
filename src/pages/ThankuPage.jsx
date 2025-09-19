import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ThankuPage = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 50);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate("/");
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FDDCEE] to-white p-4">
      <div
        className={`w-full max-w-md mx-auto shadow-xl bg-white rounded-2xl border border-[#FDDCEE] transition-all duration-700 ease-in-out ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <div className="p-8 text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-[#FDDCEE] rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-[#F8069D]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* Message */}
          <h1 className="text-3xl font-bold text-black mb-4">
            Thank You!
            <span className="block w-20 h-1 bg-[#F8069D] mx-auto mt-2 rounded"></span>
          </h1>
          <p className="text-gray-700 mb-2 text-lg">
            Your inquiry has been submitted successfully.
          </p>
          <p className="text-gray-700 mb-2 text-sm">
            We'll get back to you within 24 hours.
          </p>
          <p className="text-gray-500 mb-8 text-sm">
            Redirecting to homepage in {countdown} seconds...
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/")}
            className="w-full bg-[#F8069D] hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Go Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankuPage;

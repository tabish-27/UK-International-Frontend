import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDDCEE] to-white text-gray-800 font-sans">
      {/* Heading */}
      <div className="pt-24 pb-8 text-center">
        <h1 className="text-4xl font-bold text-black">Privacy Policy</h1>
        <div className="w-24 h-1 bg-[#F8069D] mx-auto mt-2 rounded"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <p className="text-lg mb-6">
          At UK International London Beauty School, we understand the priorities
          of privacy and are committed to protecting your personal details. In
          this privacy policy, we highlight the outlines of our privacy policy
          which include types of information we collect and how we use these. If
          you have more questions about privacy and details, don’t hesitate to
          connect with our team.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Information We Collect
        </h2>
        <p className="text-lg mb-4">
          We collect your personal details/information through enrolling courses
          form, subscribed newsletters, and contact us page. We may provide
          registration options using our existing social media such as
          Instagram, Facebook, or other social media accounts, so we collect
          your information from there as well. The personal information we
          collect may include the below-mentioned details:
        </p>
        <ul className="list-disc ml-6 mb-4 text-lg">
          <li>Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Address</li>
          <li>Payment Information</li>
        </ul>
        <p className="text-lg mb-6">
          We are committed to securing your private details; therefore, we don’t
          process sensitive information. If it is necessary, your consent will
          be obtained or as otherwise permitted by applicable rule or law.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          How Do We Use Information?
        </h2>
        <p className="text-lg mb-4">We use your information for the following reasons:</p>
        <ul className="list-disc ml-6 mb-4 text-lg">
          <li>For processing your course enrollment and payments.</li>
          <li>
            For communicating with you regarding your course details and
            services.
          </li>
          <li>
            For sending and updating you regarding our latest updates,
            newsletters, and promotional materials.
          </li>
          <li>To improve our service, platform, and user experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Information Sharing
        </h2>
        <p className="text-lg mb-6">
          We do not share, sell, trade, or transfer your personal information to
          other parties except to trusted parties who help assist in operating
          and managing our platform. These information transfers are based on
          contracts, which are designed to help safeguard your personal details,
          meaning they cannot use or do anything with this information unless we
          have instructed them to do so. They also have no power to share your
          information with other organizations apart from us. Due to the
          contract, they are committed to protecting the information they hold
          on our behalf.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Data Collection & Security
        </h2>
        <p className="text-lg mb-6">
          We implement a wide range of security measures to manage the safety of
          your personal data. Your information is stored on secure networks and
          is only accessible by limited persons who have the authority to access
          this system.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Cookies
        </h2>
        <p className="text-lg mb-6">
          We use cookies to enhance user experience and store information about
          visitors’ preferences. Cookies are small files from a site that save
          on your device to remember information about you, such as login
          details, site preferences, and history.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Third Party Links
        </h2>
        <p className="text-lg mb-6">
          Occasionally, due to certain reasons, we allow third-party products or
          service links on our website. These third parties have their own
          platforms and separate privacy policies. If you visit their products
          and services, we don’t have responsibility or liability for these
          linked sites.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Your Consent
        </h2>
        <p className="text-lg mb-6">
          By using or visiting our website, you hereby consent to our privacy
          policy and agree with the terms.
        </p>

        
      </div>

    </div>
  );
};

export default PrivacyPolicy;

import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import EnquiryFormSection from "./EnquiryFormSection";
import Awards from "./Awards";
import GoogleRatings from "./GoogleRatings";
import Banner from "./Banner";
import Placements from "./Placements";
import Partners from "./Partners";
import TwoWayCTA from "./TwoWayCTA";
import FAQ from "./FAQ";
import StickyEnquiryButton from "./StickyEnquiryButton";

const Layout = ({ children, adminOnly = false }) => {
  const location = useLocation();
  const enquiryRef = useRef(null);

  // Pages jahan extra sections dikhne chahiye
  const allowedPages = ["/", "/hair", "/beauty", "/cosmetology", "/makeup", "/bvoc"];
  const showExtras = allowedPages.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar har page pe aayega */}
      <Navbar />

      {/* Banner har page pe aayega except home & admin */}
      {!adminOnly && location.pathname !== "/" && <Banner />}

      {children}

      {/* Normal Pages Extras */}
      {!adminOnly && showExtras && (
        <>
          <TwoWayCTA
            text="Turn Passion Into Profession"
            buttonText="Get Started"
            source={`${location.pathname}_cta_get_started`}
          />
          <Partners />
          <Awards />
          <TwoWayCTA
            text="Kickstart Your Beauty Career Today"
            buttonText="Schedule your free trial now"
            source={`${location.pathname}_cta_download_brochure`}
          />
          <FAQ />
          <Placements />
          <TwoWayCTA
            text="Start your journey now"
            buttonText="Book A FREE Trial Now"
            source={`${location.pathname}_cta_free_trial`}
          />
          <GoogleRatings />
        </>
      )}

      {/* Enquiry, Footer, Sticky hide on admin */}
      {!adminOnly && (
        <>
          <div ref={enquiryRef} id="enquiry">
            <EnquiryFormSection currentPage={location.pathname} />
          </div>
          <Footer />
          <StickyEnquiryButton />
        </>
      )}
    </div>
  );
};

export default Layout;

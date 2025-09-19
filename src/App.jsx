import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Import Components
import Layout from "./components/Layout";
import LiveChat from "./components/LiveChat";

// Import Pages
import Home from "./pages/Home";
import BeautyPage from "./pages/BeautyPage";
import HairPage from "./pages/HairPage";
import MakeupPage from "./pages/MakeupPage";
import CosmetologyPage from "./pages/CosmetologyPage";
import BvocPage from "./pages/BvocPage";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./components/AboutUs";
import Awards from "./components/Awards";
import Placements from "./components/Placements";
import ThankuPage from "./pages/ThankuPage"; 
import AdminPanel from "./pages/AdminPanel";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

// 👇 ScrollToTop
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* ✅ Normal pages (with full Layout) */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/awards" element={<Awards />} />
                <Route path="/placements" element={<Placements />} />
                <Route path="/beauty" element={<BeautyPage />} />
                <Route path="/hair" element={<HairPage />} />
                <Route path="/makeup" element={<MakeupPage />} />
                <Route path="/cosmetology" element={<CosmetologyPage />} />
                <Route path="/bvoc" element={<BvocPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/thanku" element={<ThankuPage />} />
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
              </Routes>

              {/* 👈 Live Chat har normal page par */}
              <LiveChat />
            </Layout>
          }
        />

        {/* ✅ Admin page (special layout with only Navbar) */}
        <Route
          path="/adminpanel"
          element={<Layout adminOnly={true}><AdminPanel /></Layout>}
        />
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutus from "./components/About";
import Services from "./components/Services";
import IndustriesWeServe from "./components/IndustriesWeServe";
import TeamSection from "./components/TeamSection";
import Testimonials from "./components/Testimonials";
import ChatbotSystem from "./components/ChatbotSystem";
import Footer from "./components/Footer";

import AboutUs from "./pages/AboutUs";
import OurService from "./pages/OurService";
import Portfolio from "./pages/OurPortfolioItems";
import OurProducts from "./pages/OurProducts";
import OurClients from "./pages/OurClients";
import Contact from "./pages/Contact";
import ScrollPanel from "./components/ScrollPanel";
import Demo from "./pages/Demo";
import AppDevlopPage from "./pages/servicesPages/AppDevlopPage";
import SoftDevlopPage from "./pages/servicesPages/SoftDevlopPage";
import WebDevlopPage from "./pages/servicesPages/WebDevlopPage";
import OutConsultingPage from "./pages/servicesPages/Out&ConsultingPage";
import ItBusinessPage from "./pages/servicesPages/ItBusinessPage";
import ERPCRMPage from "./pages/servicesPages/ERPCRMPage";
import SeoPage from "./pages/servicesPages/SeoPage";
import SmmPage from "./pages/servicesPages/SmmPage";
import HeroSection from "./pages/HeroSection";
import TermsPage from "./pages/TermsPage";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Hero />
      <Services />
      <IndustriesWeServe />
      <Aboutus />
      <TeamSection />
      <Testimonials />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollPanel />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/service" element={<OurService />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/product" element={<OurProducts />} />
          <Route path="/client" element={<OurClients />} />
          <Route path="/contact" element={<Contact />} />
        
          <Route path="/TermsPage" element={<TermsPage />} />

          <Route path="/servicesPages/appDev" element={<AppDevlopPage />} />
          <Route
            path="/servicesPages/SoftDevPage"
            element={<SoftDevlopPage />}
          />
          <Route path="/servicesPages/WebDevPage" element={<WebDevlopPage />} />
          <Route
            path="/servicesPages/OutConsultPage"
            element={<OutConsultingPage />}
          />
          <Route
            path="/servicesPages/ITBusinessPage"
            element={<ItBusinessPage />}
          />
          <Route path="/servicesPages/ERPCrmPage" element={<ERPCRMPage />} />
          <Route path="/servicesPages/SeoPage" element={<SeoPage />} />
          <Route path="/servicesPages/SmmPage" element={<SmmPage />} />
        </Routes>
      </main>
      <ChatbotSystem />
      <Footer />
    </Router>
  );
};

export default App;

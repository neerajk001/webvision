import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Aboutus from './components/About';
import Services from './components/Services';
import IndustriesWeServe from './components/IndustriesWeServe';
import TeamSection from './components/TeamSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

import AboutUs from './pages/AboutUs';
import OurService from './pages/OurService';
import Portfolio from './pages/OurPortfolioItems';
import OurProducts from './pages/OurProducts';
import OurClients from './pages/OurClients';
import Contact from './pages/Contact';
import ScrollPanel from './components/ScrollPanel';
import Demo from './pages/Demo';

const Home = () => {
  return (
    <>
      <Hero />
      <Aboutus />
      <Services />
      <IndustriesWeServe />
      <TeamSection />
      <Testimonials />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollPanel/>
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
          <Route path="/demo" element={<Demo/>} />

        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

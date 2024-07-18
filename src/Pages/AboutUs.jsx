import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../Sections/Home/Hero";
import VideoSection from "../Sections/Home/VideoSection";
import BrandPhilosophy from "../Sections/Home/BrandPhilosophy";
import Services from "../Sections/Home/Services";
import Works from "../Sections/Home/Works";
import Clients from "../Sections/Home/Clients";
import Footer from "../Sections/Footer";
import Header from "../Sections/Header";
import Breaker1 from "../Sections/Breaker1/Breaker1";
const AboutPage = () => {
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    if (link.startsWith("http://") || link.startsWith("https://")) {
      // External link
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      // Internal link
      navigate(link);
    }
  };
  return (
    <div className="min-h-screen">
      {/*  Site header */}
      <Header />
      <>
        {/* <Header /> */}
        <Hero handleNavigation={handleNavigate}>
          <VideoSection />
        </Hero>
        <BrandPhilosophy />
        <Services />
        <Breaker1 handleNavigation={handleNavigate}></Breaker1>
        <Clients />
        <Breaker1 handleNavigation={handleNavigate}></Breaker1>
        <Works />
        <div className="my-40" />

        <Footer />
      </>
    </div>
  );
};

export default AboutPage;

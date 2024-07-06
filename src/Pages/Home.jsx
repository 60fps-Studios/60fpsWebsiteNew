import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../Sections/Home/Hero";
import VideoSection from "../Sections/Home/VideoSection";
import BrandPhilosophy from "../Sections/Home/BrandPhilosophy";
import Services from "../Sections/Home/Services";
import Works from "../Sections/Home/Works";
import Clients from "../Sections/Home/Clients";
import Footer from "../Sections/Footer";
const Home = () => {
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
    <>
      <Hero handleNavigation={handleNavigate}>
        <VideoSection />
      </Hero>
      <BrandPhilosophy />
      <Services />
      <Clients />
      <Works />
      {/*<Footer /> */}
    </>
  );
};

export default Home;

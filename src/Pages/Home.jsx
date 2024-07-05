import React from "react";
import Hero from "../Sections/Home/Hero";
import VideoSection from "../Sections/Home/VideoSection";
import BrandPhilosophy from "../Sections/Home/BrandPhilosophy";
import Services from "../Sections/Home/Services";
import Works from "../Sections/Home/Works";
import Clients from "../Sections/Home/Clients";
import Footer from "../Sections/Footer";
const Home = () => {
  const handleNewProjectClick = () => {
    console.log("New Project Button Clicked");
  };
  return (
    <>
      <Hero handleNavigation={handleNewProjectClick}>
        <VideoSection />
      </Hero>
      <BrandPhilosophy />
      <Services />
      {/* <Works />*/}
      <Clients />
      {/*<Footer /> */}
    </>
  );
};

export default Home;

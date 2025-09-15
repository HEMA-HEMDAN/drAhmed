import React from "react";
import WorkoutGallery from "../components/WorkoutGallery";
import Hero from "../components/Hero";
import Trainer from "../components/Trainer";
import Contact from "../components/Contact";
import Programs from "../components/Programs";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Calculator from "../components/Calculator";
const Home = () => {
  document.title = "Home";
  return (
    <>
      <Hero />
      <Trainer />
      <Programs />
      <Testimonials />
      <Pricing />
      <WorkoutGallery />
      <Calculator />
      <Contact />
    </>
  );
};

export default Home;

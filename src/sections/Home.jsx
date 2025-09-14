import React from "react";
import WorkoutGallery from "../components/WorkoutGallery";
import Hero from "../components/Hero";
import Trainer from "../components/Trainer";
import Contact from "../components/Contact";
import Programs from "../components/Programs";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
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
      <Contact />
    </>
  );
};

export default Home;

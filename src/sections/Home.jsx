import React from "react";
import WorkoutGallery from "../components/WorkoutGallery";
import Hero from "../components/Hero";
import Trainer from "../components/Trainer";
import Contact from "../components/Contact";
import Programs from "../components/Programs";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Calculator from "../components/Calculator";
import GymRenderer from "../components/models/GymRenderer";
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
      <GymRenderer />

      <Contact />
    </>
  );
};

export default Home;

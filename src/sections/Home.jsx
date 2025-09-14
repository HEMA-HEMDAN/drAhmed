import React from "react";
import WorkoutGallery from "../components/WorkoutGallery";
import Hero from "../components/Hero";
import Trainer from "../components/Trainer";
import Contact from "../components/Contact";
import Programs from "../components/Programs";
const Home = () => {
  document.title = "Home";
  return (
    <>
      <Hero />
      <Trainer />
      <Programs />
      <WorkoutGallery />
      <Contact />
    </>
  );
};

export default Home;

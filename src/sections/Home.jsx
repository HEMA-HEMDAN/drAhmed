import React from "react";
import WorkoutGallery from "../components/WorkoutGallery";
import Hero from "../components/Hero";
import Trainer from "../components/Trainer";
import Contact from "../components/Contact";
const Home = () => {
  document.title = "Home";
  return (
    <>
      <Hero />
      <Trainer />
      <WorkoutGallery />
      <Contact />
    </>
  );
};

export default Home;

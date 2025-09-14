import React, { useState, useEffect } from "react";
import { Gallerypics } from "../consts/index.js";
import {
  SUBHEADING,
  CLOSE_BUTTON,
  ALT_TEXT,
  MODAL_ALT_TEXT,
  HEADING,
} from "../consts/index.js";
const WorkoutGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedImg ? "hidden" : "auto";
  }, [selectedImg]);

  return (
<<<<<<< HEAD
    <section className="px-2 py-10 md:px-16 md:py-28">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#d8d8d8] tracking-wide"
          style={{ fontFamily: "Hahmlet" }}
        >
          WORKOUT GALLERY
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl text-[#d8d8d8] mt-2"
          style={{ fontFamily: "Heebo" }}
        >
          Explore the dedication and results of our clients.
=======
    <section
      className="min-h-screen px-2 py-10 md:px-16 md:py-28 bg-light dark:bg-dark border-b-2 border-dark/10 dark:border-light/10"
      id="workouts"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide font-hahmlet text-dark dark:text-light">
          {HEADING}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-2 font-heebo text-dark/70 dark:text-light/70">
          {SUBHEADING}
>>>>>>> 587cd8d210a7a1c62a5d2633c1fe138b1ca8318d
        </p>
      </div>

      {/* Responsive Grid */}
<<<<<<< HEAD
      <div className="grid grid-cols-2  md:grid-cols-3  gap-4 md:gap-6 px-2 sm:px-6 md:px-12">
        {Gallerypics.map((pic) => (
          <div
            key={pic.id}
            className="aspect-square w-full overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
=======
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-6 md:px-12">
        {Gallerypics.map((pic) => (
          <div
            key={pic.id}
            className="aspect-square w-full overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelectedImg(pic.img)}
>>>>>>> 587cd8d210a7a1c62a5d2633c1fe138b1ca8318d
          >
            <img
              src={pic.img}
              alt={pic.title || ALT_TEXT}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)} // close on background click
        >
          <div
            className="relative max-w-4xl max-h-[80vh] animate-fadeIn"
            onClick={(e) => e.stopPropagation()} // prevent closing on image click
          >
            <img
              src={selectedImg}
              alt={MODAL_ALT_TEXT}
              className="rounded-lg shadow-2xl max-h-[80vh] object-contain"
            />
            {/* Close button */}
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/50 rounded-full px-2 hover:bg-black/70 transition"
            >
              {CLOSE_BUTTON}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkoutGallery;

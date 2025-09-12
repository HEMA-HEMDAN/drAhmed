import React from "react";
import Gallerypics from "../consts/Gallerypics";

const WorkoutGallery = () => {
  return (
    <section className="px-2 py-10 md:px-16 md:py-28 bg-light dark:bg-dark">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide font-hahmlet text-dark dark:text-light">
          WORKOUT GALLERY
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-2 font-heebo text-dark/70 dark:text-light/70">
          Explore the dedication and results of our clients.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-6 md:px-12">
        {Gallerypics.map((pic) => (
          <div
            key={pic.id}
            className="aspect-square w-full overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img
              src={pic.img}
              alt={pic.title || "Workout image"}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkoutGallery;

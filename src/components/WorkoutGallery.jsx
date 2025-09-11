import React from "react";
import Gallerypics from "../consts/Gallerypics";

const WorkoutGallery = () => {
  return (
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
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2  md:grid-cols-3  gap-3 sm:gap-4 md:gap-6 px-2 sm:px-6 md:px-12">
        {Gallerypics.map((pic) => (
          <div
            key={pic.id}
            className="aspect-square w-full overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={pic.img}
              alt={pic.title}
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

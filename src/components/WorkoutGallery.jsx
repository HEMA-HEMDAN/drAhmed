import React from "react";
import Gallerypics from "../consts/Gallerypics";

const WorkoutGallery = () => {
  return (
    <section className="px-2 py-6  md:px-16 md:py-28">
      <div className="text-center mb-10">
        <h1
          className="text-6xl  font-bold text-[#d8d8d8]  tracking-wide"
          style={{ fontFamily: "Hahmlet" }}
        >
          WORKOUT GALLERY
        </h1>
        <p
          className="text-xl text-[#d8d8d8] mt-2"
          style={{ fontFamily: "Heebo" }}
        >
          Explore the dedication and results of our clients.
        </p>
      </div>
        {/* hi */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-12 md:gap-8">
        {Gallerypics.map((pic) => (
          <div
            key={pic.id}
            className="aspect-square w-full overflow-hidden rounded-lg shadow-md hover:scale-105 transform transition duration-300"
          >
            <img
              src={pic.img}
              alt={pic.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkoutGallery;

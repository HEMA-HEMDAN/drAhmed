import React from "react";
import { PROGRAMS_SECTION } from "../consts/index.js";

const Programs = () => {
  return (
    <section
      id="programs"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-dark/80 text-light"
      style={{
        backgroundImage: "url('/assets/gym-bg.png')", // replace with your gym image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
          {PROGRAMS_SECTION.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {PROGRAMS_SECTION.items.map((item, index) => (
            <div
              key={index}
              className="bg-black/40 p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <span className="text-4xl mb-4">{item.icon}</span>
              <h3 className="text-lg sm:text-xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-light/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

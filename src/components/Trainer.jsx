import React from "react";
import {
  TITLE,
  DESCRIPTION,
  BUTTON_TEXT,
  IMAGE_ALT,
  IMAGE_SRC,
} from "../consts/index.js";
const TrainerProfile = () => {
  const handleScroll = () => {
    const element = document.getElementById("workouts");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="trainer"
      className="flex min-h-screen flex-col-reverse items-center justify-center text-dark bg-light dark:text-light dark:bg-dark lg:flex-row lg:gap-12 lg:p-16 border-b-2 border-dark/10 dark:border-light/10"
    >
      {/* Text Content */}
      <div className="mt-8 flex flex-col items-center text-center lg:mt-0 lg:w-1/2">
        <h2
          className="
            mb-6 font-serif font-bold uppercase leading-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          "
        >
          {TITLE}
        </h2>
        <p
          className="
            max-w-md text-base sm:text-lg md:text-xl text-dark/85 dark:text-light/85
            leading-relaxed mb-8
          "
        >
          {DESCRIPTION}
        </p>
        <button
          className="
             inline-block
              px-5 sm:px-6
              py-2.5 sm:py-3
              rounded-full
              bg-gradient-to-r
              from-[#3EC163]/50 via-[#3EC163] to-[#3EC163]/50
              hover:bg-gradient-to-br
              hover:from-[#3EC163] hover:via-[#3EC163] hover:to-[#3EC163]/70
              focus:outline-none
              focus:ring-4
              focus:ring-green-300/40
              transition
              text-black
              font-medium
              shadow-md
              text-sm sm:text-base md:text-lg
            "
          onClick={handleScroll}
        >
          {BUTTON_TEXT}
        </button>
      </div>

      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl shadow-2xl m-4 lg:w-1/3">
        <img
          src={IMAGE_SRC}
          alt={IMAGE_ALT}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default TrainerProfile;

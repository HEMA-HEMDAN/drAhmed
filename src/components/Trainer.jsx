import React from "react";

const TrainerProfile = () => {
  return (
    <section className="flex  flex-col-reverse items-center justify-center text-dark bg-light dark:text-light dark:bg-dark lg:flex-row lg:gap-12 lg:p-16">
      {/* Text Content */}
      <div className="mt-8 flex flex-col items-center text-center lg:mt-0 lg:w-1/2 ">
        <h2
          className="
            mb-6 font-serif font-bold uppercase leading-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          "
        >
          Meet Your Trainer
        </h2>
        <p
          className="
            max-w-md text-base sm:text-lg md:text-xl text-dark/85 dark:text-light/85
          "
        >
          I'm Ahmed, a certified personal trainer with over seven years of
          experience. My mission is to empower you with effective workouts,
          nutritional guidance, and unwavering motivation.
        </p>
      </div>

      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl shadow-2xl m-4  lg:w-1/3">
        <img
          src="/assets/ahmed.jpg" // Replace with actual trainer image
          alt="Ahmed, Personal Trainer"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default TrainerProfile;

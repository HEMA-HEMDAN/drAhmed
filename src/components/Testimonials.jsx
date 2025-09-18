import { useState, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { TEXTS } from "../consts";

const Testimonials = () => {
  const { language } = useLanguage();
  const texts = TEXTS[language];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const scrollContainerRef = useRef(null);

  const nextTestimonial = () => {
    const newIndex =
      currentTestimonial === texts.testimonialsData.length - 1
        ? 0
        : currentTestimonial + 1;
    setCurrentTestimonial(newIndex);

    // Smooth scroll on mobile
    if (scrollContainerRef.current) {
      const scrollLeft = newIndex * window.innerWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  const prevTestimonial = () => {
    const newIndex =
      currentTestimonial === 0
        ? texts.testimonialsData.length - 1
        : currentTestimonial - 1;
    setCurrentTestimonial(newIndex);

    // Smooth scroll on mobile
    if (scrollContainerRef.current) {
      const scrollLeft = newIndex * window.innerWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const currentData = texts.testimonialsData[currentTestimonial];

  return (
    <section
      id="testimonials"
      className="reveal-up py-20 px-4 relative overflow-hidden border-b-2 border-dark/10 dark:border-light/10 animate-[translateY_3s_linear_infinite]
"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-dark dark:border-light rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-dark dark:border-light rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-dark dark:border-light rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-dark dark:border-light rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Logo Section */}
        <div className="text-center ">
          <div className="inline-block">
            <img
              src="/assets/logo-light.png"
              alt="AG DR. AHMED GAD"
              className="h-20 md:h-30 w-auto  mb-4 block dark:hidden"
              loading="lazy"
            />
            <img
              src="/assets/logo-dark.png"
              alt="AG DR. AHMED GAD"
              className="h-20 md:h-30 w-auto  mb-4 hidden dark:block"
              loading="lazy"
            />
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevTestimonial}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-gray-900 dark:bg-light hover:bg-gray-800 dark:hover:bg-light/80 rounded-lg items-center justify-center transition-all duration-200 z-20 shadow-lg"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-light dark:text-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-gray-900 dark:bg-light hover:bg-gray-800 dark:hover:bg-light/80 rounded-lg items-center justify-center transition-all duration-200 z-20 shadow-lg"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-light dark:text-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Mobile Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="md:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          >
            <div
              className="flex space-x-4 px-4 py-8 items-center justify-center"
              style={{ width: `${texts.testimonialsData.length * 100}vw` }}
            >
              {texts.testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-screen snap-center text-center px-6 py-8 items-center justify-center"
                >
                  {/* Quote */}
                  <blockquote className="text-base font-serif leading-relaxed mb-8 text-dark dark:text-light">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col items-center">
                    {/* Author Initial Circle */}
                    <div className="w-12 h-12 bg-gray-900 dark:bg-light rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <span className="text-lg font-bold text-light dark:text-dark">
                        {testimonial.initial}
                      </span>
                    </div>

                    {/* Author Name */}
                    <h4 className="text-lg font-medium text-gray-900 dark:text-light mb-1">
                      {testimonial.author}
                    </h4>

                    {/* Author Role */}
                    <p className="text-gray-900/70 dark:text-light/70 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="md:hidden flex justify-center space-x-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-gray-900 dark:bg-light hover:bg-gray-800 dark:hover:bg-light/80 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 text-light dark:text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-gray-900 dark:bg-light hover:bg-gray-800 dark:hover:bg-light/80 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 text-light dark:text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Testimonial Card */}
          <div className="hidden md:block text-center px-16 py-8">
            {/* Quote */}
            <blockquote className="text-lg md:text-2xl lg:text-3xl font-serif leading-relaxed mb-12 max-w-4xl mx-auto text-gray-900 dark:text-light">
              "{currentData.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              {/* Author Initial Circle */}
              <div className="w-16 h-16 bg-gray-900 dark:bg-light rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl font-bold text-light dark:text-dark">
                  {currentData.initial}
                </span>
              </div>

              {/* Author Name */}
              <h4 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-light mb-2">
                {currentData.author}
              </h4>

              {/* Author Role */}
              <p className="text-gray-900/70 dark:text-light/70 text-sm md:text-base">
                {currentData.role}
              </p>
            </div>
          </div>
        </div>

        {/* Pagination Dots - Hidden on mobile */}
        <div className="hidden md:flex justify-center space-x-2 mt-8">
          {texts.testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentTestimonial
                  ? "bg-gray-900 dark:bg-light scale-110"
                  : "bg-dark/30 dark:bg-light/30 hover:bg-dark/50 dark:hover:bg-light/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

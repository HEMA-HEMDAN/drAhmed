import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../contexts/LanguageContext";
import { TEXTS } from "../consts/index.js";
const WorkoutGallery = () => {
  const { language } = useLanguage();
  const texts = TEXTS[language];
  const [selectedImg, setSelectedImg] = useState(null);
  const sectionRef = useRef(null);
  const modalImgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".gallery-card");
      cards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          scale: 0.9,
          y: 30,
          duration: 0.6,
          ease: "power3.out",
          delay: Math.min(index * 0.05, 0.4),
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <section
      ref={sectionRef}
      className="min-h-screen px-2 py-10 md:px-16 md:py-28 border-b-2 border-dark/10 dark:border-light/10"
      id="workouts"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide font-hahmlet text-dark dark:text-light">
          {texts.heading}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-2 font-heebo text-dark/70 dark:text-light/70">
          {texts.subheading}
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 px-2 sm:px-6 md:px-12 ">
        {texts.galleryPics.map((pic) => (
          <div
            key={pic.id}
            className="gallery-card w-full overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelectedImg(pic.img)}
          >
            <h1 className="text-3xl lg:text-5xl  text-center font-bold mb-5 text-dark dark:text-light">
              Before - After
            </h1>
            <img
              src={pic.img}
              alt={pic.title || texts.altText}
              className="w-full  object-cover"
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
              ref={modalImgRef}
              src={selectedImg}
              alt={texts.modalAltText}
              className="rounded-lg shadow-2xl max-h-[80vh] object-contain"
            />
            {/* Close button */}
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/50 rounded-full px-2 hover:bg-black/70 transition"
            >
              {texts.closeButton}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkoutGallery;

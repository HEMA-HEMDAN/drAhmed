import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "../contexts/LanguageContext";
import { TEXTS } from "../consts/index.js";

const FitnessApp = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.set([headingRef.current, subtitleRef.current, buttonRef.current], {
        filter: "blur(10px)",
        opacity: 0,
        y: 20,
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 2.2,
      });
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.9,
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
          },
          "-=0.4"
        )
        .to(buttonRef.current, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
        });
    }, sectionRef);

    return () => context.revert();
  }, []);
  const texts = TEXTS[language];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[95vh] md:min-h-[90vh] w-full flex items-center justify-center mt-12 md:mt-20"
      aria-label="Fitness hero section"
    >
      {/* Background Video */}
      <video
        src="/assets/herrro.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Background Image
      <img
        src="/assets/hero.jpg" // Replace with your own image
        alt="Fitness background"
        className="absolute inset-0 h-full w-full object-cover"
      /> */}

      {/* Overlay (dark gradient for readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        {/* Headline */}
        <h1
          ref={headingRef}
          className="
            font-hahmlet font-bold uppercase
            text-[32px] xs:text-[40px] sm:text-[52px] md:text-[64px] lg:text-[80px]
            leading-tight
            mb-6
          "
        >
          {texts.headline.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br className={i === 0 ? "hidden sm:block" : "hidden"} />
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="
            text-white/85 font-heebo
            text-sm xs:text-base sm:text-lg md:text-xl
            max-w-2xl mx-auto
            mb-10
          "
        >
          {texts.subtitle}
        </p>

        {/* CTA Button */}
        <a
          ref={buttonRef}
          href="#pricing"
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
              animate-pulse
            "
        >
          {texts.ctaText}
        </a>
      </div>
    </section>
  );
};

export default FitnessApp;

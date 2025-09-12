import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      root.classList.add("dark");
      setIsDark(true);
    } else {
      root.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = isDark ? "light" : "dark";

    root.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  useGSAP(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -50, delay: 2 },
        { opacity: 1, y: 0, duration: 2, ease: "power1.inOut" }
      );
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0  px-4 py-2  flex justify-between items-center z-40 bg-gradient-to-r from-black via-[#333333] to-[#666666] shadow-lg"
    >
      {/* Logo */}
      <Link to="/" className=" text-2xl flex flex-row items-center">
        <img
          src="/assets/logo-dark.png"
          className="w-10 md:w-16 object-contain"
          alt="logo"
        />
      </Link>

      {/* Theme switch */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="text-white text-2xl md:text-3xl"
          aria-label="Toggle theme"
        >
          {isDark ? "🌞" : "🌜"}
        </button>
        <p className="text-white text-sm md:text-lg font-bold">
          {isDark ? "dark" : "light"}
        </p>
      </div>
    </nav>
  );
};

export default Navbar;

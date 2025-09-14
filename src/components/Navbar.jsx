import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { TEXTS } from "../consts/index.js";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const texts = TEXTS[language];

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      root.classList.add("dark");
      body.classList.add("bg-dark");
      setIsDark(true);
    } else {
      root.classList.remove("dark");
      body.classList.remove("bg-dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const body = document.body;
    const newTheme = isDark ? "light" : "dark";

    root.classList.toggle("dark");
    body.classList.toggle("bg-dark");
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <nav className="fixed top-0 right-0 left-0 px-4 py-2 flex flex-row items-center z-40 bg-gradient-to-r from-black via-[#333333] to-[#666666] shadow-lg">
      {/* Logo - Left */}
      <Link to="/" className="text-2xl flex flex-row items-center">
        <img
          src="/assets/logo-dark.png"
          className="w-16 object-contain"
          alt="logo"
        />
      </Link>

      {/* Desktop Navigation - Centered */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="flex flex-row items-center gap-8">
          {texts.navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="relative text-light text-lg font-bold 
             after:absolute after:left-0 after:-bottom-1 
             after:h-[2px] after:w-0 after:bg-white 
             after:transition-all after:duration-500 after:ease-in-out 
             hover:after:w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Theme Toggle and Language Toggle - Right */}
      <div className="hidden lg:flex items-center gap-4">
        <button
          onClick={toggleLanguage}
          className="text-white text-lg font-bold px-3 py-1 rounded border border-white/30 hover:bg-white/10 transition-colors"
          aria-label="Toggle language"
        >
          {language === 'en' ? 'العربية' : 'English'}
        </button>
        <button
          onClick={toggleTheme}
          className="text-white text-2xl md:text-3xl"
          aria-label="Toggle theme"
        >
          {isDark ? "☀️" : "🌜"}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex flex-1 justify-end">
        {/* Toggle button stays ABOVE menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl md:text-3xl relative z-50"
          aria-label="Toggle navigation"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Slide-in menu */}
        <div
          className={`
            fixed top-0 right-0 bottom-0 min-w-40 p-6
            bg-black/60 backdrop-blur-md shadow-lg text-white
            transform transition-all duration-300 ease-in-out
            z-40
            ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }
          `}
        >
          <ul className="flex flex-col gap-6 mt-12 w-full text-end">
            {texts.navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className=" text-lg font-bold hover:underline   "
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <div className="flex flex-col gap-4 mt-6">
              <button
                onClick={toggleLanguage}
                className="text-lg font-bold px-3 py-1 rounded border border-white/30 hover:bg-white/10 transition-colors"
                aria-label="Toggle language"
              >
                {language === 'en' ? 'العربية' : 'English'}
              </button>
              <button
                onClick={toggleTheme}
                className="text-2xl md:text-3xl "
                aria-label="Toggle theme"
              >
                {isDark ? "☀️" : "🌜"}
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

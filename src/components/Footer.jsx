import React from "react";
import { SOCIAL_LINKS, links } from "../consts/index.js";
import logo from "../../public/assets/logo-dark.png";

const Footer = () => {
  return (
    <footer className="reveal-up bg-gradient-to-br from-gray-900 via-gray-800 to-black text-light pt-16 pb-4 border-t border-neutral-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <img
            src={logo}
            alt="Dr Ahmed Gad logo"
            className="w-32 h-24 object-cover md:w-48 md:h-36"
            loading="lazy"
          />

          <nav
            aria-label="Social media"
            className="flex items-center gap-6 text-2xl md:mt-0"
          >
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                aria-label={label}
                href={href}
                target="_blank"
                className="hover:opacity-80 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center hover:bg-white hover:text-black rounded-full transition-all duration-300 ease-in-out"
              >
                <Icon />
              </a>
            ))}
          </nav>
        </div>

        <div className="w-full border-t border-neutral-800 mt-6 md:hidden" />

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-neutral-400 mt-3">
          {links.map(({ href, text }) => (
            <a
              key={text}
              href={href}
              target="_blank"
              className="relative text-light text-lg font-bold 
             after:absolute after:left-0 after:-bottom-1 
             after:h-[2px] after:w-0 after:bg-white 
             after:transition-all after:duration-500 after:ease-in-out 
             hover:after:w-full"
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

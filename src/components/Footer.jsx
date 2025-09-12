import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import logo from "../../public/assets/logo-dark.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Dr Ahmed Gad logo" className="w-32 h-24 rounded object-cover" />
         
          </div>

          <div className="flex items-center gap-6 text-2xl">
            <a aria-label="Facebook" href="#" className="hover:opacity-80"><FaFacebookF /></a>
            <a aria-label="Instagram" href="#" className="hover:opacity-80"><FaInstagram /></a>
            <a aria-label="X" href="#" className="hover:opacity-80"><FaXTwitter /></a>
            <a aria-label="LinkedIn" href="#" className="hover:opacity-80"><FaLinkedinIn /></a>
            <a aria-label="YouTube" href="#" className="hover:opacity-80"><FaYoutube /></a>
          </div>

          <div className="w-full border-t border-neutral-800 mt-6" />
          <p className="text-sm text-neutral-400">© 2025 HEMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



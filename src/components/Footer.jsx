import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import logo from "../../public/assets/logo-dark.png";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "X", href: "#", Icon: FaXTwitter },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { label: "YouTube", href: "#", Icon: FaYoutube },
];

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center gap-8">
          <img src={logo} alt="Dr Ahmed Gad logo" className="w-32 h-24  object-cover" loading="lazy" />

          <nav aria-label="Social media" className="flex items-center gap-6 text-2xl">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a key={label} aria-label={label} href={href} className="hover:opacity-80">
                <Icon />
              </a>
            ))}
          </nav>

          <div className="w-full border-t border-neutral-800 mt-6" />
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-neutral-400">
            <p className="order-2 md:order-1">© 2025 Mohamed Wael.</p>
            <p className="order-1 md:order-2">© 2025 HEMA.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



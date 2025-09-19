import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import NotFound from "./sections/NotFound";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const defaults = { ease: "power3.out", duration: 0.8 };

      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          filter: "blur(10px)",
          ...defaults,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.utils.toArray(".reveal-scale").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          scale: 0.8,
          y: 26,
          ...defaults,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.utils.toArray(".reveal-blur").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          filter: "blur(12px)",
          ...defaults,
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => setVisible(false), 1000);
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white dark:bg-black transition-opacity duration-700 z-50 ${
          loading
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } ${visible ? "" : "hidden"}`}
      >
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50" />
      </div>
      <div
        className=" bg-gradient-to-r from-[#fdfbfb] via-[#ebedee] to-[#dfe9f3]
  dark:bg-gradient-to-br dark:from-[#0a0a0f] dark:via-[#0f0f17] dark:to-[#000000]"
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppButton />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;

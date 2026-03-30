import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060f1e]/95 backdrop-blur-md border-b border-yellow-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-12 h-[70px]">

        {/* LEFT (LOGO) */}
        <div className="flex items-center gap-3">

          {/* PA BOX */}
          <div className="w-[32px] h-[32px] bg-yellow-400 rounded-md flex items-center justify-center font-bold text-[#060f1e] font-serif text-sm">
            PA
          </div>

          {/* TEXT */}
          <div className="flex flex-col leading-none">
            <h1 className="font-serif text-[14px] md:text-[16px] text-white font-semibold">
              Pratap Associates
            </h1>

            <span className="text-yellow-400 text-[10px] md:text-[11px] tracking-[1.5px] uppercase mt-[2px]">
              Noida - Greater Noida
            </span>
          </div>
        </div>

        {/* CENTER MENU (ONLY DESKTOP 👇) */}
        <div className="hidden md:flex gap-8 text-[12px] uppercase tracking-wide text-gray-300">
          <span className="cursor-pointer hover:text-white">Services</span>
          <span className="cursor-pointer hover:text-white">Pricing</span>
          <span className="cursor-pointer hover:text-white">About</span>
          <span className="cursor-pointer hover:text-white">Contact</span>
        </div>

        {/* RIGHT (SOCIAL ICONS) */}
        <div className="flex items-center gap-2">

          <a href="https://www.facebook.com/pratapassociate">
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded-md bg-blue-600">
              <Facebook size={16} className="text-white" />
            </div>
          </a>

          <a href="https://www.instagram.com/pratapassociates">
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded-md bg-pink-500">
              <Instagram size={16} className="text-white" />
            </div>
          </a>

          <a href="https://www.youtube.com/@pratapassociates">
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded-md bg-red-600">
              <Youtube size={16} className="text-white" />
            </div>
          </a>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ WhatsApp Redirect Function
  const handleWhatsApp = () => {
    const text = "I want free consultation about property in Noida & Greater Noida";
    const url = `https://wa.me/919873562419?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // mobile menu close
  }
};

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060f1e]/95 backdrop-blur-md border-b border-yellow-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 h-[70px]">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <div className="w-[36px] h-[36px] bg-yellow-400 rounded-md flex items-center justify-center font-bold text-[#060f1e] font-serif text-sm">
            PA
          </div>

          <div className="flex flex-col justify-center leading-none">

            {/* Desktop */}
            <h1 className="hidden md:block font-serif text-[18px] font-semibold text-white">
              Pratap<span className="ml-1">Associates</span>
            </h1>

            {/* Mobile */}
            <div className="md:hidden flex flex-col leading-none">
              <h1 className="font-serif text-[17px] text-white">Pratap</h1>
              <span className="text-[12px] text-gray-300">Associates</span>
            </div>

            {/* ✅ UPDATED LOCATION */}
            <span className="text-[9px] tracking-[2px] uppercase text-yellow-400 mt-[2px]">
              Real Estate · Noida
            </span>

          </div>
        </div>

        {/* MENU */}
        <ul className="hidden md:flex gap-8 text-[12px] uppercase tracking-wide text-gray-300">
          {["Home", "Services", "About Us", "Connect Us"].map((item) => (
            <li
              key={item}
              className="relative group cursor-pointer hover:text-white"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-yellow-400 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* BUTTON */}
        <div className="hidden md:block">
          <button
            onClick={handleWhatsApp}
            className="border border-yellow-400 text-yellow-400 px-4 py-2 text-[11px] rounded-md uppercase hover:bg-yellow-400 hover:text-black transition"
          >
            Free Consultation
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden text-white">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-[#060f1e] px-6 pb-6 border-t border-yellow-500/10">
          <ul className="flex flex-col gap-5 text-sm text-gray-300 mt-4">
           {[
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "About Us", id: "about" },
  { name: "Connect Us", id: "contact" },
].map((item) => (
  <li
    key={item.name}
    onClick={() => scrollToSection(item.id)}
    className="relative group cursor-pointer hover:text-white"
  >
    {item.name}
    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-yellow-400 transition-all group-hover:w-full"></span>
  </li>
))}
          </ul>

          <button
            onClick={handleWhatsApp}
            className="mt-5 w-full border border-yellow-400 text-yellow-400 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
          >
            Free Consultation
          </button>
        </div>
      )}

      
    </nav>
  );
};

export default Navbar;
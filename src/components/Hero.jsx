import React, { useEffect, useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(i);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center ">

      {/* SLIDER */}
      {slides.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060f1e]/90 via-[#060f1e]/50 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-12 max-w-2xl text-white">

        {/* TAG */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-[2px] bg-yellow-400"></div>
          <span className="text-xs tracking-[3px] uppercase text-yellow-400">
            Noida's Premier Real Estate Experts
          </span>
        </div>

        {/* HEADING FIXED 🔥 */}
        <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-5">

          {/* Desktop ONE LINE */}
          <span className="hidden md:block">
            Welcome to <br />
            <span className="text-yellow-400 italic">
              Pratap Associates
            </span>
          </span>

          {/* Mobile STACK */}
          <span className="md:hidden">
            Welcome to <br />
            <span className="text-yellow-400 italic">Pratap</span> <br />
            <span>Associates</span>
          </span>

        </h1>

        {/* TEXT */}
        <p className="text-gray-300 text-sm md:text-base mb-6">
          Your trusted partner for residential and commercial real estate in Noida & Greater Noida.
          Honest pricing, verified listings, and complete end-to-end support.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 flex-wrap">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:scale-105 transition">
            Book Free Consultation
          </button>

          <button className="border border-white/40 px-6 py-3 rounded-md hover:border-yellow-400 hover:text-yellow-400 transition">
            Explore Services →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
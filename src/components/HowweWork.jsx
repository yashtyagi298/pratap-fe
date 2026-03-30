import React, { useEffect, useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1556157382-97eda2d62296", // handshake
  "https://images.unsplash.com/photo-1600585152915-d208bec867a1", // keys
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa", // property
];

const HowWeWork = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(i);
  }, []);

  return (
    <section
      id="howwework"
      className="bg-[#0b1a30] px-5 md:px-12 pt-12 pb-20 text-white font-['Outfit']"
    >
      {/* HEADING */}
      <div className="mb-10">
        <span className="text-yellow-400 text-xs tracking-[3px] uppercase block mb-2">
          How We Work
        </span>

        {/* ✅ ONE LINE FIX */}
        <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-5xl leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          Transparent Process,{" "}
          <span className="italic text-yellow-400">Fair Pricing</span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10 items-stretch">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between">

          {/* QUOTE */}
          <blockquote className="font-['Cormorant_Garamond'] text-xl md:text-2xl italic border-l-4 border-yellow-400 pl-5 mb-5">
            "We don't charge too much for our estate property owners."
          </blockquote>

          {/* TABLE */}
          <div className="flex-1 flex flex-col justify-between">

            <p className="text-yellow-400 text-xs uppercase tracking-[2px] mb-3">
              Our Charges for Rental Service
            </p>

            <div className="overflow-hidden rounded-xl border border-yellow-500/10 flex-1">
              <table className="w-full h-full text-sm">
                <thead>
                  <tr className="bg-yellow-400 text-black text-xs uppercase tracking-[2px]">
                    <th className="px-5 py-3 text-left">Property Type</th>
                    <th className="px-5 py-3 text-left">Brokerage Fee</th>
                  </tr>
                </thead>

                <tbody className="bg-[#0e2040]">
                  {[
                    ["1 BHK", "₹3,000"],
                    ["2 BHK", "₹3,500"],
                    ["2.5 BHK", "₹4,000"],
                    ["3 BHK", "₹4,500"],
                    ["3 BHK+", "₹5,000"],
                  ].map((item, i) => (
                    <tr
                      key={i}
                      className="border-b border-yellow-500/10 hover:bg-[#132850] transition"
                    >
                      <td className="px-5 py-4">{item[0]}</td>
                      <td className="px-5 py-4 text-yellow-400 font-bold font-['Cormorant_Garamond'] text-lg">
                        {item[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE (MATCH HEIGHT ✅) */}
        <div className="relative rounded-xl overflow-hidden border border-yellow-500/10 h-full min-h-[320px]">

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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a30]/80 to-transparent"></div>

          {/* DOTS */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-yellow-400" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;
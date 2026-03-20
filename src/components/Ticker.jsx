import React from "react";

const Ticker = () => {
  const items = [
    "Residential Rent",
    "Commercial Spaces",
    "Verified Listings",
    "Affordable Brokerage",
    "Noida Properties",
    "Free Consultation",
    "Trusted Real Estate",
  ];

  return (
    <div className="bg-yellow-400 overflow-hidden ">

      <div className="whitespace-nowrap flex animate-marquee py-2">

        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="text-black text-xs md:text-sm font-semibold tracking-widest uppercase px-6"
          >
            ✦ {text}
          </span>
        ))}

      </div>
    </div>
  );
};

export default Ticker;
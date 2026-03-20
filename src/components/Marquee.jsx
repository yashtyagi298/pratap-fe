import React from "react";

const messages = [
  "We don't charge too much — that's our promise",
  "Honest pricing, always",
  "Your dream property is one call away",
  "Affordable brokerage, every time",
  "Trust built on transparency",
  "Noida's most trusted partner",
  "Residential · Commercial · Investment",
];

const Marquee = () => {
  return (
    <section className="bg-[#060f1e] border-b border-yellow-500/10 overflow-hidden">

      <div className="whitespace-nowrap flex animate-marquee py-5">

        {[...messages, ...messages].map((text, i) => (
          <span
            key={i}
            className="text-yellow-400 text-sm font-medium px-8 tracking-wide"
          >
            {text} <span className="text-yellow-400/30 mx-2">◆</span>
          </span>
        ))}

      </div>

    </section>
  );
};

export default Marquee;
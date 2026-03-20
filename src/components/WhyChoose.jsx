import React from "react";

const data = [
  {
    no: "01",
    title: "Local Market Knowledge",
    desc: "15+ years of Noida real estate insights no portal can match.",
  },
  {
    no: "02",
    title: "Zero Hidden Charges",
    desc: "Complete pricing transparency. What we quote is what you pay.",
  },
  {
    no: "03",
    title: "Fast Response",
    desc: "We respond to all queries within hours, not days.",
  },
  {
    no: "04",
    title: "Legal Guidance",
    desc: "Free help with rental agreements, sale deeds, and documentation.",
  },
  {
    no: "05",
    title: "Wide Inventory",
    desc: "500+ active listings across all budgets, updated weekly.",
  },
  {
    no: "06",
    title: "After-Service Support",
    desc: "Our relationship doesn't end at the keys. Always a call away.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-[#060f1e] px-5 md:px-12 py-20 relative overflow-hidden">

      {/* BACKGROUND FAINT IMAGE */}
      <div className="hidden md:block absolute top-0 right-0 w-[40%] h-full opacity-[0.05]">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=75"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          <span className="text-yellow-400 text-xs tracking-[3px] uppercase block mb-3">
            Why Choose Us
          </span>

          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
            The Pratap Associates <br />
            <span className="italic text-yellow-400">Difference</span>
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
            We don't just list properties — we build lasting relationships based
            on honesty, expertise, and genuine care for every client.
          </p>

          {/* QUOTE BOX */}
          <div className="bg-[#0b1a30] border border-yellow-500/10 border-l-[3px] border-l-yellow-400 p-6 rounded-md">
            <p className="font-serif italic text-white text-sm leading-relaxed mb-3">
              "We don't charge too much — that's our promise to every client who walks through our door."
            </p>
            <span className="text-yellow-400 text-[10px] uppercase tracking-[2px]">
              — Pratap Associates Founding Principle
            </span>
          </div>

        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {data.map((item, i) => (
            <div
              key={i}
              className="bg-[#0b1a30] border border-yellow-500/10 rounded-xl p-5 transition hover:border-yellow-400/30 hover:bg-[#0e2040]"
            >

              {/* NUMBER */}
              <h3 className="font-serif text-2xl text-yellow-400/20 mb-3">
                {item.no}
              </h3>

              {/* TITLE */}
              <h4 className="text-white text-sm font-semibold mb-1">
                {item.title}
              </h4>

              {/* DESC */}
              <p className="text-gray-400 text-xs leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
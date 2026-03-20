import React from "react";

const stats = [
  { number: "500+", label: "Properties Listed" },
  { number: "15+", label: "Years of Trust" },
  { number: "1,200+", label: "Happy Families" },
  { number: "98%", label: "Client Satisfaction" },
];

const Stats = () => {
  return (
    <section className="bg-[#0b1a30] border-y border-yellow-500/10">

      <div className="flex flex-wrap justify-around px-6 md:px-12 py-10 gap-8">

        {stats.map((item, i) => (
          <div key={i} className="text-center relative">

            {/* Divider */}
            {i !== 0 && (
              <div className="hidden md:block absolute left-[-30px] top-1/2 -translate-y-1/2 h-10 w-[1px] bg-yellow-500/10"></div>
            )}

            {/* Number */}
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-yellow-400">
              {item.number}
            </h2>

            {/* Label */}
            <p className="text-[10px] md:text-xs uppercase tracking-[2px] text-gray-400 mt-1">
              {item.label}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;
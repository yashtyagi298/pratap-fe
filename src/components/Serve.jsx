import React from "react";

const services = [
  {
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    icon: "🏘️",
    title: "Residential Rent Out",
    desc: "Curated 1BHK to 6BHK homes across Noida's prime localities. All personally verified.",
    price: "1BHK from ₹3,000 · 2BHK from ₹3,500/mo",
  },
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    icon: "🏪",
    title: "Commercial Rent Out",
    desc: "Premium offices, shops, and warehouses tailored for businesses of every scale.",
    price: "Custom pricing based on location & size",
  },
  {
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
    icon: "🌄",
    title: "Plots & Buy",
    desc: "Investment-grade plots and ready properties at the best market rates.",
    price: "Premium options available",
  },
  {
    img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&q=80",
    icon: "🔑",
    title: "Property Management",
    desc: "End-to-end management — tenant screening, maintenance & legal support.",
    price: "Affordable & transparent pricing",
  },
];

const Serve = () => {
  return (
    <section id="services" className="bg-[#0b1a30] px-5 md:px-10 py-20">

      {/* HEADING */}
      <div className="mb-12">
        <span className="text-yellow-400 text-xs tracking-[3px] uppercase block mb-3">
          What We Offer
        </span>
        <h2 className="font-serif text-2xl md:text-4xl font-semibold text-white mb-3">
          Our Services
        </h2>
        <p className="text-gray-400 text-sm max-w-md leading-relaxed">
          From rentals to investments — every real estate need covered with transparency and care.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {services.map((s, i) => (
          <div
            key={i}
            className="bg-[#0e2040] border border-yellow-500/10 rounded-[14px] overflow-hidden 
            transition duration-300 hover:-translate-y-2 hover:border-yellow-400/40"
          >

            {/* IMAGE */}
            <div className="h-[180px] relative overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />

              {/* OVERLAY SAME HTML */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2040] to-transparent"></div>
            </div>

            {/* BODY */}
            <div className="p-5">

              {/* ICON BOX */}
              <div className="w-[42px] h-[42px] bg-yellow-400/10 border border-yellow-500/20 rounded-lg flex items-center justify-center text-lg mb-4">
                {s.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-white text-[15px] font-semibold mb-2">
                {s.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-[13px] leading-relaxed mb-4">
                {s.desc}
              </p>

              {/* PRICE */}
              <div className="border-t border-yellow-500/10 pt-3 text-yellow-400 text-xs font-semibold">
                ₹ {s.price}
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Serve;
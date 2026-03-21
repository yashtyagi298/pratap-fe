import React from "react";

const features = [
  {
    icon: "📍",
    title: "Deep Local Expertise",
    desc: "Strong understanding of Greater Noida & Noida markets, pricing trends, and prime localities.",
  },
  {
    icon: "💰",
    title: "Honest, Transparent Pricing",
    desc: "We follow fair brokerage practices with zero hidden charges.",
  },
  {
    icon: "✅",
    title: "100% Verified Listings",
    desc: "Every property is personally verified for quality and legal clarity.",
  },
  {
    icon: "🤝",
    title: "End-to-End Support",
    desc: "From property search to final deal — we assist you at every step.",
  },
];


const About = () => {
  // ✅ WhatsApp Redirect
  const handleWhatsApp = () => {
    const text =
      "I want consultation about property in Noida & Greater Noida";
    const url = `https://wa.me/919873562419?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  return (
    <section id="about" className="bg-[#060f1e] px-5 md:px-12 py-20">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE SIDE */}
        <div className="relative">

          <div className="rounded-[22px] overflow-hidden h-[420px] md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80"
              alt="office"
              className="w-full h-full object-cover"
            />
          </div>

          {/* BADGE 1 */}
          <div className="absolute bottom-[-20px] right-[-10px] md:right-[-30px] bg-[#0e2040] border border-yellow-500/10 rounded-xl px-6 py-4 shadow-lg">
            <h3 className="text-yellow-400 font-serif text-3xl font-bold">
              10+
            </h3>
            <p className="text-gray-400 text-xs uppercase tracking-[2px]">
              Years Experience
            </p>
          </div>

          {/* BADGE 2 */}
          <div className="absolute top-4 left-[-10px] md:left-[-30px] bg-yellow-400 text-black px-4 py-2 rounded-md shadow">
            <strong className="block text-sm font-bold">✓ Verified</strong>
            <span className="text-[10px] uppercase tracking-[1px]">
              All Listings
            </span>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div>

          <span className="text-yellow-400 text-xs tracking-[3px] uppercase block mb-3">
            About Us
          </span>

          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-5 leading-tight">
            Who We Are
          </h2>

          {/* MAIN CONTENT */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Welcome to <span className="text-white font-semibold">Pratap Associates</span>, 
            a premier real estate consulting company offering end-to-end property solutions. 
            Since our founding in <span className="text-white">2014</span>, we have established 
            ourselves as a fast-growing service provider in 
            <span className="text-white"> Greater Noida and Noida</span>, built on a foundation 
            of integrity and financial transparency.
          </p>

          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            With years of industry experience and a dedicated team of professionals, 
            we have successfully served a network of 
            <span className="text-white font-semibold"> 1,000+ satisfied clients</span>. 
            We are proudly associated with leading builders and developers, delivering 
            dream homes and smart investment opportunities across the region.
          </p>

          {/* FEATURES */}
          <div className="flex flex-col gap-4 mb-8">

            {features.map((f, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 bg-[#0b1a30] border border-yellow-500/10 rounded-lg hover:border-yellow-400/30 transition hover:shadow-lg"
              >
                <div className="text-xl">{f.icon}</div>

                <div>
                  <h4 className="text-white text-sm font-semibold mb-1">
                    {f.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* BUTTON */}
          <button onClick={handleWhatsApp} className="bg-yellow-400 text-black px-6 py-3 rounded-md text-sm font-semibold hover:scale-105 hover:shadow-lg transition">
            Talk to Our Experts →
          </button>

        </div>

      </div>
    </section>
  );
};

export default About;
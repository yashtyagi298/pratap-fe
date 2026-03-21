import React, { useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
const Contact1 = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    budget: "",
    msg: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello, I am ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Looking For: ${form.type}
Budget: ${form.budget}
Requirement: ${form.msg}`;

    const url = `https://wa.me/919873562419?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section  id="contact" className="bg-[#060f1e] px-5 md:px-12 py-20 font-['Outfit']">

      {/* HEADING */}
      <div className="mb-12">
        <span className="text-yellow-400 text-xs tracking-[3px] uppercase block mb-3">
          Get In Touch
        </span>
        <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-white mb-3">
          Connect With Us
        </h2>
        <p className="text-gray-400 text-sm max-w-md">
          Ready to find your dream property? Our experts are just one message away.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>

          <h3 className="font-['Cormorant_Garamond'] text-2xl text-white mb-4">
            We're Here for You
          </h3>

          <p className="text-gray-400 text-sm mb-6 max-w-md">
            Whether you're looking to rent, buy, or invest — we have the expertise to help you.
          </p>

          {/* INFO */}
          <div className="flex flex-col gap-4">

            {[
              {
                icon: "📍",
                label: "Office Location",
                value: "Shop 32, 1st Floor, Commercial 2, Paras Tierea, Sector 137 Noida, G. B. Nagar UP -201306",
              },
              {
                icon: "📞",
                label: "Phone",
                value: "+91 9873562419",
              },
              {
                icon: "✉️",
                label: "Email",
                value: "Pratapassociates@yahoo.in",
              },
              {
                icon: "🕐",
                label: "Working Hours",
                value: "Wednesday – Monday, 9 AM – 7 PM",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-[#0b1a30] border border-yellow-500/10 p-4 rounded-md hover:border-yellow-400/30 transition"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-yellow-400/10 border border-yellow-500/20 rounded-md">
                  {item.icon}
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[2px] text-gray-400">
                    {item.label}
                  </p>
                  <p className="text-white text-sm font-medium">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

          </div>

        <div className="flex gap-3 mt-6">

  {/* Facebook */}
  <a
    href="https://www.facebook.com/pratapassociate"
    target="_blank"
    className="group w-10 h-10 flex items-center justify-center bg-[#0b1a30] border border-yellow-500/10 rounded-md transition"
  >
    <Facebook
      size={18}
      className="text-gray-300 group-hover:text-black transition"
    />
  </a>

  {/* Instagram */}
  <a
    href=" https://www.instagram.com/pratapassociates_"
    target="_blank"
    className="group w-10 h-10 flex items-center justify-center bg-[#0b1a30] border border-yellow-500/10 rounded-md transition"
  >
    <Instagram
      size={18}
      className="text-gray-300 group-hover:text-black transition"
    />
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@pratapassociates"
    target="_blank"
    className="group w-10 h-10 flex items-center justify-center bg-[#0b1a30] border border-yellow-500/10git  rounded-md transition"
  >
    <Youtube
      size={18}
      className="text-gray-300 group-hover:text-black transition"
    />
  </a>

</div>

        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#0b1a30] border border-yellow-500/10 rounded-2xl p-8 shadow-lg">

          <h3 className="font-['Cormorant_Garamond'] text-xl text-white mb-1">
            Send an Enquiry
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Fill your details and we’ll contact you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="grid grid-cols-2 gap-3">
              <input
                required
                placeholder="Full Name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="p-3 bg-[#0e2040] border border-white/10 rounded text-white"
              />
              <input
                required
                placeholder="Phone"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="p-3 bg-[#0e2040] border border-white/10 rounded text-white"
              />
            </div>

            <input
              placeholder="Email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="p-3 bg-[#0e2040] border border-white/10 rounded text-white"
            />

            <div className="grid grid-cols-2 gap-3">
              <select
                required
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="p-3 bg-[#0e2040] border border-white/10 rounded text-white"
              >
                <option value="">Select Type</option>
                <option>Residential Rent</option>
                <option>Commercial Rent</option>
                <option>Buy Property</option>
              </select>

              <input
                placeholder="Budget"
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="p-3 bg-[#0e2040] border border-white/10 rounded text-white"
              />
            </div>

            <textarea
              rows="3"
              placeholder="Your Requirement"
              onChange={(e) => setForm({ ...form, msg: e.target.value })}
              className="p-3 bg-[#0e2040] border border-white/10 rounded text-white"
            />

            <button className="bg-yellow-400 text-black py-3 rounded font-semibold hover:scale-105 transition">
              Submit Enquiry →
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact1;
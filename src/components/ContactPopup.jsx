import React, { useState, useEffect } from "react";

const ContactPopup = () => {
  const [open, setOpen] = useState(false);

  // Auto open after 4 sec (same as HTML)
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 4000);
    return () => clearTimeout(t);
  }, []);

  // WhatsApp submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const type = form.type.value;
    const budget = form.budget.value;
    const msg = form.msg.value;

    const text = `Hello, I am ${name}
Phone: ${phone}
Email: ${email}
Looking For: ${type}
Budget: ${budget}
Requirement: ${msg}`;

    const url = `https://wa.me/919873562419?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
    setOpen(false); // auto close after submit
  };

  if (!open) return null;

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
    >
      <div className="bg-[#0b1a30] border border-yellow-500/20 rounded-2xl w-[95%] max-w-lg overflow-hidden relative animate-[fadeIn_.3s_ease]">

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 bg-black/40 text-white w-8 h-8 rounded-full hover:bg-yellow-400 hover:text-black transition"
        >
          ✕
        </button>

        {/* IMAGE HEADER */}
        <div className="h-[160px] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b1a30]"></div>

          <div className="absolute bottom-4 left-6">
            <h2 className="text-white font-serif text-xl">
              Quick Enquiry
            </h2>
            <p className="text-yellow-400 text-xs uppercase tracking-[2px]">
              Get a free consultation
            </p>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="h-[3px] bg-white/10">
          <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 animate-[progress_5s_linear_forwards]"></div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">

          <div className="grid grid-cols-2 gap-3">
            <input name="name" required placeholder="Full Name"
              className="p-3 bg-[#0e2040] border border-white/10 rounded text-white"/>
            <input name="phone" required placeholder="Phone"
              className="p-3 bg-[#0e2040] border border-white/10 rounded text-white"/>
          </div>

          <input name="email" placeholder="Email"
            className="p-3 bg-[#0e2040] border border-white/10 rounded text-white"/>

          <div className="grid grid-cols-2 gap-3">
            <select name="type" required
              className="p-3 bg-[#0e2040] border border-white/10 rounded text-white">
              <option value="">Select Type</option>
              <option>Residential Rent</option>
              <option>Commercial Rent</option>
              <option>Buy Property</option>
            </select>

            <input name="budget" placeholder="Budget"
              className="p-3 bg-[#0e2040] border border-white/10 rounded text-white"/>
          </div>

          <textarea name="msg" rows="3" placeholder="Your Requirement"
            className="p-3 bg-[#0e2040] border border-white/10 rounded text-white"/>

          <button
            type="submit"
            className="bg-yellow-400 text-black py-3 rounded font-semibold hover:scale-105 transition"
          >
            Submit Enquiry →
          </button>

        </form>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes progress {
          from { width: 100% }
          to { width: 0% }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) }
          to { opacity: 1; transform: scale(1) }
        }
      `}</style>
    </div>
  );
};

export default ContactPopup;
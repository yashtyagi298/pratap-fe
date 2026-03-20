import React, { useState, useEffect } from "react";

const QuickEnquiry = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const type = form.type.value;
    const msg = form.msg.value;

    const text = `Hello, I am ${name}
Phone: ${phone}
Email: ${email}
Looking For: ${type}
Requirement: ${msg}`;

    const url = `https://wa.me/919368338064?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    // ✅ CLOSE POPUP AFTER SUBMIT
    setOpen(false);
  };

  // ✅ ESC KEY CLOSE
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-yellow-400 text-black px-4 py-3 rounded-full shadow-lg z-50 hover:scale-110 transition"
      >
        💬
      </button>

      {/* POPUP */}
      {open && (
        <div
          onClick={() => setOpen(false)} // ✅ OUTSIDE CLICK CLOSE
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
        >

          {/* STOP PROPAGATION */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0b1a30] border border-yellow-500/20 rounded-2xl w-[95%] max-w-lg overflow-hidden relative"
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 bg-black/50 hover:bg-yellow-400 hover:text-black text-white w-8 h-8 rounded-full flex items-center justify-center transition"
            >
              ✕
            </button>

            {/* TOP IMAGE */}
            <div className="h-[150px] relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80"
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
        </div>
      )}
    </>
  );
};

export default QuickEnquiry;
import React from "react";
import ownerImg from "../assets/owner.jpeg";
const Owner = () => {
  return (
    <section id="owner" className="bg-[#060f1e] px-5 md:px-12 py-6">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div className="w-full">
          <img
            src={ownerImg}
            alt="Owner"
            className="w-full h-[350px] md:h-[450px] object-cover rounded-xl"
          />
        </div>

        {/* INFO */}
        <div>

          {/* ROLE */}
          <p className="text-yellow-400 text-xs uppercase tracking-[3px] mb-2">
            Founder & Director
          </p>

          {/* NAME */}
          <h2 className="font-serif text-2xl md:text-3xl text-white font-semibold mb-3">
            Mr. Pratap Singh
          </h2>

          {/* TITLE */}
          <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-md">
            10+ years of real estate expertise in Noida & Greater Noida.
            <br />
            Committed to honest, transparent, and client-first service.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Owner;
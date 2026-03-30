import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#040b16] border-t border-yellow-500/10 px-5 md:px-12 py-16 font-['Outfit']">

      {/* TOP GRID */}
      <div className="grid md:grid-cols-4 gap-10 mb-10">

        {/* LOGO + ABOUT */}
        <div>

          {/* LOGO */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-yellow-400 text-black flex items-center justify-center rounded-md font-bold font-['Cormorant_Garamond']">
              PA
            </div>

            <div className="leading-none">
              <h3 className="font-['Cormorant_Garamond'] text-white text-lg font-semibold">
                Pratap Associates
              </h3>
              <span className="text-[10px] tracking-[2px] uppercase text-yellow-400">
                Real Estate · Noida
              </span>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Noida and Greater Noida's most trusted real estate consultancy. Connecting dreams to addresses — honestly and affordably.
          </p>

          <p className="mt-4 text-yellow-400 text-[11px] uppercase tracking-[1px] font-semibold">
            ★ Govt charges extra if applicable
          </p>

        </div>

        {/* SERVICES */}
        <div>
          <h5 className="text-yellow-400 text-xs uppercase tracking-[3px] mb-4">
            Services
          </h5>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Residential Rent</li>
            <li className="hover:text-white cursor-pointer">Commercial Rent</li>
            <li className="hover:text-white cursor-pointer">Buy Plots</li>
            <li className="hover:text-white cursor-pointer">Buy Property</li>
            <li className="hover:text-white cursor-pointer">Property Management</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h5 className="text-yellow-400 text-xs uppercase tracking-[3px] mb-4">
            Company
          </h5>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Properties</li>
            <li className="hover:text-white cursor-pointer">Why Us</li>
            <li className="hover:text-white cursor-pointer">Reviews</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* PRICING
        <div>
          <h5 className="text-yellow-400 text-xs uppercase tracking-[3px] mb-4">
            Pricing Guide
          </h5>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li>1BHK/1RK from ₹3,000</li>
            <li>2BHK from ₹3,500/mo</li>
            <li>5BHK from ₹4,000</li>
            <li>6BHK ₹4,500–5K</li>
            <li>Commercial: Custom</li>
          </ul>
        </div> */}

      </div>

      {/* DIVIDER */}
      <div className="border-t border-yellow-500/10 mb-6"></div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-xs">

        <p>
          © 2026 Pratap Associates. All Rights Reserved. Noida, Uttar Pradesh.
        </p>

        <p className="text-yellow-400 font-semibold">
          Made with ♥ in Rahiva Global
        </p>

      </div>

    </footer>
  );
};

export default Footer;
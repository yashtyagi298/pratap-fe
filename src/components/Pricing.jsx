export default function Pricing() {
  return (
    <div className="bg-[#0b1c39] text-white py-20 text-center">

      <h2 className="text-4xl font-bold mb-2">Pricing</h2>
      <p className="mb-10 text-gray-300">
        We don’t charge too much value
      </p>

      <div className="flex justify-center gap-6">

        <div className="border px-6 py-4 rounded-lg">
          1 BHK / 1 RK <br/> ₹3000/-
        </div>

        <div className="bg-yellow-400 text-black px-8 py-5 rounded-lg scale-110 shadow-xl">
          2 BHK <br/> ₹3500/-
        </div>

        <div className="border px-6 py-4 rounded-lg">
          3 BHK <br/> ₹4000/-
        </div>

      </div>

      <p className="mt-6 text-sm text-gray-400">
        * 2% Brokerage charges extra if applicable
      </p>
    </div>
  )
}
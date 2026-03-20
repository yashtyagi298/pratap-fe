export default function ContactPopUp() {
  return (
    <div className="fixed right-10 bottom-10 bg-white p-6 rounded-xl shadow-2xl w-80">

      <h2 className="font-bold mb-4">Contact Us</h2>

      <input className="w-full mb-2 p-2 border rounded" placeholder="Name"/>
      <input className="w-full mb-2 p-2 border rounded" placeholder="Phone"/>
      <input className="w-full mb-2 p-2 border rounded" placeholder="Email"/>

      <button className="w-full bg-yellow-400 py-2 rounded mt-3 font-semibold">
        Submit
      </button>

    </div>
  )
}
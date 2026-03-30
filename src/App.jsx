import About from "./components/About";
import Footer from "./components/Footer";

import Marquee from "./components/Marquee";

import QuickEnquiry from "./components/QuickEnquiry";
import Stats from "./components/Stats";
import Ticker from "./components/Ticker";

import Contact1 from "./components/Contact1";

import Hero from "./components/Hero.jsx"

import Serve from "./components/Serve.jsx";
import Why from "./components/Why.jsx";
import HowWeWork from "./components/HowweWork.jsx";
import Navbar from "./components/Navbar.jsx";
import ContactPopup from "./components/ContactPopup.jsx";
import Owner from "./components/Owner.jsx";




export default function App() {
  return (
   <>
      <Navbar/>
      <Hero/>
      <Owner/>
      <Ticker/>
    <Stats/>
    <Marquee/>
    <HowWeWork/>
    <ContactPopup/>
   <Serve/>
    <About/>
    <Why/>
    <QuickEnquiry/>
    <Contact1/>
    <Footer/>
    </>
  );
}

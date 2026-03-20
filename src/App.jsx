
import About from "./components/About";

import Footer from "./components/Footer";
import Hero from "./components/hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/navbar";

import QuickEnquiry from "./components/QuickEnquiry";

import Stats from "./components/Stats";
import Ticker from "./components/Ticker";
import WhyChoose from "./components/Whychoose";
import Contact1 from "./components/Contact1";
import Services from "./components/services";


export default function App() {
  return (
   <>
      <Navbar />
      <Hero/>
      <Ticker/>
    <Stats/>
    <Marquee/>
    <Services/>
    <About/>
    <WhyChoose/>
    <QuickEnquiry/>
    <Contact1/>
    <Footer/>
    </>
  );
}
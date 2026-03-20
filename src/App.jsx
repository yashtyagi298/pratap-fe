import About from "./components/About";
import Footer from "./components/Footer";

import Marquee from "./components/Marquee";

import QuickEnquiry from "./components/QuickEnquiry";
import Stats from "./components/Stats";
import Ticker from "./components/Ticker";

import Contact1 from "./components/Contact1";

import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar";
import WhyChoose from "./components/Whychoose.jsx";
import Serve from "./components/Serve.jsx";




export default function App() {
  return (
   <>
      <Navbar/>
      <Hero/>
      <Ticker/>
    <Stats/>
    <Marquee/>
   <Serve/>
    <About/>
    <WhyChoose/>
    <QuickEnquiry/>
    <Contact1/>
    <Footer/>
    </>
  );
}

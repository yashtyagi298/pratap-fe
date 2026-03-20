import { Contact } from "lucide-react";
import About from "./components/About";
import ContactPopup from "./components/contactPopUp";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/navbar";
import Pricing from "./components/pricing";
import QuickEnquiry from "./components/QuickEnquiry";
import Services from "./components/services";
import Stats from "./components/Stats";
import Ticker from "./components/Ticker";
import WhyChoose from "./components/Whychoose";
import Contact1 from "./components/Contact1";


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
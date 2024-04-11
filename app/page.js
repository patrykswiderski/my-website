"use client"
import Image from "next/image";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = 'Patryk.dev | Home';
  }, [])
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

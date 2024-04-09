import Image from "next/image";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
    </div>
  );
}

"use client";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Experience from "./_components/Experience";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Experience />
			<Projects />
			<About />
			<Skills />
			<Contact />
			<Footer />
		</div>
	);
}

"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
	return (
		<div className="mt-[80px]">
			<div className="flex flex-col justify-center items-start">
				<img
					src="/best2.jpg"
					alt="hero image"
					className="object-cover h-72 sx:h-80 sm:h-96 md:h-full"
				/>
				{/* <div className="text-neutral-200 text-lg sm:text-2xl md:text-3xl lg:text-4xl tracking-tight font-bold font-sans absolute top-1/4 left-28">
						Hello, I'm Patryk
					</div> */}
			</div>
			<div className="grid grid-cols-1 max-w-[1200px] mx-auto bg-white">
				<div className="cols-span-2 px-2 sx:px-5 my-8 mb-10">
					<h1 className="text-gray-800 text-2xl xs:text-3xl sx:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-5 sx:mt-10 sm:mt-20 tracking-tight">
						<span className="primary-color">I'm a</span> <br />
						<TypeAnimation
							sequence={[
								"Passionate full stack dev",
								3000,
								"Freelance web dev",
								3000,
								"Front-End Developer",
								3000,
								"Back-End Developer",
								3000,
							]}
							wrapper="span"
							speed={10}
							repeat={Infinity}
						/>
					</h1>
				</div>
			</div>
		</div>
	);
}

export default Hero;

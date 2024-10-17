"use client";
import React from "react";

function Hero() {
	return (
		<div className="mt-[80px]">
			<div className="grid grid-cols-1 max-w-[1200px] mx-auto bg-white">
				<div className="flex flex-col justify-center items-center mx-auto my-auto w-auto h-auto">
					<img src="/best2.jpg" alt="hero image" className="lg:rounded-md" />
				</div>

				<div className="cols-span-2 px-2 sx:px-5 my-8 mb-10">
					{/* <h1 className="text-gray-800 text-2xl sm:text-4xl lg:text-7xl font-extrabold mt-20">
						<span className="primary-color">I'm a</span> <br />
						<TypeAnimation
							sequence={[
								"Freelance Web Dev",
								3000,
								"Full Stack Web App Dev",
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
					</h1> */}

					<p className="text-gray-600 text-xs sm:text-base md:text-lg sx:mt-6 sm:mt-14 lg:text-xl tracking-tighter">
						Hi, my name is Patryk Świderski
					</p>
					<p className="text-gray-800 font-semibold text-xl sx:text-2xl sm:text-3xl mt-1 sm:mt-3 lg:text-4xl tracking-tighter">
						I’m a passionate full stack developer, specialized in development of
						web applications using React, Next.js, Node.js & more
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;

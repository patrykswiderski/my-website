import React from "react";

function About() {
	return (
		<div className="lg:py-10">
			<div
				className="h-max text-gray-600 max-w-[1200px] mx-auto my-4 sx:my-8 py-2"
				id="about"
			>
				<div className="grid sm:grid-cols-3 sm:py-16">
					<div className="sm:col-span-2 mt-4 md:mt-0 text-left flex flex-col md:flex-row">
						<div className="my-auto px-2 sx:px-5">
							<h2 className="text-xl sx:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800 tracking-tight ">
								About Me
							</h2>
							<p className=" text-gray-700 text-justify sx:text-left text-xs sx:text-sm md:text-lg lg:text-xl font-sans tracking-widest">
								Hey, my name is Patryk. I am a passionate full-stack developer
								based in Warsaw, Poland. I specialize in React, Next.js, Node.js
								& more. I like making life better through technology by creating
								fast, clean, and maintainable web applications that can scale
								from a few users to thousands. I love taking on challenges and
								always strive to learn and master new technologies. My
								creativity and sense of aesthetics help me build good-looking
								and user-friendly websites. I am persistent and often code from
								morning till night to solve problems and create great projects.
								When I'm not coding, I enjoy acrylic painting or spending time
								in my garage. My dedication to personal growth and high-quality
								work shows in everything I do in the tech industry.
							</p>
						</div>
					</div>
					<div className="mx-auto px-5 py-4 md:py-0 md:px-0 opacity-95 flex flex-col items-center justify-center">
						<img
							src="/about2.jpg"
							className="rounded-md w-4/6 sm:w-auto h-auto md:max-h-[340px] saturate-150 shadow-md shadow-gray-400"
							alt="photo"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;

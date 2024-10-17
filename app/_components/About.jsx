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
							<p className=" text-gray-600 text-justify sx:text-left text-xs sm:text-sm lg:text-xl font-sans tracking-widest">
								I am a passionate full-stack developer living in Warsaw, Poland.
								I specialize in React, along with Tailwind CSS. I like making
								life better through technology by creating fast, clean, and
								maintainable web applications that can scale from a few users to
								thousands. I love taking on challenges and always strive to
								learn and master new technologies. My creativity and sense of
								aesthetics help me build beautiful and user-friendly websites. I
								am persistent and often code from morning till night to solve
								problems and create great projects. When I'm not coding, I enjoy
								painting, fishing, or spending time in my garage. My dedication
								to personal growth and high-quality work shows in everything I
								do in the tech industry.
							</p>
						</div>
					</div>
					<div className="mx-auto py-2 md:py-0 ">
						<img
							src="/about2.jpg"
							className="sm:rounded-md py-8 md:py-0 lg:shadow-sm shadow-gray-500 h-[320px]"
							alt="photo"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;

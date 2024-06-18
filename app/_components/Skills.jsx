import React from "react";

function Skills() {
	return (
		<div
			className="bg-gray-200 text-gray-600 lg:rounded-2xl md:h-[180px] max-w-[1200px] mx-auto my-8 pb-4 md:pt-2 md:pb-2 grid grid-cols-4 place-items-center md:flex md:justify-between md:items-center"
			id="skills"
		>
			<h2 className="text-gray-800 text-xl md:text-4xl font-bold m-4">
				My <br /> Tech <br /> Stack
			</h2>

			<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px] transform transition-transform hover:scale-110 ">
				<img src="/html.png" alt="html icon" />
				<p className="mt-2 font-medium">HTML</p>
			</div>

			<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px] transform transition-transform hover:scale-110">
				<img src="/css.png" alt="css icon" />
				<p className="mt-2 font-medium">CSS</p>
			</div>

			<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[60px] lg:w-[80px] transform transition-transform hover:scale-110">
				<img src="/javascript.png" alt="javascript icon" />
				<p className="mt-2 font-medium">JavaScript</p>
			</div>

			<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px] transform transition-transform hover:scale-110">
				<img src="/tailwind.png" alt="tailwind icon" />
				<p className="mt-2 font-medium">Tailwind</p>
			</div>

			<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px] transform transition-transform hover:scale-110">
				<img src="/react.png" alt="react icon" />
				<p className="mt-2 font-medium">React</p>
			</div>

			<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px] transform transition-transform hover:scale-110">
				<img src="/nextjs-icon.png" alt="sass icon" />
				<p className="mt-2 font-medium">Next.js</p>
			</div>

			<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px] transform transition-transform hover:scale-110">
				<img src="/sass.png" alt="sass icon" />
				<p className="mt-2 font-medium">SASS</p>
			</div>
		</div>
	);
}

export default Skills;

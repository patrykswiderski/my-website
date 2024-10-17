import Image from "next/image";
import React from "react";
import skillsData from "@/app/data/skills";

function Skills() {
	return (
		<div className="bg-neutral-100 py-4 sm:py-8">
			<div
				className="max-h-max max-w-[1200px] mx-auto mt-8 pb-6 md:pt-16 md:pb-16 flex flex-col md:flex-row items-start "
				id="skills"
			>
				<div className="hidden md:block text-gray-800 text-xl md:text-3xl lg:text-4xl font-bold ml-5 mt-4 sm:mt-2  tracking-tight">
					My <br /> Tech <br /> Stack
				</div>

				<div className="text-center md:hidden text-gray-800 text-xl sx:text-2xl md:text-3xl font-bold ml-5 mb-8 sm:mt-2 tracking-tight">
					My Tech Stack
				</div>

				<div className="grid grid-cols-2 xs:grid-cols-2 sx:grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 sm:gap-x-4 gap-y-6 sx:gap-y-8 md:gap-y-12 lg:gap-y-18 my-2 px-2 sx:px-5 w-full">
					{skillsData.map((skill, index) => (
						<div
							key={index}
							className="flex flex-col justify-center items-center  my-4 mx-auto sm:my-0 w-[50px] xs:w-[80px] transform duration-300 hover:-translate-y-1"
						>
							<Image
								src={skill.src}
								alt={skill.alt}
								width={80}
								height={80}
								className="h-[50px]  xs:h-[80px]"
							/>
							<p className="mt-2 text-nowrap text-xs sx:text-sm sm:text-base font-medium">
								{skill.name}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Skills;

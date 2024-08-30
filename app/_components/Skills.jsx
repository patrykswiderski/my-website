import Image from "next/image";
import React from "react";
import skillsData from "@/app/data/skills";

function Skills() {
	return (
		<div
			className="bg-gray-200 text-gray-600 lg:rounded-2xl max-h-max max-w-[1200px] mx-auto my-8 pb-4 md:pt-2 md:pb-2 flex items-start"
			id="skills"
		>
			<div className="text-gray-800 text-xl md:text-3xl lg:text-4xl font-bold ml-4 mt-4 sm:mt-2">
				My <br /> Tech <br /> Stack
			</div>

			<div className="grid grid-cols-2 xs:grid-cols-3 sx:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 sm:gap-4 my-2 mx-4 w-full">
				{skillsData.map((skill, index) => (
					<div
						key={index}
						className="flex flex-col justify-center items-center  my-4 mx-auto sm:my-0 w-[40px] xs:w-[50px] sx:w-[60px] sm:w-[80px] transform transition-transform hover:scale-110"
					>
						<Image
							src={skill.src}
							alt={skill.alt}
							width={80}
							height={80}
							className="h-[40px] xs:h-[50px] sx:h-[60px] sm:h-[80px]"
						/>
						<p className="mt-2 text-nowrap text-xs sx:text-sm sm:text-base font-medium">
							{skill.name}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Skills;

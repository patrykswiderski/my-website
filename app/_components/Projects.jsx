import React from "react";
import MyProjects from "../utils/projects";

function Projects() {
	const cssProjectContainer =
		"overflow-hidden shadow-md shadow-gray-300 group container rounded-md flex justify-center items-center mx-auto content-div bg-cover relative bg-transparent min-w-full lg:w-5/6 md:col-span-2";

	return (
		<div className="bg-neutral-100 py-2 sx:py-6">
			<div
				className="max-w-[1200px] mx-auto my-6 lg:my-16 px-2 sx:px-5"
				id="projects"
			>
				<div className="pb-8">
					<p className="text-xl sx:text-2xl md:text-3xl lg:text-4xl mb-2 font-bold text-gray-800 tracking-tight">
						Projects
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-y-28">
					{MyProjects.map((myProject, index) => (
						<>
							<div className={cssProjectContainer} key={index.myProject}>
								<img
									src={myProject.img}
									layout="fill"
									alt="page photo"
									className="object-cover w-full aspect-[4/3] object-top"
								/>
								<div className="opacity-0 group-hover:opacity-100 bg-[black]/50 absolute inset-0 flex flex-col justify-center items-center transform duration-300 ">
									<span className="text-2xl font-bold text-white tracking-wider"></span>
									<div className="pt-8 text-center">
										<a href={myProject.link} target="_blank">
											<button className="text-center rounded-md px-4 py-3 m-2 bg-white tracking-wide text-neutral-900 shadow-md font-bold text-lg hover:-translate-y-1 transition duration-300">
												{myProject.buttonText}
											</button>
										</a>
									</div>
								</div>
							</div>
							<div className="lg:ml-6 mt-3 mb-8 md:mt-6 md:mb-10 min-h-full flex flex-col items-start">
								<div className=" sx:text-lg md:text-xl font-sans font-bold tracking-tighter mb-3 text-gray-700">
									{myProject.title}
								</div>
								<div className="text-xs sx:text-sm  font-sans mb-3 text-gray-600">
									{myProject.description}
								</div>
								<div className="text-xs sx:text-sm  font-sans text-gray-600 ">
									DEVELOPMENT TOOLS
									<ul className="list-disc">
										{myProject.tools.map((tool, index) => (
											<li className="ml-5" key={index}>
												{tool}
											</li>
										))}
									</ul>
								</div>
							</div>
						</>
					))}
				</div>
			</div>
		</div>
	);
}

export default Projects;

import React from "react";
import MyProjects from "../utils/projects";

function Projects() {
	const cssProjectContainer =
		" overflow-hidden shadow-md shadow-gray-300 group container rounded-md flex justify-center items-center mx-auto content-div h-auto bg-cover relative bg-black  sm:w-4/6";

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

				<div className="grid grid-cols-1 space-y-16 sm:space-y-32">
					{MyProjects.map((myProject, index) => (
						<div className={cssProjectContainer}>
							<img
								src={myProject.img}
								layout="fill"
								alt="page photo"
								className="object-cover"
							/>
							<div className="opacity-0 group-hover:opacity-100 bg-[black]/40 absolute inset-0 flex flex-col justify-center items-center transform duration-300 ">
								<span className="text-2xl font-bold text-white tracking-wider"></span>
								<div className="pt-8 text-center">
									<a href={myProject.link} target="_blank">
										<button className="text-center rounded-md px-4 py-3 m-2 bg-white tracking-wide text-neutral-900 shadow-md font-bold text-lg hover:-translate-y-1 transition duration-300">
											Live
										</button>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Projects;

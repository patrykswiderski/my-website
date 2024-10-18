"use client";
import React from "react";

function Experience() {
	const styleListElement =
		"bg-purple-100 px-1 text-neutral-700 rounded-sm tracking-wide";

	return (
		<div className="lg:my-14 sm:py-10" id="experience">
			<div className="max-w-[1200px] mx-auto px-2 sx:p-5 lg:py-14">
				<h2 className="text-gray-800 text-xl sx:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-10 tracking-tight">
					Experience
				</h2>
				<div className="space-y-6 sm:space-y-10">
					<div className="pb-6">
						<h3 className="text-gray-800 text-base sx:text-lg sm:text-xl md:text-2xl font-semibold tracking-tighter font-sans">
							Web Developer Intern
						</h3>
						<p className="text-gray-500 text-xs sm:text-sm md:text-base mt-1 md:mt-2 tracking-tight">
							<strong>CodeWords</strong> | April 2024 - Present
						</p>
						<ul className="list-disc sm:ml-5 my-5 md:my-7 pl-6 space-y-2 font-sans tracking-wide text-gray-700 text-xs sm:text-sm md:text-base">
							<li>
								Creating dashboard, landing pages improvements, new features and
								fixed bugs in enterprise app and rewrote UI components.
							</li>
							<li>
								Developed scalable backend services with payments system using
								NestJS and MongoDB.
							</li>
							<li>Implemented multilingual support with i18Next.</li>
							<li>
								Built mobile apps using pure React and Redux, Gradle and
								Thirdweb.
							</li>
						</ul>

						<div className="flex flex-col sm:flex-row gap-2 text-gray-800 text-xs sm:text-sm md:text-base">
							<div>Development tools:</div>
							<div className="flex-1">
								<ul className="flex flex-wrap gap-1 sx:gap-2 text-xs sm:text-sm md:text-base">
									<li className={styleListElement}>JavaScript</li>
									<li className={styleListElement}>TypeScript</li>
									<li className={styleListElement}>React</li>
									<li className={styleListElement}>Redux</li>
									<li className={styleListElement}>React Native</li>
									<li className={styleListElement}>Redux Toolkit</li>
									<li className={styleListElement}>Next.js</li>
									<li className={styleListElement}>NestJS</li>
									<li className={styleListElement}>Thirdweb</li>
									<li className={styleListElement}>Tailwind CSS</li>
									<li className={styleListElement}>MongoDB</li>
									<li className={styleListElement}>i18Next</li>
									<li className={styleListElement}>Babel</li>
									<li className={styleListElement}>Metro</li>
									<li className={styleListElement}>Gradle</li>
									<li className={styleListElement}>Expo</li>
									<li className={styleListElement}>Webpack</li>
									<li className={styleListElement}>NextAuth</li>
									<li className={styleListElement}>Stripe</li>
									<li className={styleListElement}>Bootstrap</li>
									<li className={styleListElement}>Shadcn/ui</li>
									<li className={styleListElement}>Vercel</li>
									<li className={styleListElement}>Scrum</li>
									<li className={styleListElement}>Github</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="pb-6">
						<h3 className="text-gray-800 text-base sx:text-lg sm:text-xl md:text-2xl font-semibold tracking-tighter font-sans">
							Freelance Web Developer
						</h3>
						<p className="text-gray-500 text-xs sm:text-sm md:text-base tracking-tight mt-1 md:mt-2 ">
							September 2023 - Present
						</p>
						<ul className="list-disc sm:ml-5 my-5 md:my-7 pl-6 space-y-2 font-sans tracking-wide text-gray-700 text-xs sm:text-sm md:text-base">
							<li>
								Built a single-page app from scratch with a complex user
								interface, including user interactions and animations using
								React.js, Redux and Tailwind.
							</li>
							<li>
								Utilized Redux for state management and ensured efficient data
								flow across the application.
							</li>
							<li>
								Collaborated with stakeholders to meet project requirements.
							</li>
						</ul>

						<div className="flex flex-col sm:flex-row gap-2 text-gray-700 text-xs sm:text-sm md:text-base">
							<div className="min-w-max">Development tools:</div>
							<div className="flex-1">
								<ul className="flex flex-wrap gap-1 sx:gap-2 text-xs sm:text-sm md:text-base">
									<li className={styleListElement}>JavaScript</li>
									<li className={styleListElement}>Python</li>
									<li className={styleListElement}>React</li>
									<li className={styleListElement}>Redux</li>
									<li className={styleListElement}>Redux Toolkit</li>
									<li className={styleListElement}>Next.js</li>
									<li className={styleListElement}>HTML</li>
									<li className={styleListElement}>CSS</li>
									<li className={styleListElement}>Tailwind</li>
									<li className={styleListElement}>SASS</li>
									<li className={styleListElement}>PostgreSQL</li>
									<li className={styleListElement}>Strapi</li>
									<li className={styleListElement}>JSON</li>
									<li className={styleListElement}>JWT</li>
									<li className={styleListElement}>Bootstrap</li>
									<li className={styleListElement}>Rest API</li>
									<li className={styleListElement}>Shadcn/ui</li>
									<li className={styleListElement}>NextAuth</li>
									<li className={styleListElement}>Stripe</li>
									<li className={styleListElement}>a11y</li>
									<li className={styleListElement}>Figma</li>
									<li className={styleListElement}>Github</li>
									<li className={styleListElement}>VSCode</li>
								</ul>
							</div>
						</div>
					</div>

					{/* <div className="pb-6">
						<h3 className="text-gray-800 text-2xl font-semibold tracking-tighter font-sans">
							Chief Specialist, Administration Office
						</h3>
						<p className="text-gray-500 tracking-tight mt-2 ">
							<strong>Polish Agency for Enterprise Development</strong> | 2006 -
							2023
						</p>
						<ul className="list-disc ml-5 my-7 pl-6 space-y-2 text-gray-700 tracking-tight">
							<li>
								Managed comprehensive processes related to vehicle fleet and GSM
								services, ensuring efficient operations and cost savings.
							</li>
							<li>
								Achievement Highlight: Implemented a comprehensive vehicle
								policy that improved operational efficiency and reduced repair
								costs.
							</li>
						</ul>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default Experience;

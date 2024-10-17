import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import React from "react";

function Contact() {
	return (
		<div
			className="max-w-[1200px] mx-auto bg-white py-10 sm:py-20 px-2 sx:px-5"
			id="contact"
		>
			<div className="lg:text-center">
				<h2 className="text-xl sx:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-800 mb-8 md:mb-14 tracking-tight">
					Need a full stack web developer? Let's build something!
				</h2>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="lg:flex-1 lg:max-w-[800px] w-full box-border lg:mx-auto order-last lg:order-none">
					<div className="mt-6 border border-neutral-300 rounded-lg">
						<div className="p-4 sm:p-10">
							<form action="https://getform.io/f/pagxlgzb" method="POST">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 sx:gap-y-2 sm:gap-y-4">
									<div>
										<div className="mt-2.5">
											<input
												type="text"
												name="name"
												id=""
												placeholder="Your Name"
												className="w-full px-4 py-4 text-xs sm:text-sm text-gray-800 placeholder-gray-400 border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500"
											></input>
										</div>
									</div>

									<div>
										<div className="mt-2.5">
											<input
												type="email"
												name="email"
												id=""
												placeholder="Your Email"
												className=" w-full px-4 py-4 text-xs sm:text-sm text-gray-800 placeholder-gray-400 border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500"
											></input>
										</div>
									</div>

									<div className="sm:col-span-2">
										<div className="mt-2.5">
											<textarea
												name="message"
												id=""
												placeholder="Message..."
												className=" w-full px-4 py-4 text-xs sm:text-sm text-gray-800 placeholder-gray-400 border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500"
												rows="4"
											></textarea>
										</div>
									</div>

									<div className="sm:col-span-2">
										<button
											type="submit"
											className="sx:text-lg sm:text-xl w-full p-2 sm:p-4 mt-2 font-bold text-gray-700 bg-neutral-200 rounded-md shadow-sm border border-neutral-200 hover:border-2 hover:shadow-xl transition duration-200"
										>
											Send
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				<div className="lg:pl-32 lg:flex-1 box-border">
					<div className="flex flex-col lg:mt-6">
						<div className="min-h-max">
							<h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-1 sm:mb-3">
								Email
							</h2>
							<a
								href="mailto:patryk.swiderski.85@gmail.com"
								className="my-8 text-sm sx:text-base sm:text-xl font-semibold lg:font-semibold text-gray-600 text-center hover:text-blue-600 hover:underline transition duration-200 font-sans"
							>
								patryk.swiderski.85@gmail.com
							</a>
						</div>
						<div className="mt-6 lg:mt-10">
							<h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-1 sm:mb-3">
								Connect
							</h2>
							<div className="flex flex-row gap-4 align-center ">
								<a
									href="https://www.linkedin.com/in/patryk-świderski"
									className="-mt-1 transition duration-200 hover:-translate-y-1"
									target="_blank"
								>
									<IconBrandLinkedin color="black" size={54} />
								</a>
								<a
									href="https://github.com/patrykswiderski"
									className="transition duration-200 hover:-translate-y-1"
									target="_blank"
								>
									<IconBrandGithub color="black" size={48} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;

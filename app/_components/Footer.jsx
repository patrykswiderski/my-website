import React from "react";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<div className="max-w-[1220px] sm:h-[150px] px-2 sx:px-5 flex flex-col text-center sx:text-left sx:flex-row justify-between mx-auto">
			<span className="text-gray-300 text-xs sm:text-sm">Patryk Świderski</span>
			<p className="text-gray-600 text-xs sm:text-sm">
				Copyright © {currentYear}. All rights are reserved
			</p>
		</div>
	);
}

export default Footer;

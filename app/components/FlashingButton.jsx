import React from "react";

function FlashingButton() {
	return (
		<button className="relative overflow-hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
			<span className="relative z-10">Click Me</span>
			<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-flash-horizontal z-0"></div>
		</button>
	);
}

export default FlashingButton;

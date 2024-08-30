/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			screens: {
				"xs": "300px", // Nowy breakpoint dla małych ekranów
				"sx": "420px", // Nowy breakpoint dla małych ekranów
				"sm": "640px", // Domyślny breakpoint Tailwind
				"md": "768px", // Domyślny breakpoint Tailwind
				"lg": "1024px", // Domyślny breakpoint Tailwind
				"xl": "1280px", // Domyślny breakpoint Tailwind
				"2xl": "1536px", // Domyślny breakpoint Tailwind
			},
			// keyframes: {
			// 	"flash-horizontal": {
			// 		"0%": { backgroundPosition: "-200% 0" },
			// 		"100%": { backgroundPosition: "200% 0" },
			// 	},
			// },
			// animation: {
			// 	"flash-horizontal": "flash-horizontal 0.s infinite linear",
			// },
		},
	},
	plugins: [],
};

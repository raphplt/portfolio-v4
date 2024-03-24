import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				blob: "blob 5s infinite",
			},
			keyframes: {
				blob: {
					"0%, 100%": { transform: "translate(0, 0) scale(1)" },
					"25%": { transform: "translate(20px, 15px) scale(1.1)" },
					"50%": { transform: "translate(0, 30px) scale(0.9)" },
					"75%": { transform: "translate(-20px, 15px) scale(1.1)" },
				},
			},
		},
	},
	plugins: [],
};
export default config;

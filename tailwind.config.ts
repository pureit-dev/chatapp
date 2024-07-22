/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '2rem', // Consistent padding for the sake of responsiveness
				sm: '2rem',
				md: '2rem',
				lg: '2rem',
				xl: '2rem',
				'2xl': '2rem',
			},
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			maxWidth: {
				'chatbar': 'none', // Allowing the chatbar component to extend fully
			}
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};


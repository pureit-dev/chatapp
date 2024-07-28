/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '2rem',
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
			colors: {
				'noir-bg': '#121212', // Adding noir theme background color
				'noir-text': '#E3E3E3', // Adding noir theme text color
				'noir-accent': '#B1A7A6', // Adding an accent color for noir theme
				'noir-border': '#333333', // Border color for inputs and buttons in noir theme
			},
			borderRadius: {
				'noir': '0.25rem', // Applying subtle borderRadius for the noir theme
			},
			maxWidth: {
				'chatbar': 'none',
			}
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};


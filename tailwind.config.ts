/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			// Adding custom styles for consistency across ChatBar and ChatWindow
            width: {
                'chat-bar': 'calc(100% - 2rem)',
            },
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};


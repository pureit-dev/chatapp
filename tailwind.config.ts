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
			// Adjusting custom styles for the ChatBar to extend full width of the ChatWindow
            width: {
                'chat-bar': 'calc(100% - 2rem)', // Ensuring ChatBar extends full width
                'chat-window': '100%' // Defining full width for the ChatWindow for consistency
            },
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};


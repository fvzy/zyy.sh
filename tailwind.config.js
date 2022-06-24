const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
	theme: {
        colors: {
            "transparent": "transparent",
            "current": "currentColor",

            "white": "#FFFFFF",
            "dark": "#111111",
            "black": "#000000",
            "off-white": "#EDEDF0",
            "off-black": "#242424",
            "main-text": {
                light: "#2A2E32",
                dark: "#757A80"
            },
            "sub-text": {
                light: "#4B5258",
                dark: "#5C6166"
            },
            "peach": {
                light: "#FDA262",
                dark: "#C47E4C"
            },
            "red": {
                light: "#EB5756",
                dark: "#BD4645"
            },
            "purple": {
                light: "#B073FF",
                dark: "#8859C4"
            },
            "blue": {
                light: "#4E5EFA",
                dark: "#3B48BF"
            }
        },
        // TODO: CHANGE ME AT PRODUCTION!
        fontFamily: {
            "work-sans": ["Work Sans", ...defaultTheme.fontFamily.mono],
            "inter": ["Inter", ...defaultTheme.fontFamily.mono],
            "mono": ["Roboto Mono", ...defaultTheme.fontFamily.serif],
        }
	},
	plugins: [],
};

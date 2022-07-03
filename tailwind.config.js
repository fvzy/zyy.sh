const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
	content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./frames/**/*.{js,ts,jsx,tsx}",
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
            "main": {
                light: "#2B2F33",
                dark: "#858A8F"
            },
            "sub": {
                light: "#4B5258",
                dark: "#676C70"
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
        fontFamily: {
            "work-sans": ["Work Sans", "Inter", ...defaultTheme.fontFamily.sans],
            "inter": ["Inter", ...defaultTheme.fontFamily.sans],
            "mono": ["Roboto Mono", ...defaultTheme.fontFamily.mono],
        },
        extend: {
            fontSize: {
                "ms": "0.9375rem"
            }
        }
	},
	plugins: [],
};

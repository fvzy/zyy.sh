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
            "dark": "#131825",
            "black": "#000000",
            "off-white": "#EDEDF0",
            "off-black": "#2c313d",
            "main": {
                light: "#363B40",
                dark: "#EAEAEA"
            },
            "sub": {
                light: "#4B5258",
                dark: "#aeb4c4"
            },
            "quiet": {
                light: "#5F6266",
                dark: "#9ba2b3"
            }
        },
        fontFamily: {
            "inter": ["InterVariable", ...defaultTheme.fontFamily.sans],
            "mono": ["Fira CodeVariable", ...defaultTheme.fontFamily.mono],
        },
        screens: {
            "sm": "400px",
            "md": "600px",
            "lg": "700px"
        }
	},
	plugins: [],
};

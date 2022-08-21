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
                light: "#363B40",
                dark: "#858A8F"
            },
            "sub": {
                light: "#4B5258",
                dark: "#676C70"
            },
            "quiet": {
                light: "#5F6266",
                dark: "#565A5D"
            }
        },
        fontFamily: {
            "inter": ["InterVariable", ...defaultTheme.fontFamily.sans],
            "mono": ["Fira CodeVariable", ...defaultTheme.fontFamily.mono],
        },
        screens: {
            "md": "600px"
        }
	},
	plugins: [],
};

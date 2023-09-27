// /** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                ...fontFamily,
                sans: ["Montserrat", "sans-serif"],
                headline: ["Outfit", "sans-serif"],
            },
            colors: {
                primaryColor: {
                    DEFAULT: "c3c0ae",
                    50: "#f7f7f5",
                    100: "#edece7",
                    200: "#dad8ce",
                    300: "#c3c0ae",
                    400: "#aaa48d",
                    500: "#999076",
                    600: "#8c826a",
                    700: "#756b59",
                    800: "#60584c",
                    900: "#4f493f",
                    950: "#2a2520",
                },

                blackText: {
                    DEFAULT: "#494949",
                    50: "#f6f6f6",
                    100: "#e7e7e7",
                    200: "#d1d1d1",
                    300: "#b0b0b0",
                    400: "#888888",
                    500: "#6d6d6d",
                    600: "#5d5d5d",
                    700: "#4f4f4f",
                    800: "#494949",
                    900: "#3d3d3d",
                    950: "#262626",
                },
                themeGreen: "#3A7D44",
                themeRed: "#DF2935",
            },
            lineHeight: {
                xl: "2", // Customize the line height for text-xl
            },
        },
    },
    plugins: [],
};

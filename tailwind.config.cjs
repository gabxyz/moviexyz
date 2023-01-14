/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        light: 325,
        normal: 425,
        medium: 525,
        semibold: 625,
        bold: 725,
      },
      transitionTimingFunction: {
        /**
         * See: https://carbondesignsystem.com/guidelines/motion/overview/
         */
        "productive-standard": "cubic-bezier(0.2, 0, 0.38, 0.9)",
        "productive-entrance": "cubic-bezier(0, 0, 0.38, 0.9)",
        "productive-exit": "cubic-bezier(0.2, 0, 1, 0.9)",
        "expressive-standard": "cubic-bezier(0.4, 0.14, 0.3, 1)",
        "expressive-entrance": "cubic-bezier(0, 0, 0.3, 1)",
        "expressive-exit": "cubic-bezier(0.4, 0.14, 1, 1)",
      },
      keyframes: {
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(0.25rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-right-fade": {
          "0%": { opacity: 0, transform: "translateX(-0.25rem)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-0.25rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-left-fade": {
          "0%": { opacity: 0, transform: "translateX(0.25rem)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-up-fade":
          "slide-down-fade 150ms cubic-bezier(0.4, 0.14, 0.3, 1)",
        "slide-down-fade":
          "slide-up-fade 150ms cubic-bezier(0.4, 0.14, 0.3, 1)",
        "slide-right-fade":
          "slide-left-fade 150ms cubic-bezier(0.4, 0.14, 0.3, 1)",
        "slide-left-fade":
          "slide-right-fade 150ms cubic-bezier(0.4, 0.14, 0.3, 1)",
      },
    },
  },
  plugins: [
    require("windy-radix-palette"),
    require("tailwindcss-radix")({
      variantPrefix: "rdx",
    }),
  ],
};

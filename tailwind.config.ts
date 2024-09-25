import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#5C148C",
          dark: "#101010",
          light: "#ffffff",
          muted: "#3D3D3D",
          muted2: "#696969",
          heading: "#353535",
          paragraph: "#4E4E4E",
          link: "#6B14A6",

          tree: "#6fb48e",
          "tree-dark": "#0B4635",
          danger: "#dc2626",
        },
        custom: {
          "gray-500": "#444444",
        },
      },
      boxShadow: {
        custom: "0px 0px 29px 10px #948F8F26",
        custom1: "0px 0px 15px 5px #948F8F26",
        custom2: '1px 1px 5.7px 1px #0000001A'
      },
    },
  },
  plugins: [nextui()],
};
export default config;

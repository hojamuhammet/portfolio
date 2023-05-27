import { fontFamily } from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        BG_BLACK: "#252525",
        TEXT_GRADIENT:
          "linear-gradient(180deg, #EBEBEB -44.56%, #B6B6B6 152.17%)",
        RED_GRADIENT: "linear-gradient(92.68deg, #FD5A77 0%, #E3D1D5 99.66%)",
        GREEN_GRADIENT: "linear-gradient(92.68deg, #3DAF7F 0%, #E3D1D5 99.66%)",
        BLUE_GRADIENT: "linear-gradient(92.68deg, #3492C7 0%, #E3D1D5 99.66%)",
      },
      backgroundImage: {
        GRID: "url(/grid.svg)",
        TEXT_GRADIENT:
          "linear-gradient(180deg, #EBEBEB -44.56%, #B6B6B6 152.17%)",
        RED_GRADIENT: "linear-gradient(92.68deg, #FD5A77 0%, #E3D1D5 99.66%)",
        GREEN_GRADIENT: "linear-gradient(92.68deg, #3DAF7F 0%, #E3D1D5 99.66%)",
        BLUE_GRADIENT: "linear-gradient(92.68deg, #3492C7 0%, #E3D1D5 99.66%)",
      },
      fontSize: {
        SMALL: "14px",
        MID: "18px",
        TITLE: "80px",
      },
      borderRadius: {
        DEFAULT: "8px",
      },
      fontFamily: {
        SPACEGR: ["var(--font-space-grotesk)", ...fontFamily.sans],
      },
      keyframes: {
        MOVEBG: {
          "0%": {
            backgroundPositionX: "50%",
            backgroundPositionY: "50%",
            backgroundSize: "100%",
          },
          "25%": {
            backgroundPositionX: "80%",
            backgroundPositionY: "20%",
            backgroundSize: "120%",
          },
          "50%": {
            backgroundPositionX: "40%",
            backgroundPositionY: "0%",
            backgroundSize: "130%",
          },
          "75%": {
            backgroundPositionX: "10%",
            backgroundPositionY: "0%",
            backgroundSize: "70%",
          },
          "100%": {
            backgroundPositionX: "50%",
            backgroundPositionY: "50%",
            backgroundSize: "100%",
          },
        },
      },
      animation: {
        BG: "MOVEBG infinite ease-in-out 15s forwards",
      },
    },
  },
  plugins: [],
};

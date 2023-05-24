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
      fontSize: {
        SMALL: "14px",
        MID: "18px",
        TITLE: "80px",
      },
      borderRadius: {
        DEFAULT: "8px",
      },
    },
  },
  plugins: [],
};

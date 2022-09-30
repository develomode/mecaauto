/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mechanic: "url('/images/HeadBg.svg')",
        garage: "url('/images/garage.png')",
      },
    },
    screens: {
      xs: { max: "428px" },
      sm: { min: "429px", max: "799px" },
      xm: { min: "800px", max: "1020px" },
      md: { min: "800px", max: "1279px" },
      lg: { min: "1280px", max: "1919px" },
      xl: { min: "1920px", max: "2560px" },
      xxl: "2561px",
    },
    colors: {
      black: "#000000",
      darkGrey: "#9C9C9C",
      transGrey: "rgba(72, 72, 72, 0.10)",
      lightGrey: "#D9D9D9",
      white: "#FFFFFF",
      green: "#40BF2B",
      red: "#ff0000",
    },
  },
  plugins: [],
};

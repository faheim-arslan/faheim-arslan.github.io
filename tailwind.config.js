/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "/src/fonts/**/*.ttf",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["montserrat, sans"],
        roboto: ["roboto, sans"]
      },
    },
    // custom spacing
    spacing: {
      '1/5': '20%',
      '1/2': '50%',
      '1/4': '25%',
      '1/8': '12.5%',
      '1/25': '4%',
    },
  },
  plugins: [],
};

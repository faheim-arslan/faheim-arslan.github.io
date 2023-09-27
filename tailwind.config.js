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
        satoshi: ["satoshi, sans"]
      },
    },
  },
  plugins: [],
};

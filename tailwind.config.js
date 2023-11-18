/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "/src/fonts/**/*.ttf",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat_regular: ["montserrat-regular"],
        montserrat_bold: ["montserrat-bold"],
        roboto_light: ["roboto-light"],
        roboto_medium: ["roboto-medium"],
        roboto_bold: ["roboto-bold"],
        vinasans_regular: ["vinasans-regular"]
      },
      textUnderlineOffset: {
        '3': '3px',
      },
    },
    // custom spacing
    spacing: {
      '1/5': '20%',
      '1/2': '50%',
      '1/4': '25%',
      '1/8': '12.5%',
      '1/10': '10%',
      '1/25': '4%',
      '1/50': '2%',
      '1': '0.25rem',
      '1.5': '0.375rem',
      '2': '0.5rem',
      '3':	'0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '12': '3rem',
      '36': '9rem',
      '48': '12rem',
      '72': '18rem',
      '96': '24rem',
      '112': '28rem',
      '116': '29rem',
      '128': '32rem',
      '168': '42rem',
    },
  },
  plugins: [],
};

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
        roboto: ["roboto, sans"],
        sourcecodepro: ["sourcecodepro, sans"]
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

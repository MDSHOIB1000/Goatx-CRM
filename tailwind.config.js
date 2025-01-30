/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "4px",
          sm: "1rem",
          md: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        fontOpticalSizing: ["auto"],
      },
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
        lightGray: "#f7fafc",
        darkGray: "#2d3748",
        headerBg: "#001b48",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), 
  ],
};

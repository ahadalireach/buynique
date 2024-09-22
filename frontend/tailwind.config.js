/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-black-color": "#1F1F1F",
        "light-black-color": "#1A1A1A",
        "off-white-color": "#646360",
        "green-color": "#D2EF9A",
        "gray-color": "#F7F7F7",
        "red-color": "#DB4444",
      },
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
};

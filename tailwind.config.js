/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBrown: "#ab7a5f",
        veryLighrBrown: "#eaded7",
        lightBrown: "#c5a491",
        veryDarkBrown: "#453227",
        darkBlue: "#102a42",
        lightBlue: "#617d98",
        veryLightGrey: "#f1f5f8",
        veryLightBlue: "#324d67",
        darkRed: "#bb2525",
      },
      backgroundColor: {
        transparentBlack: "rgba(0, 0, 0, 0.5)",
      },
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1170px",
    },
  },
  plugins: [],
};

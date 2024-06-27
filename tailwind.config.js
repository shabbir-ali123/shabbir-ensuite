// tailwind.config.js
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGray: "#F3F3F3",
      },
      width: {
        customwidth: "829px",
      },
      gap: {
        "25px": "25px",
      },
      screens: {
        "custom-lg": "1100px",
      },
    },
  },
  plugins: [],
};

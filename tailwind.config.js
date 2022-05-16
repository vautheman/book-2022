module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      "work-sans": "Work Sans",
    },

    extend: {
      colors: {
        "blue-dark": "#171933",
        "green-fluo": "#49DF93",
      },

      translate: {
        middle: "-50%",
      },

      transitionProperty: {
        size: "width, height",
        width: "width",
      },
    },
  },
  plugins: [],
};

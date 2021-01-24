const typography = require("@tailwindcss/typography");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./**/*.jsx"],
  },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
        serif: ["Vollkorn", ...defaultTheme.fontFamily.serif],
      },
      colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [typography],
};

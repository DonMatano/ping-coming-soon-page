module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      // eslint-disable-next-line prettier/prettier
      'libre': ["Libre Franklin", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-blue": "#4C7BF3",
        "secondary-pale-blue": "#c2d3ff",
        "secondary-light-red": "#ff5263",
        "neutral-gray": "#969696",
        "neutral-very-dark-blue": "#151f29",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "active", "disabled"],
  },
  plugins: [],
};

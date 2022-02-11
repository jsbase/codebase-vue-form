module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({ strategy: "class" }), // eslint-disable-line no-undef
    require("@tailwindcss/typography"), // eslint-disable-line no-undef
  ],
};

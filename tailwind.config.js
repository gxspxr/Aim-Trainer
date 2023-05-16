/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      display: ["group-focus"],
      colors: {
        base: "#131221",
        "base-light": "#353D57",
        light: "#A9CAEF",
        primary: "#8181D7",
        secondary: "#0038FF", 
        NameColor:"rgba(99, 94, 193, 1)",
        base2:"rgba(29, 29, 43, 1)"
      },
    },
  },
  plugins: [],
}

module.exports.colors = module.exports.theme.extend.colors;
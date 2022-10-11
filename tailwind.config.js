/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#d6611d",

          "secondary": "#c2bdf9",

          "accent": "#fcdc5d",

          "neutral": "#202337",

          "base-100": "#E4E5E7",

          "info": "#4395CB",

          "success": "#166F44",

          "warning": "#F5912E",

          "error": "#E33B49",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

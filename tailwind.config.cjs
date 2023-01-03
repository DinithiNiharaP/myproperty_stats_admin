/** @type {import('tailwindcss').Config} */;
module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        theme_primary: {
          primary: "#645CFC",
          secondary: "#0F0D36",
          accent: "#ECEBFF",
          neutral: "#A2AEC5",
          gray: "#9F9EAF",
          gray2: "#9191A5",
          text: "#0F0D36",
          info: "#BAD7F0",
          success: "#A7D86A",
          warning: "#E9AA18",
          error: "#FB4747",
          "base-100": "#fafbff",
          "base-200": "#F1F5F9",
          "base-content": "#171717",
        },
      },
    ],
  },
};
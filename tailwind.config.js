/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "button-red": {
          DEFAULT: "#d84546",
          dark: "#d32d2e"
        }
      }
    }
  },
  plugins: []
};

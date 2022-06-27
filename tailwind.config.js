/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    maxWidth: {
      "task-width": "320px",
    },
    minWidth: {
      "task-width": "280px",
    },
    width: {},
    extend: {},
  },
  plugins: [],
};

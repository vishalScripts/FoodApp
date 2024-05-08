/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navBg: "#FFA3A3",
        customRed: "#E41414",
      },
    },
  },
  plugins: [],
};


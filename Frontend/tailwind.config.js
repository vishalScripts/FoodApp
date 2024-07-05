/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navBg: "#FFA3A3",
        customRed: "#E41414",
        footerBg: "#EFF0F1",
        gradientColStart: "#6D51A5",
        gradientColMiddle: "#D9D5D7",
        gradientColStop: "#E4A7C5",
      },
    },
  },
  plugins: [],
};


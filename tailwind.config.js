/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        waveAnimation: {
          "0%": {
            transform: "rotate(0.0deg)",
          },
          "10%": {
            transform: "rotate(14.0deg)",
          },
          "20%": {
            transform: "rotate(-8.0deg)",
          },
          "30%": {
            transform: "rotate(14.0deg)",
          },
          "40%": {
            transform: "rotate(-4.0deg)",
          },
          "50%": {
            transform: "rotate(10.0deg)",
          },
          "60%": {
            transform: "rotate(0.0deg)",
          },
          "100%": {
            transform: "rotate(0.0deg)",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        wave: "waveAnimation 2.5s infinite",
      },
    },
    colors: {
      prim: {
        blue: "#1F3A93",
        white: "#ffffff",
        black: "#000000",
        gray: "#787878",
      },
      sec: {
        white: "#F5F5F5",
        gray: "#CDCDCD",
        blue: "#3b82f6",
      },
    },
  },
  plugins: [],
};

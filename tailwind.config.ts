import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/section/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        blob: "blob 3s infinite",
        topRight: "topRight 3s ease-in-out infinite",
        topLeft: "topLeft 3s ease-in-out infinite",
      },
      keyframes: {
        topRight: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "50%": {
            transform: "translate(30px, -30px) scale(1.1)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        topLeft: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "50%": {
            transform: "translate(-30px, 30px) scale(1.1)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;

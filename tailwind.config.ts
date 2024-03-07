import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./auth/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        transparent: "transparent",
        "dark-blue": "#11047A",
        "nile-blue": "#1B2559",
        "purple-blue": "#4318FF",
        "cold-purple": "#A3AED0",
        "dark-grey": "#2B3674",
        "french-grey": "#B0BBD5",
        "soft-peach": "#E9EDF7",
        "snata-grey": "#8F9BBA",
      },
    },
  },
  plugins: [],
};
export default config;

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
        "light-grey": "#F4F7FE",
        "dark-grey": "#2B3674",
        "french-grey": "#B0BBD5",
        "soft-peach": "#E9EDF7",
        "santa-grey": "#8F9BBA",
        backdrop: "rgba(0, 0, 0, 0.5)",
      },
      boxShadow: {
        grey: "14px 40px 17px 4px rgba(112, 144, 176, 8%)",
        "grey-sm": "14px 20px 17px 4px rgba(112, 144, 176, 8%)",
        "grey-xs": "14px 15px 15px 4px rgba(112, 144, 176, 8%)",
        "grey-xxs": "4px 4px 20px 10px rgba(112, 144, 176, 8%)",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AF367B",
        secondary: "#1B234A",
        "dark-white": "#F2F5FF",
        "dark-black": "#222121",
        "operation-succes": "#3FAB19",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      screens: {
        xsm: "285px",
      },
    },
  },
  plugins: [],
};
export default config;

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
        "color-accent": "#10F2C5",
      },
      maxWidth: {
        wrapper: "1300px",
      },
      backgroundImage: {
        hero: "url('/images/hero.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;

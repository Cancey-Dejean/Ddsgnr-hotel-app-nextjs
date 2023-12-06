import type { Config } from "tailwindcss"

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
        "color-border": "#676767",
      },
      maxWidth: {
        wrapper: "1300px",
      },
      backgroundImage: {
        hero: "url('/images/hero.jpg')",
      },
      boxShadow: {
        select:
          "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
}
export default config

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#AE1C33",
        background_dark: "#392F5A",
        primary_text: "#ECD189",
        accent: "#84C7D0",
        
      },
    },
  },
  plugins: [],
} satisfies Config;

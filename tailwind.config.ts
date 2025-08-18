// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",   // if you're using Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}",     // if you still have Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4f46e5", // example brand color
          light: "#818cf8",
          dark: "#3730a3",
        },
      },
      // fontFamily: {
      //   sans: ["Inter", "sans-serif"], // override default font
      // },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      colors: {
        primary: '#0A2540',
        accent: '#007BFF',
        accent2: '#00C4FF',
        dark: '#121212',
        light: '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        header: ['Poppins', 'Space Grotesk', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', 'Georgia', ...defaultTheme.fontFamily.serif],
      }
    },
  },
};
export default config;

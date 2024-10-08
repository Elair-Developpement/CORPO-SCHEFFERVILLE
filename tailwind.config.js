/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green_1: "var(--green-1)",
        green_2: "var(--green-2)",
        orange_1: "var(--orange-1)",
        orange_2: "var(--orange-2)",
      },
    },
  },
  plugins: [],
};

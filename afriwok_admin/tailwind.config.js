/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'text-dark': 'var(--text-dark)',
        'text-light': 'var(--text-light)',
        border: 'var(--border-color)',
      },
      // fontFamily: {
      //   sans: ["Inter", "sans-serif"],
      // },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "body": {
          backgroundColor: "#F9F9F9", /* bg-secondary */
          color: "#2D3748", /* text-text-dark */
        },
      });
    },
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      xsm: "320",
      mdsm: "325",
      sm: "425px",
      form: "490px",
      popular: "550px",
      md: "768px",
      av: "910px",
      lg: "1024px",
      xl: "1440px",
    },
    boxShadow: {
      form: "0 5px 30px 5px rgba(0, 0, 0, 0.25)",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

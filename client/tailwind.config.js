/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    screens: {
      sm: "380px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      acsent: "#B73225",
      secondary: "#004E7C",
      dark: "#283747",
      white: "#fff",
      "faded-pink": "#F4D1CE",
      "sky-blue": "#CFE6F4",
      "faded-blue": "#D7E3EF",
      gray: "#737373",
      "light-gray": "#BDBDBD",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};

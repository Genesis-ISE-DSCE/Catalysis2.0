/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#F4D9D9",
        "custom-blue": "#B1F8F2",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
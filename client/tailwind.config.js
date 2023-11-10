// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './src/pages/**/*.{html,jsx}',
//     './src/components/**/*.{html,jsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// }

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html",
   "./src/**/*.{vue,js,ts,jsx,tsx}",
   './src/pages/**/*.{html,jsx}',
       './src/components/**/*.{html,jsx}',],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
});
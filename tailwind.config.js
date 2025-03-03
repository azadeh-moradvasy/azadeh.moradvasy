/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
    "./node_modules/@fortawesome/fontawesome-free/**/*.js" // اضافه کردن FontAwesome
  ],

  theme: {
    extend: {},
  },
  plugins: [],
}

// module.exports = {
//   content: [
//     "./src/**/*.{html,js,jsx,ts,tsx}", 
//     "./node_modules/@fortawesome/fontawesome-free/**/*.js" // اضافه کردن FontAwesome
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// content: ["./src/**/*.{html,js}"],


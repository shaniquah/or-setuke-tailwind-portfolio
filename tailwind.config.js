/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    options: {
      safelist: [
        "bg-red-500",
        "text-green-600",
        "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent",
        "text-gray-100",
        "bg-primary-500",
        "bg-primary-600",
        "bg-gradient-to-r from-purple-400 to-pink-600",
        "bg-gradient-to-br from-blue-500 > via-purple-500 to-pink-500",
        "bg-slate-200",
        "bg-slate-800",
        "text-slate-200",
        "border-slate-200",
        'lightBlue',
        'warmGray',
        'trueGray',
        'coolGray',
        'blueGray',
        ''
      ],
    },
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
    },
  },
  plugins: [],
};

const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        accent: {
          darkest: "#585858",
          dark: "#F18D19",
          DEFAULT: "#0B66A4",
          hover: "#0D7CC8",
          light: "#ECC30A",
          light_hover: "#ECCF4A",
          lightest: "#EEEEEE",
          red: "#E71D2E",
          black: "#222222",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: 20,
      },
      colors: {
        primaryCyan: "hsl(180, 66%, 49%)",
        primaryCyanHover: "hsl(180, 66%, 70%)",
        mainText: "hsl(257, 27%, 26%)",
        parText: "hsl(257, 7%, 63%)",
      },
      animation: {
        loading: "loader 1s linear infinite",
      },

      keyframes: {
        loader: {
          from: {
            transform: "translateY(-50%) rotate(0)",
          },
          to: {
            transform: "translateY(-50%) rotate(2turn)",
          },
        },
      },
      backgroundImage: {
        "boost-desktop":
          "url(/src/images/bg-boost-desktop.svg)",
        "boost-mobile":
          "url(/src/images/bg-boost-mobile.svg)",
        "shorten-desktop":
          "url(/src/images/bg-shorten-desktop.svg)",
        "shorten-mobile":
          "url(/src/images/bg-shorten-mobile.svg)",
      },
    },
  },
  plugins: [],
};

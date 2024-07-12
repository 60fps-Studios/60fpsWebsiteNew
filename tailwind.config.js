/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:
    {
      animation: {
        meteor: "meteor 5s linear infinite",
      },

      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        neometric_alt: ["Neometric_Alt", "sans-serif"],
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
    transitionDuration: {
      '500': '500ms',
      '500': '500ms',
      '1500': '1500ms',
      '2000': '2000ms',
      '2500': '2500ms',
    },
  },
  plugins: [],
};

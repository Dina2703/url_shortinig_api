/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        darkViolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
      },
      fontWeight: {
        customNormal: "500",
        custombBold: "700",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      fontSize: {
        "6xl": [
          "4rem",
          {
            lineHeight: "4.2rem",
            letterSpacing: "-0.01em",
          },
        ],
      },
    },
  },
  plugins: [],
};

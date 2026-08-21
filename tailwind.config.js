/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF8F3",
        "paper-alt": "#F2EFE6",
        ink: "#181A16",
        slate: "#5B5D53",
        line: "#E4E0D2",
        accent: "#2F5233",
        "accent-soft": "#E7ECDF",
        rust: "#B5502E",
      },
      fontFamily: {
        display: [
          "Georgia",
          "Iowan Old Style",
          "Palatino Linotype",
          "Book Antiqua",
          "Palatino",
          "serif",
        ],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      maxWidth: {
        wrap: "1120px",
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(24,26,22,0.05) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

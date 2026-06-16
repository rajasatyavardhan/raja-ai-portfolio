export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        navy: "#172554",
        mist: "#f8fafc",
        line: "#dbe5f1",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(15, 23, 42, 0.10)",
        card: "0 16px 40px rgba(30, 41, 59, 0.08)",
      },
    },
  },
  plugins: [],
};

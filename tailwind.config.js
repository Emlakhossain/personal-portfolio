module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#4b5566",
            secondary: "#4b5564",
            accent: "#37cdbe",
            neutral: "#3d4451",
            "base-100": "#ffffff",
          },
        },
        "dark",
        "cupcake",
      ],
    },
    extend: {},

  },
  plugins: [require("daisyui")],
}

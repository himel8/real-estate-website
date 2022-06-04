module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Raleway', sans-serif",
        secondary: "'Rubik', sans-serif",
        normal: "'Roboto', sans-serif",
      },
      boxShadow: {
        btn: "inset 0 0 0 0 #555555",
        hoverBtn: "inset 300px 0 0 0 #555555",
        custom: "0px 0px 21px -5px rgb(0 0 0 / 70%)",
      },
      backgroundImage: {
        aboutBg: "url(assets/images/about-bg.jpg)",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Prompt', sans-serif",
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
        fullImgBg: "url(assets/images/home_bg.jpg)",
        firstSlider: "url(assets/images/slider-1.jpg)",
        secondSlider: "url(assets/images/slider-2.jpg)",
        thirdSlider: "url(assets/images/slider-3.jpg)",
        forthSlider: "url(assets/images/slider-4.jpg)",
        project1: "url(assets/images/1.jpg)",
        project2: "url(assets/images/2.jpg)",
        project3: "url(assets/images/3.jpg)",
        project4: "url(assets/images/4.jpg)",
        project5: "url(assets/images/5.jpg)",
        project6: "url(assets/images/6.png)",
      },
    },
  },
  plugins: [],
};

const swiperEl = document.querySelector(".messages__swiper");

const swiperParams = {
  slidesPerView: 1,
  breakpoints: {
    720: {
      slidesPerView: 2,
    },
  },
  pagination: {
    clickable: true,
  },
  navigation: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
};

Object.assign(swiperEl, swiperParams);

swiperEl.initialize();

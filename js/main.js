// new Swiper(".swiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   keyboard: {
//     enable: true,
//     onlyInViewport: true,
//   },
//   autoHight: true,
//   loop: true,
//   autoplay: {
//     delay: 10000,
//     disableOnInteraction: true,
//   },
//   speed: 1000,
//   effect: "fade",
// });

// Initialize horizontal slider
const firstSlider = new Swiper(".swiper-container__first", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enable: true,
    onlyInViewport: true,
  },
});

// Initialize vertical slider
const secondSlider = new Swiper(".swiper-container__second", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enable: true,
    onlyInViewport: true,
  },
  speed: 1000,
  // slidesPerView: 1,
  // watchOverflow: true,
  spaceBetween: 30,
  // slidesPerGroup: 3,
});

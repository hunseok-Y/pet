import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";

const bullet = ["대화", "추천병원"];
const swiper = new Swiper(".message__swiper", {
  spaceBetween: 20,
  speed: 1500,
  loop: true,
  // autoHeight은 slide height를 자동으로 맞춰줌
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<div class="' +
        className +
        '"><span>' +
        bullet[index] +
        "</span></div>"
      );
    },
  },
  navigation: {
    prevEl: ".chatting-btn",
    nextEl: ".hospital-btn",
  },
});

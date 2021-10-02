"use strict";
import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

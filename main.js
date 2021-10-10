"use strict";
import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";

const bullet = ["지식공간", "팔로잉"];
const swiper = new Swiper(".main-view__swiper", {
  spaceBetween: 20,
  speed: 1500,
  loop: true,
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
    prevEl: ".news-btn",
    nextEl: ".following-btn",
  },
});

const button = document.querySelector(".content__info-icon");

button.addEventListener("click", () => {
  const dropdown = document.querySelector(".content__discription");
  dropdown.style.display = "block";
});

button.addEventListener("blur", () => {
  const dropdown = document.querySelector(".content__discription");
  dropdown.style.display = "";
});

AOS.init();

"use strict";
import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";

const bullet = ["지식공간", "팔로잉"];
const swiper = new Swiper(".main-view__swiper", {
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
    prevEl: ".news-btn",
    nextEl: ".following-btn",
  },
});

// const button = document.querySelector(".content__info-icon");

// button.addEventListener("click", () => {
//   const dropdown = document.querySelector(".content__discription");
//   dropdown.style.display = "block";
// });

// button.addEventListener("blur", () => {
//   const dropdown = document.querySelector(".content__discription");
//   dropdown.style.display = "";
// });
const buttons = document.querySelectorAll(".content__info-icon");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    const { target } = event;
    const parent = target.closest(".content__info");
    const dropdown = parent.querySelector(".content__discription");
    dropdown.classList.add("is-active");
  });

  buttons[i].addEventListener("blur", () => {
    const { target } = event;
    const parent = target.closest(".content__info");
    const dropdown = parent.querySelector(".content__discription");
    dropdown.classList.remove("is-active");
  });
}

AOS.init();

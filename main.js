"use strict";
import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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

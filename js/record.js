new Chartist.Pie(
  ".ct-chart",
  {
    series: [1000, 600],
  },
  {
    donut: true,
    donutWidth: 10,
    donutSolid: true,
    startAngle: 270,
    showLabel: true,
  }
);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

AOS.init();

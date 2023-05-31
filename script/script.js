
window.addEventListener('resize', function () {
  if(this.innerWidth < 768) {
    let swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      width: 240,
      height: 72,
      spaceBetween: 16,
      speed: 400,

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        spaceBetween: 12,
      },
    });
  } else {
    swiper.destroy();
  }
});



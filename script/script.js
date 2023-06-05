const slider = document.querySelector('.swiper');

let brandSwiper;

function switchSlider() {
  if(window.innerWidth < 768 && slider.dataset.mobile == 'false') {
    brandSwiper = new Swiper(slider, {
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

    slider.dataset.mobile = 'true';
  };

  if (window.innerWidth >= 768) {
    slider.dataset.mobile = 'false';

    if(slider.classList.contains('swiper-initialized')){
      brandSwiper.destroy();
    }
  }
};

switchSlider();

window.addEventListener('resize', () => {
  switchSlider()
});


// !!

let readMore = document.querySelector('.main__about_show_more-btn');
let showTExt = document.querySelector('.main__about_text');

readMore.addEventListener('click', () => {
  showTExt.classList.toggle('main__about_text--show');
})



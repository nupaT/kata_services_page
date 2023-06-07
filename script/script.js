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

let readAboutBtn = document.querySelector('.main__about_show_more-btn');
let showAbout = document.querySelector('.main__about_text');

let expand = document.querySelector('.expand');

let readBrandsBtn = document.querySelector('.main__brands_show_more-btn');
let showBrands = document.querySelector('.swiper-wrapper');

readAboutBtn.addEventListener('click', () => {
  showAbout.classList.toggle('show');
  expand.classList.toggle('expand--opened');
});







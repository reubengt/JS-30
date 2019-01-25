const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;
const sliderImages = document.querySelectorAll('.slide-in');


function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}
function checkSlide(e){
  sliderImages.forEach(sliderImage => {
    //halfway through image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    //bottom of the image
    const imageBottom = sliderImage.getBoundingClientRect().top + document.documentElement.scrollTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.getBoundingClientRect().top + document.documentElement.scrollTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if(isHalfShown && isNotScrolledPast){
      sliderImage.classList.add('active');
    }
    else{
      sliderImage.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', checkSlide);
window.addEventListener('scroll', fixNav);

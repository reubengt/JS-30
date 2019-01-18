console.log('working');
function debounce(func, wait = 10, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
const slideItems = document.querySelectorAll('.slide-in');
function checkSlide(e){
  slideItems.forEach(slideItem => {
    let windowHeight = window.innerHeight;
    let scrollY = window.scrollY || window.pageYOffset;
    let scrollPosition = scrollY + windowHeight;
    let elementPosition = slideItem.getBoundingClientRect().top + scrollY + slideItem.clientHeight;
    if(scrollPosition > elementPosition) slideItem.classList.add('active');
  });
}

window.addEventListener('scroll', debounce(checkSlide));

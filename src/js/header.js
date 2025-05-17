const header = document.querySelector('header');
const up = document.querySelector('.up');
const main = document.querySelector('.main');

let lastScrollTop = 0;
 window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if(scrollTop > lastScrollTop) {
        up.classList.add('hidden');
        main.classList.add('fixed');
    }
    if(scrollTop === 0) {
        up.classList.remove('hidden');
        main.classList.remove('fixed');
    }

    lastScrollTop = scrollTop;
 });
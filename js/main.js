const header = document.querySelector('#header');
const navHeight = header.offsetHeight;
const menu = document.querySelector('#menu');


function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

menu.addEventListener('click', () => {
  menu.classList.add('ative');
});

window.addEventListener('scroll', () => {
  changeHeaderWhenScroll();
});
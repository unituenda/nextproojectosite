const header = document.querySelector('#header');
const navHeight = header.offsetHeight;
const menu = document.querySelector('#menu');
const infomenu = document.querySelector('#infomenu');

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

menu.addEventListener('click', () => {
  menu.classList.add('ative');
  infomenu.classList.add('ative');
});

window.addEventListener('scroll', () => {
  changeHeaderWhenScroll();
});
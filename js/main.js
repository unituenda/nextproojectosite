const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if(window.scrollY != 0 ) {
    nav.classList.remove('margin');
    nav.classList.add('marg');
  } else {
    nav.classList.remove('marg');
    nav.classList.add('margin');
  }
});
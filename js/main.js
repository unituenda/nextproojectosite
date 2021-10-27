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

menu.addEventListener('click', (e) => {
  if(menu.classList.contains('ative')) {
    menu.classList.remove('ative');
    infomenu.classList.remove('ative');
  } else {
    menu.classList.add('ative');
    infomenu.classList.add('ative');
  }
  
});


  infomenu.addEventListener('click', (e) => {
    console.log(e)
    if(menu.classList.contains('ative') && e.target.classList.contains('item')) {
      menu.classList.remove('ative');
      infomenu.classList.remove('ative');
    }
  });




window.addEventListener('scroll', () => {
  changeHeaderWhenScroll();
});
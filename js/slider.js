const info = document.querySelectorAll('.witness .witness-info .info');

const clickPosition = (e) => {

  if((0 - e) <= 0) {
    
  }
  info[0 + e].style.display = 'flex';
  info[1 + e].style.display = 'flex';
  info[2 + e].style.display = 'flex';

}

clickPosition(1);

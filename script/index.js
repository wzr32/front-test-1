const navBtn = document.getElementById('nav-mobile__btn');
const navMenu = document.getElementById('nav-mobile__options');

navBtn.onclick = () => {
  if (navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  } else {
    navMenu.classList.add('active');
  }

};
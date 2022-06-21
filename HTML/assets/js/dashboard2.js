//Toggle mobile menu
const menuToggleOpen = document.querySelector('.menu-toggle-open');
const menuToggleClose = document.querySelector('.menu-toggle-close');
const navMobileEl = document.querySelector('.nav-mobile');


menuToggleOpen.addEventListener('click', () => navMobileEl.classList.add('active'));
menuToggleClose.addEventListener('click', () => navMobileEl.classList.remove('active'));

//Toggle theme
const bodyEl = document.body;
const themeToggleBtn = document.querySelector('.theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');


if(currentTheme){
    bodyEl.classList.add('theme-light');
}

themeToggleBtn.addEventListener('click', () => {
   bodyEl.classList.toggle('theme-light');
   if (bodyEl.classList.contains('theme-light')){
       localStorage.setItem('currentTheme', 'themeActive');
   } else{
       localStorage.removeItem('currentTheme', 'themeActive');
   }
});

//Show dropdown menu
document.addEventListener('click', element => {
    const dropdown = document.querySelector('.dropdown');

    if(element.target.classList.contains('dropdown-btn')){
        dropdown.classList.add('active');
    } else{
        dropdown.classList.remove('active');
    }
});
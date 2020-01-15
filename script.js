let menu = document.getElementById("js-menu");
let navContainer = document.getElementById("nav");
let buttonActive = document.getElementById('button');
let logo = document.getElementsByClassName('logo-image')[0];
let navItems = document.getElementsByClassName('nav-links');
let navLinks = [];

toggleClasses = () => {
  buttonActive.classList.toggle('active');
  menu.classList.toggle('active');
  navContainer.classList.toggle('active'); 
  logo.classList.toggle('active'); 
}

for (let i = 0 ; i < navItems.length; i ++) {
  navLinks.push(navItems[i]);
}

buttonActive.addEventListener('click', (e) => { 
    e.preventDefault();
    toggleClasses();
    navLinkClicked();
});
  


function navLinkClicked() {
  navLinks.forEach((ele) => {
    ele.addEventListener('click', (e) =>{
      logo.classList.remove('active');
      menu.classList.remove('active');
      buttonActive.classList.remove('active');
      navContainer.classList.remove('active');
    });
  })
}

 
  
document.addEventListener("DOMContentLoaded", (event) => { 
  setTimeout(() =>{
    document.getElementById("overlay").style.display = 'none'; 
    }, 5000
  )});
let menu = document.getElementById("js-menu");
let navContainer = document.getElementById("nav");
let buttonActive = document.getElementById('button');
let logo = document.getElementsByClassName('logo-image')[0];

buttonActive.addEventListener('click', function(e) { 
    e.preventDefault();
    logo.classList.toggle('active');
    buttonActive.classList.toggle('active');
    menu.classList.toggle('active');
    navContainer.classList.toggle('active');   
  });   
  
  // document.addEventListener('DOMContentLoaded', setTimeout(function(){
  //   document.getElementById("overlay").style.display = 'none'; 
  //  }, 3300
  // ));


  document.addEventListener("DOMContentLoaded", function(event) { 
    setTimeout(function(){
      document.getElementById("overlay").style.display = 'none'; 
     }, 5000
    )});
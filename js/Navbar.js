var prevScrollpos = window.pageYOffset;
var nav = document.getElementById('Navbar');
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.classList.add('fixed_navbar');
  }if(prevScrollpos <= currentScrollPos || currentScrollPos <= 200) {
   nav.classList.remove('fixed_navbar');
  }
  prevScrollpos = currentScrollPos;
  console.log(prevScrollpos, currentScrollPos);
  
}

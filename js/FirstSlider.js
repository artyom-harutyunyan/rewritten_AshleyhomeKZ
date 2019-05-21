var slideindex = 1;
showSlides(slideindex);

function plusSlide() {
    showSlides(slideindex += 1);
}
function minusSlide() {
    if (plusSlide()) {
        showSlides(slideIndex = slideIndex--);
    }
    //    console.log(slideindex);
 
    
}
function currentSlide(n) {
    showSlides(slideindex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('SliderItems');
    if(n > slides.length) {
        slideindex = 1
    }
    if (n < 1) {
        slideindex = slides.length
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideindex - 1].style.display = "block";
}


document.onkeydown = function() {IsTrue()}
function IsTrue() {
    var name = event.keyCode;
    let left = 37;
    let right = 39;
    if(name === left) {
        minusSlide()
    }else if(name === right) {
        plusSlide()
    }
}
var SecondSlideIndex = 1;
var subIndex = 1;
SecondShowSlides(SecondSlideIndex);
function plusSecondSlide() {
    SecondShowSlides(SecondSlideIndex += 1);
}

function minusSecondSlide() {
    SecondShowSlides(SecondSlideIndex -= 1);  
}

function currentSecondSlide(n) {
    SecondShowSlides(SecondSlideIndex = n);
}

function SecondShowSlides(n) {
    var i;
    var slides = document.getElementsByClassName("OwSliderItems");
    var dots = document.getElementsByClassName("selectorItems");
    var subSlides = document.getElementsByClassName('OwDescription');
    if (n > slides.length ) {
      SecondSlideIndex = 1
    }
    if (n < 1) {
        SecondSlideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active_selector", "");
    }
    slides[SecondSlideIndex - 1].style.display = "block";
    dots[SecondSlideIndex - 1].className += " active_selector";
}

// var SecondSlideIndex = 1;
// var subIndex = 1;
// SecondShowSlides(SecondSlideIndex);
// SecondShowSlides(subIndex);
// function plusSecondSlide() {
//     SecondShowSlides(SecondSlideIndex += 1);
//     SecondShowSlides(subIndex += 1);
// }

// function minusSecondSlide() {
//     SecondShowSlides(SecondSlideIndex -= 1);  
//     SecondShowSlides(subIndex -= 1);
// }

// function currentSecondSlide(n) {
//     SecondShowSlides(SecondSlideIndex = n);
//     SecondShowSlides(subIndex = m);
// }

// function SecondShowSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("OwSliderItems");
//     var dots = document.getElementsByClassName("selectorItems");
//     var subSlides = document.getElementsByClassName('OwDescription');
//     if (n > slides.length ) {
//       SecondSlideIndex = 1;
//       subIndex = 1;
//     }
//     if (n < 1) {
//         SecondSlideIndex = slides.length;
//         subIndex = subSlides.length;
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//         subIndex[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active_selector", "");
//     }
//     slides[SecondSlideIndex - 1].style.display = "block";
//     dots[SecondSlideIndex - 1].className += " active_selector";
// }
//next-prev picture
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
    var l;
    var slides = document.getElementsByClassName("img-size");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (l = 0; l < slides.length; l++) {
        slides[l].style.display = "none";
     }
    slides[slideIndex-1].style.display = "block";
}
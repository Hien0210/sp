//-----------------slide----------------
var slideIndex = 0;
showSlides();
var slides, dots;

function showSlides() {
    var i;
    slides = document.getElementsByClassName('mySlides');
    dots = document.getElementsByClassName('dot');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    setTimeout(showSlides, 5000);
}

function plusSlides(position) {
    slideIndex += position;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

function currentSlide(index) {
    if (index > slides.length) {
        index = 1;
    } else if (index < 1) {
        index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[index - 1].style.display = 'block';
    dots[index - 1].className += ' active';
}

//---------------slide1------------------
var slideIndex1 = 0;
showSlides1();
var slides1, dots1;

function showSlides1() {
    var i;
    slides1 = document.getElementsByClassName('mySlides1');
    dots1 = document.getElementsByClassName('dot1');
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = 'none';
    }
    slideIndex1++;
    if (slideIndex1 > slides1.length) {
        slideIndex1 = 1;
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(' active1', '');
    }
    slides1[slideIndex1 - 1].style.display = 'block';
    dots1[slideIndex1 - 1].className += ' active1';
    setTimeout(showSlides1, 40000);
}

function plusSlides1(position) {
    slideIndex1 += position;
    if (slideIndex1 > slides1.length) {
        slideIndex1 = 1;
    } else if (slideIndex1 < 1) {
        slideIndex1 = slides1.length;
    }
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = 'none';
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(' active1', '');
    }
    slides1[slideIndex1 - 1].style.display = 'block';
    dots1[slideIndex1 - 1].className += ' active1';
}

function currentSlide1(index) {
    if (index > slides1.length) {
        index = 1;
    } else if (index < 1) {
        index = slides1.length;
    }
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = 'none';
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(' active1', '');
    }
    slides1[index - 1].style.display = 'block';
    dots1[index - 1].className += ' active1';
}
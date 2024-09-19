let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Auto Slide (optional)
setInterval(() => {
    plusSlides(1);
}, 5000); // Change image every 5 seconds


// Product Page //

let customSlideIndex = 0;
customShowSlides();

// Function to display slides
function customShowSlides() {
    let i;
    let slides = document.getElementsByClassName("custom-slide");
    let dots = document.getElementsByClassName("custom-dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    customSlideIndex++;
    if (customSlideIndex > slides.length) {customSlideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" custom-active", "");
    }
    slides[customSlideIndex-1].style.display = "block";  
    dots[customSlideIndex-1].className += " custom-active";
    setTimeout(customShowSlides, 4000); // Change slide every 4 seconds
}

// Next/previous controls
function customPlusSlides(n) {
    customShowSpecificSlide(customSlideIndex += n);
}

// Thumbnail image controls
function customCurrentSlide(n) {
    customShowSpecificSlide(customSlideIndex = n);
}

function customShowSpecificSlide(n) {
    let i;
    let slides = document.getElementsByClassName("custom-slide");
    let dots = document.getElementsByClassName("custom-dot");
    if (n > slides.length) {customSlideIndex = 1}
    if (n < 1) {customSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" custom-active", "");
    }
    slides[customSlideIndex-1].style.display = "block";
    dots[customSlideIndex-1].className += " custom-active";
}

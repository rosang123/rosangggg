

let slideIndex = 0; // Start from the first slide
showSlides(); // Display the first slide initially

function showSlides() {
    let i;
    let slides = document.querySelectorAll('.slider-container img');
    let dots = document.querySelectorAll('.dot');

    console.log('Slides:', slides);
    console.log('Dots:', dots);
    console.log('Current slide index:', slideIndex);

    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");
    // Remove 'active' class from all dots
    dots.forEach(dot => dot.classList.remove("active"));

    // Wrap around if slideIndex is out of bounds
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    // Show the current slide and highlight the corresponding dot
    if (slides[slideIndex]) {
        slides[slideIndex].style.display = "block";
    }
    if (dots[slideIndex]) {
        dots[slideIndex].classList.add("active");
    }
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

// Auto-slide every 5 seconds
setInterval(() => {
    plusSlides(1);
}, 5000);

console.log()
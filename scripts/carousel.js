document.addEventListener("DOMContentLoaded", function () {
    // Variables for adjusting the movement and display
    const slidesToShow = 6;
    const movementWidth = 100;

    // Each slide contains one logo to be displayed
    const slides = document.querySelectorAll(".slide");

    // Each element of the array corresponds to 1 slide
    // Used for positioning
    let slideIds = Array(slides.length);

    // Set initial position of slides and initialise the ID array
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${movementWidth * index}%)`;
        slideIds[index] = index;
        toggleDisplayForHiddenItems()
    });

    const nextSlide = document.querySelector(".btn-carousel-next");
    nextSlide.addEventListener("click", function () {
        slides.forEach((slide, index) => {
            slideIds[index] -= slidesToShow;
            moveSlide(slide, index);
        });
    });

    const prevSlide = document.querySelector(".btn-carousel-prev");
    prevSlide.addEventListener("click", function () {
        slides.forEach((slide, index) => {
            slideIds[index] += slidesToShow;
            moveSlide(slide, index);
        });
    });

    function moveSlide(slide, index) {
        // These ifs are used to wrap the values around
        // so that they stay within 0 and slides.length
        if (slideIds[index] < 0) {
            slideIds[index] += slideIds.length;
        }
        if (slideIds[index] >= slidesToShow) {
            slideIds[index] -= slideIds.length;
        }
        toggleDisplayForHiddenItems()
        slide.style.transform = `translateX(${movementWidth * slideIds[index]}%)`;
    }

    function toggleDisplayForHiddenItems() {
        slides.forEach((slide, index) => {
            if (slideIds[index] < 0 || slideIds[index] >= slidesToShow) {
                slide.style.display = "none";
            } else {
                slide.style.display = "block";
            }
        });

    }
});
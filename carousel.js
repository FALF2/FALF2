const carousel = document.getElementById("carousel");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0;

    function showSlide(index) {
        const newPosition = -index * 100 + "%";
        carousel.style.transform = "translateX(" + newPosition + ")";
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = carousel.children.length - 1;
        }
        showSlide(currentIndex);
    }

    function nextSlide() {
        if (currentIndex < carousel.children.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
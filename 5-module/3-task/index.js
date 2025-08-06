function initCarousel() {
    let arrowLeft = document.querySelector('.carousel__arrow_left');
    let arrowRight = document.querySelector('.carousel__arrow_right');
    let carouselInner = document.querySelector('.carousel__inner');
    let carouselSlide = document.querySelectorAll('.carousel__slide');


    let currentOffset = 0;
    let currentSlideIndex = 0;
    let slideWidth = carouselInner.offsetWidth;
    arrowLeft.style.display = 'none';

    arrowRight.addEventListener('click', function () {
        if (currentSlideIndex < carouselSlide.length - 1) {
            currentSlideIndex++
            currentOffset -= slideWidth;
            carouselInner.style.transform = `translateX(${currentOffset}px)`;
        }
        updateArrows()
    });

    arrowLeft.addEventListener('click', function () {
        if (currentSlideIndex > 0) {
            currentSlideIndex--
            currentOffset += slideWidth;
            carouselInner.style.transform = `translateX(${currentOffset}px)`;
        }
        updateArrows()
    });


    function updateArrows() {
        if (currentSlideIndex === 0) {
            arrowLeft.style.display = 'none'
        } else {
            arrowLeft.style.display = ''
        }
        if (currentSlideIndex === carouselSlide.length - 1) {
            arrowRight.style.display = 'none'
        } else {
            arrowRight.style.display = ''
        }
    }
}

initCarousel(); // после того, как эта функция выполнится, в карусели должны начать переключаться слайды

const carousel = document.getElementById('carousel');
    const indicatorsContainer = document.getElementById('indicators');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    const visibleSlides = 1;
    let currentIndex = 0;
    let autoSlideInterval;

    // Create indicators
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.setAttribute('data-index', i);
        indicator.onclick = () => goToSlide(i);
        indicatorsContainer.appendChild(indicator);
    }

    const updateIndicators = () => {
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    };

    const goToSlide = (index) => {
        currentIndex = index;
        updateCarousel();
    };

    const updateCarousel = () => {
        const offset = -(currentIndex * (100 / visibleSlides));
        carousel.style.transform = `translateX(${offset}%)`;
        updateIndicators();
    };

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    // Start auto slide
    startAutoSlide();
const carouselInnerWeb = document.querySelector('.carousel-web');
const carouselWeb = carouselInnerWeb.querySelectorAll('.carousel-item');
const totalItemsWeb = carouselWeb.length;
let currentIndexWeb = 0;

document.querySelector('.carousel-control.left.web').addEventListener('click', () => {
    currentIndexWeb = (currentIndexWeb - 1 + totalItemsWeb) % totalItemsWeb;
    updateCarouselWeb();
});

document.querySelector('.carousel-control.right.web').addEventListener('click', () => {
    currentIndexWeb = (currentIndexWeb + 1) % totalItemsWeb;
    updateCarouselWeb();
});

function updateCarouselWeb() {
    const offset = -currentIndexWeb * 100;
    carouselInnerWeb.style.transform = `translateX(${offset}%)`;
}

const carouselInnerMobile = document.querySelector('.carousel-mobile');
const carouselMobile = carouselInnerMobile.querySelectorAll('.carousel-item');
const totalItemsMobile = carouselMobile.length;
let currentIndexMobile = 0;

document.querySelector('.carousel-control.left.mobile').addEventListener('click', () => {
    currentIndexMobile = (currentIndexMobile - 1 + totalItemsMobile) % totalItemsMobile;
    updateCarouselMobile();
});

document.querySelector('.carousel-control.right.mobile').addEventListener('click', () => {
    currentIndexMobile = (currentIndexMobile + 1) % totalItemsMobile;
    updateCarouselMobile();
});

function updateCarouselMobile() {
    const offset = -currentIndexMobile * 100;
    carouselInnerMobile.style.transform = `translateX(${offset}%)`;
}
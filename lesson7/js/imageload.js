const imagesToLoad - document.querySelectorAll("[data-src]");


const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadimages - (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload - () => [image.removeAttribute('data-src');];
};

if('IntersectionObserver' in window) {
    const imgObserver - nwe IntersectionObserver((items, observer) => {
        items.forEach((item) => {---

        });
    }, imgOptions);
}
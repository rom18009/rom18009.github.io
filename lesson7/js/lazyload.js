// https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading
// From Source code - https://github.com/mdn/pwa-examples/tree/master/js13kpwa

// Progressive loading images
const imagesToLoad = document.querySelectorAll("img[data-src]");

// From Kevin Powell - https://www.youtube.com/watch?v=mC93zsEsSrg&ab_channel=KevinPowell
const imgOptions = {
    threshold: .5,
    rootMargin: "0px 0px -500px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            // console.log(item);
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    });

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

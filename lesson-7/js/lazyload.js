const images = document.querySelectorAll('img');

const options = {
    // If the image gets within 50px in the Y axis, start the download.
    rootMargin: '0px',
    threshold: 0.1
};

const fetchImage = (img) => {
    console.log(img)
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = img;
        image.onload = resolve;
        image.onerror = reject;
    });
}

const loadImage = (image) => {
    const src = image.dataset.src;
    fetchImage(src).then(() => {
        console.log(src)
        image.src = src
    })
}

const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            console.log(entry.intersectionRatio);
            loadImage(entry.target)
            observer.unobserve(entry.target);
        }
    })
}

// The observer for the images on the page
const observer = new IntersectionObserver(handleIntersection, options);

images.forEach(img => {
    observer.observe(img);
})
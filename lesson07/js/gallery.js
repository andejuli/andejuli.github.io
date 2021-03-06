const images = document.querySelectorAll('[data-src]');

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if(!source) {
        return;
    }

    img.src = source;
}

const options = {
    threshold: .5,
    rootMargin: "-50px"
};

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                console.log(entry.target);
                preloadImage(entry.target);
                io.unobserve(entry.target); 
            }
        });     
    }, options
);


images.forEach(image => {
    io.observe(image);
});


/* https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/ */
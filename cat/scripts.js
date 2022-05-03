let tl = gsap.timeline();

function eyes() {
    tl.to('#center', {
        opacity: 1,
        duration: .5
    }).to('#right', {
        opacity: 1,
        duration: .5
    }).to('.para', {
        opacity: 1,
        duration: 2,
        y: 80,
        ease: Bounce.easeIn,
        stagger: {
        each: .25,
        from: "top"
        
        }
    });
}
document.querySelector('button').addEventListener('click',eyes);


gsap.registerPlugin(ScrollTrigger);

setTimeout(function(){
    let title = document.querySelector('.title');
    title.setAttribute('style', 'visibility: visible;');
}, 3000);
document.addEventListener('load', setTimeout);

function setVisible(){
    let title = document.querySelector('.title');
    title.setAttribute('style', 'height: 0vh');
};
let titlestay = document.querySelector('.title');
titlestay.addEventListener('animationend', setVisible);

const title = gsap.timeline();

title.to('video', {
    duration: 3
}).to('video', {
    opacity: 0
});
    
const tl = gsap.timeline();
const tl2 = gsap.timeline();
const tl3 = gsap.timeline();
const tl4 = gsap.timeline();
  
    tl.from(".wounded-text", {
        opacity: 0, scale: 0, duration: 1
    }).to('.wounded-text', {
        opacity: 1, scale: 1, duration: 2
    }).to('.wounded-text', {
        opacity: 0, scale: 0, duration: 1
    });
  
    tl2.from('.priest-text', { 
        opacity: 0, scale: 0, duration: 1 
    }).to('.priest-text', {
        opacity: 1, scale:1, duration: 2
    }).from('.priest', {
        x: '-100vw', duration: 10
    }).to('.priest', {
        x: '100vw', duration: 10
    }).to('.priest-text', {
        opacity: 0, scale: 0, duration: 1 
    });

    tl3.from('.levite-text', { 
        opacity: 0, scale: 0, duration: 1 
    }).to('.levite-text', {
        opacity: 1, scale:1, duration: 2
    }).from('.levite', {
        x: '-100vw', duration: 10
    }).to('.levite', {
        x: '100vw', duration: 10
    }).to('.levite-text', {
        opacity: 0, scale: 0, duration: 1 
    });
    
    tl4.from(".samaritan-text", {
        opacity: 0, scale: 0, duration: 1 
    }).to('.samaritan-text', {
        opacity: 1, scale: 1, duration: 2
    }).from(".samaritan", {
        opacity: 0, scale: 0, duration: 2
    }).to(".samaritan", {
        opacity: 1, scale: 1, duration: 2
    }).to('.samaritan-text', {
        opacity: 0, scale: 0, duration: 2
    }).to(".samaritan", {
        opacity: 0, duration: 1
    });

    ScrollTrigger.create({
        //markers: true,
        animation: tl,
        trigger: ".scroll-box1",
        start: "top 40%",
        end: "center 5%",
        scrub: 2,
        pin: true,
        pinSpacing: false
    });

    ScrollTrigger.create({
        //markers: true,
        animation: tl2,
        trigger: ".scroll-box2",
        start: "top 25%",
        end: "center 5%",
        scrub: 2,
        pin: true,
        pinSpacing: false
    });

    ScrollTrigger.create({
        //markers: true,
        animation: tl3,
        trigger: ".scroll-box3",
        start: "top 28%",
        end: "center 5%",
        scrub: 2,
        pin: true,
        pinSpacing: false
    });

    ScrollTrigger.create({
        //markers: true,
        animation: tl4,
        trigger: ".scroll-box4",
        start: "top 40%",
        end: "center 5%",
        scrub: 2,
        pin: true,
        pinSpacing: false
    });


import './style.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const circle = document.querySelector('.js-circle');
const flag = document.querySelector('.js-flag');
const image1 = document.querySelector('.js-image-1')
const image2 = document.querySelector('.js-image-2')

gsap.to(circle, {
    yPercent: 100,
    ease: "none",
    scrollTrigger: {
        scrub: true
    },
});

gsap.to(flag, {
    scale: 4,
    ease: "none",
    scrollTrigger: {
        scrub: true
    },
});

gsap.fromTo(image1, {
    yPercent: 100
}, {
    yPercent: 0,
    duration: 1,
    ease: "power2.out"
});

gsap.fromTo(image2, {
    xPercent: 100
}, {
    xPercent: 0,
    duration: 1,
    ease: "power2.out"
});
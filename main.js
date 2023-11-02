import './style.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const circle = document.querySelector('.js-circle');
const flag = document.querySelector('.js-flag');

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
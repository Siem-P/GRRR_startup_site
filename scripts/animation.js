gsap.registerPlugin(ScrollTrigger);


// Company name - Landing Page
gsap.from(".company-name", {
    y: -200,
    ease: Power3.easeOut,
    duration: 2,
    delay: 2,
});


// H1 - Landing view 
gsap.from(".hero-intro h1", {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    duration: 1.2,
    delay: .5,
});

// 
// gsap.to(".company-name", {
//     scrollTrigger: {
//         trigger: ".advertisement-section",
//         markers: true,
//         start: "top 10%",
//         end: "bottom 100%",
//         scrub: true,
//     },
//     color: "var(--neon-green)",
//     backgroundColor: "var(--black)",
//     duration: 1
    
// })

// Five-Zero's
gsap.from(".five-zero-section > span", {
    scrollTrigger: {
        trigger: ".five-zero-section",
        start: "top 70%",
        // end: "bottom 90%",
        // markers: true,
        // scrub: true,
        toggleActions: "play none none pause"
    },
    stagger: 0.2,
    x: -1000,
    duration: 0.7,
    ease: Circ.easeOut
});


// GRRR Portfolio right to left animation 
gsap.from("#whos-behind-this-article .portfolio-image", {
    scrollTrigger: {
        trigger: "#whos-behind-this-article",
        start: "center 40%",
        end: "bottom 80%",
        // markers: true,
        toggleActions: "play none none pause",
    },
    x: 500,
    duration: 1,
    ease: Power2.easeOut
})
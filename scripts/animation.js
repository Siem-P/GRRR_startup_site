gsap.registerPlugin(ScrollTrigger);


gsap.from(".hero-intro h1", {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    duration: 1.2,
    delay: .5,
});

// Company name - Landing Page
gsap.from(".company-name", {
    x: -300,
    ease: Power3.easeOut,
    duration: 2,
    delay: 1,
});

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
gsap.from(".image-wrapper .portfolio-image", {
    scrollTrigger: {
        trigger: ".whos-behind-this-article",
        start: "top 30%",
        end: "bottom 80%",
        // markers: true,
        toggleActions: "play none none none",
    },
    
    stagger: 0.5,
    x: 500,
    duration: 1,
    ease: Power2.easeOut
})


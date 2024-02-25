function section1() {
    let tl = gsap.timeline();

    tl.from(".navbar, .navbar-links, .navbar-logo", {
        opacity: 0,
        y: -80,
        stagger: 0.1,
        delay: 0.7, // Delay starting this animation by 0.5 seconds
    })
    .from(".hero-intro, .hero-title, .hero-desc, .hero-buttons", {
        opacity: 0,
        x: -150,
        stagger: 0.1,
    })
    .from(".home-scroll-mouse, .home-scroll-text, .home-scroll-box", {
        opacity: 0,
        y: -30,
        stagger: 0.1,
    });
}

function section2() {
    gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

    let t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".services", // Replace with your section's class or ID
            start: "top center", // Animation will start when the top of the section hits the center of the viewport
            // You can adjust "start" and "end" according to your needs
            end: "bottom center",
            toggleActions: "play none none none", // Defines what happens to the animation at start, end, enter, and leave. Here, it only plays at the start.
            // You can use "restart pause resume reverse" or other combinations based on your requirements
        }
    });

    t2.from(".services, service-text-container, .service-container, .service-heading, .service-desc, .service-hr", {
        opacity: 0,
        y: -80,
        stagger: 0.2,
    });
}

barba.init({
    transitions: [
        {
            name: "pageTransitions",
            once({current, next, trigger}){
                let tl = gsap.timeline();
                tl.to(".cover span", {
                    y : "-100%",
                    stagger: 0.2
                });
                tl.to(".cover", {
                    y: "-100%",
                    opacity: 0
                });

                return tl;
            },
            leave({current, next, trigger}){
                let tl = gsap.timeline();
                tl.to(".cover span", {
                    y : "0%",
                    stagger: 0.2
                });
                tl.to(".cover", {
                    y: "0%",
                    opacity: 0
                });
                return tl;
            },
            enter({current, next, trigger}){
                let tl = gsap.timeline();
                tl.to(".cover span", {
                    y : "-100%",
                    stagger: 0.2
                });
                tl.to(".cover", {
                    y: "-100%",
                    opacity: 0
                });
                return tl;
            },
            beforeEnter({current, next, trigger}){
                gsap.set(current.container, {
                    display: "block"
                });
            }
        }
    ]
});

section1();
section2();

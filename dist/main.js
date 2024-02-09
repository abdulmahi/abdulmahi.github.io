function section1() {
    let tl = gsap.timeline();

    tl.from(".navbar, .navbar-links, .navbar-logo",{
        opacity: 0,
        y: -80,
        stagger: 0.1,
    });

    tl.from(".hero-intro, .hero-title, .hero-desc, .hero-buttons",
    {
        opacity: 0,
        x: -150,
        stagger: 0.1,
    });

    // tl.from(".cube",
    // {
    //     x: 150,
    //     opacity: 0,
    //     stagger: 0.1,
    // });

    tl.from(".home-scroll-mouse, .home-scroll-text, .home-scroll-box",{
        opacity: 0,
        y: -30,
        stagger: 0.1,
    });

}

section1();

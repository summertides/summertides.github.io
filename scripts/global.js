import LocomotiveScroll from "../node_modules/locomotive-scroll";

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

var lastScrollTop = 0;
var hiddenObject = document.querySelector('nav');

scroll.on('scroll', function (args) {
    var currentScroll = args.scroll.y;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        hiddenObject.style.opacity = '0';
        hiddenObject.style.top = '0vh';
    } else {
        // Scrolling up
        hiddenObject.style.opacity = '1';
        hiddenObject.style.top = '5vh';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
const menuToggle = document.querySelector('.menu-toggle');
const navBg = document.querySelector('#nav-backdrop');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');

    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
});

navBg.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
})
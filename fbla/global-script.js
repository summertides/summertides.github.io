const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');

    document.body.dataset.navigation = document.body.dataset.navigation === "true" ? "false" : "true";
});

const backbutton = document.getElementById('nav-back');

backbutton.addEventListener('click', () => {
    document.body.dataset.selection = "home"
})

const selection1 = document.getElementById('nav3');

selection1.addEventListener('click', () => {
    document.body.dataset.selection = "services"
});
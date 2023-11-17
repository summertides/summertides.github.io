window.onload = function () {
    const selection1 = document.getElementById('nav3');
    const backbutton = document.querySelector('.nav-back');
    const menuToggle = document.querySelector('.menu-toggle');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
    
        document.body.dataset.navigation = document.body.dataset.navigation === "true" ? "false" : "true";
        document.body.dataset.selection = "home"
    });

    selection1.addEventListener('click', () => {
        document.body.dataset.selection = "services"
    })

    backbutton.addEventListener('click', () => {
        document.body.dataset.selection = "home"
    });
}
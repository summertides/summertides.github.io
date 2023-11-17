window.onload = function () {
    const selection1 = document.getElementById('nav3');
    const selection2 = document.getElementById('nav4');
    const backbutton1 = document.querySelector('#nav-back1');
    const backbutton2 = document.querySelector('#nav-back2');
    const menuToggle = document.querySelector('.menu-toggle');
    const selected = document.getElementsByClassName('nav-opts');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
    
        document.body.dataset.navigation = document.body.dataset.navigation === "true" ? "false" : "true";
        document.body.dataset.selection = "home"
    });
    
    selection1.addEventListener('click', () => {
        document.body.dataset.selection = "services"
    });

    backbutton1.addEventListener('click', () => {
        document.body.dataset.selection = "home"
    });

    backbutton2.addEventListener('click', () => {
        document.body.dataset.selection = "home"
    });

    selection2.addEventListener('click', () => {
        document.body.dataset.selection = "journal"
    });
}
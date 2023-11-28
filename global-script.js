window.onload = function () {
    const selection1 = document.getElementById('nav3');
    const selection2 = document.getElementById('nav4');
    const backbutton1 = document.querySelector('#nav-back1');
    const backbutton2 = document.querySelector('#nav-back2');
    const menuToggle = document.querySelector('.menu-toggle');
    const opt1 = document.getElementById('nav1');
    const opt2 = document.getElementById('nav2');
    const opt3 = document.getElementById('nav5');
    const opt4 = document.getElementById('nav6');
    const opt5 = document.getElementById('nav-s1');
    const opt6 = document.getElementById('nav-s2');
    const opt7 = document.getElementById('nav-s3');
    const opt8 = document.getElementById('nav-s4');
    const opt9 = document.getElementById('nav-j1');
    const opt10 = document.getElementById('nav-j2');
    const opt11 = document.getElementById('nav-j3');
    
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

    opt1.addEventListener('click', () => {
        document.body.dataset.navigation = "false"
        menuToggle.classList.toggle('active');
    });

    opt2.addEventListener('click', () => {
        document.body.dataset.navigation = "false"
        menuToggle.classList.toggle('active');
    });

    opt3.addEventListener('click', () => {
        document.body.dataset.navigation = "false"
        menuToggle.classList.toggle('active');
    });

    opt4.addEventListener('click', () => {
        document.body.dataset.navigation = "false"
        menuToggle.classList.toggle('active');
    });

    opt5.addEventListener('click', () => {
        document.body.dataset.navigation = "false"
        menuToggle.classList.toggle('active');
    });

    opt6.addEventListener('click', () => {
        document.body.dataset.navigation = "false"
        menuToggle.classList.toggle('active');
    });

    opt7.addEventListener('click', () => {
        document.body.dataset.navigation = "false"
        menuToggle.classList.toggle('active');
    });

    opt8.addEventListener('click', () => {
        document.body.dataset.navigation = "false"
        menuToggle.classList.toggle('active');
    });

    opt9.addEventListener('click', () => {
        document.body.dataset.navigation = "false"
        menuToggle.classList.toggle('active');
    });

    opt10.addEventListener('click', () => {
        document.body.dataset.navigation = "false"
        menuToggle.classList.toggle('active');
    });

    opt11.addEventListener('click', () => {
        document.body.dataset.navigation = "false"
        menuToggle.classList.toggle('active');
    });
}
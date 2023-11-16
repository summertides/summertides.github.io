const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", ()=>{
    menuToggle.classList.toggle("active");
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
});

//# sourceMappingURL=nonprofit.e0474867.js.map

// Cambia el fondo de la navbar al hacer scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#121212";
    } else {
        navbar.style.background = "rgba(0,0,0,.55)";
    }
});

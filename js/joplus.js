const BIENVENIDAS = document.getElementById("bienvenidas");

document.addEventListener("width", function () {
    if (window.innerWidth < 560) {
        navbar.classList.replace("nav--transp", "bg-weiss");

    } else {
        navbar.classList.replace("bg-weiss", "nav--transp");
    }
});
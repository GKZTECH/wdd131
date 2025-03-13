document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu Toggle
    const menuButton = document.querySelector("#menu-button");
    const navMenu = document.querySelector("nav ul");

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("show");
        menuButton.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
    });

    // Footer Dynamic Date
    document.querySelector("#year").textContent = new Date().getFullYear();
    document.querySelector("#lastModified").textContent = document.lastModified;
});

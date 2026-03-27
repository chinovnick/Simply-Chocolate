const menuBtn = document.getElementById("menu-button");
const closeBtn = document.getElementById("close-button");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
});
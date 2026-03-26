document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    const card = document.querySelector(".card");

    next.addEventListener("click", () => {
        slider.scrollLeft += card.offsetWidth + 50;
    });

    prev.addEventListener("click", () => {
        slider.scrollLeft -= card.offsetWidth + 50;
    });
});
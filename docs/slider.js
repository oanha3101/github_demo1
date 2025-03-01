document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scroll-container");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 0;
    const totalItems = document.querySelectorAll(".tour-item").length;

    function updateActiveDot() {
        dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    }

    function moveSlide(step) {
        index = (index + step + totalItems) % totalItems;
        scrollContainer.scrollLeft = index * scrollContainer.clientWidth;
        updateActiveDot();
    }

    nextBtn.addEventListener("click", () => moveSlide(1));
    prevBtn.addEventListener("click", () => moveSlide(-1));

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            index = i;
            scrollContainer.scrollLeft = index * scrollContainer.clientWidth;
            updateActiveDot();
        });
    });

    setInterval(() => moveSlide(1), 3000); // Tự động chuyển slide sau 3 giây
});

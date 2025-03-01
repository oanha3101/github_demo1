document.addEventListener("DOMContentLoaded", function() {
    fetch("form.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("form-container").innerHTML = data;
        })
        .catch(error => console.error("Lỗi khi tải form:", error));

    // Xử lý khi nhấn nút "Đặt Ngay"
    document.querySelectorAll(".btn-secondary, .fixed-booking").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Ngăn chặn nhảy trang
            document.getElementById("dang-ky").scrollIntoView({ behavior: "smooth" });
        });
    });
});
/* không biết có dùng được không */
// Kiểm tra chế độ hiện tại khi tải trang
window.onload = function () {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
};

// Hàm chuyển chế độ
function toggleDarkMode() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'false');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'true');
    }
}

// Kiểm tra chế độ hiện tại khi tải trang
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Nếu đã có chế độ tối trong localStorage, áp dụng nó
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggleButton.textContent = "Light"; // Nếu chế độ tối, hiển thị Light
} else {
    themeToggleButton.textContent = "Night"; // Nếu không có chế độ tối, hiển thị Night
}

// Lắng nghe sự kiện click vào nút chuyển đổi chế độ
themeToggleButton.addEventListener('click', () => {
    // Chuyển đổi giữa chế độ tối và sáng
    body.classList.toggle('dark-mode');
    
    // Lưu trạng thái chế độ vào localStorage để giữ khi người dùng tải lại trang
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark'); // Lưu chế độ tối
        themeToggleButton.textContent = "Light"; // Đổi tên nút thành Light
    } else {
        localStorage.removeItem('theme'); // Nếu không còn chế độ tối, xóa trong localStorage
        themeToggleButton.textContent = "Night"; // Đổi tên nút thành Night
    }
});

// Khi toàn bộ nội dung trang đã được tải xong
document.addEventListener("DOMContentLoaded", () => {
  // ===== Xử lý Form Liên Hệ =====
  const contactForm = document.getElementById("contact-form");

  // Kiểm tra nếu form tồn tại
  if (contactForm) {
    // Gắn sự kiện khi người dùng submit form
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Ngăn không cho form gửi đi theo cách mặc định

      // Lấy dữ liệu người dùng nhập vào
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Kiểm tra các trường có bị bỏ trống không
      if (!name || !email || !phone || !subject || !message) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
      }

      // Kiểm tra định dạng email có hợp lệ không
      if (!isValidEmail(email)) {
        alert("Vui lòng nhập địa chỉ email hợp lệ.");
        return;
      }

      // Kiểm tra định dạng số điện thoại
      if (!isValidPhone(phone)) {
        alert("Vui lòng nhập số điện thoại hợp lệ.");
        return;
      }

      // Nếu tất cả hợp lệ, hiển thị thông báo thành công (giả lập gửi dữ liệu)
      alert(
        "Cảm ơn bạn đã liên hệ với chúng tôi! Chúng tôi sẽ phản hồi trong thời gian sớm nhất."
      );
      contactForm.reset(); // Xóa dữ liệu trên form sau khi gửi thành công
    });
  }

  // ===== Hàm kiểm tra định dạng email =====
  function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); // Kiểm tra email theo regex
  }

  // ===== Hàm kiểm tra định dạng số điện thoại =====
  function isValidPhone(phone) {
    const re = /^[0-9]{10,11}$/; // Chấp nhận số điện thoại từ 10 đến 11 chữ số
    return re.test(String(phone).replace(/[^0-9]/g, "")); // Xóa ký tự không phải số trước khi kiểm tra
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // 📌 Chờ khi toàn bộ nội dung trang đã tải xong mới thực thi đoạn mã

  // 📥 Lấy đối tượng form liên hệ
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    // 👂 Lắng nghe sự kiện người dùng gửi form
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // ❌ Ngăn không cho form reload lại trang

      // 📦 Lấy dữ liệu người dùng nhập từ các ô input
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // ✅ Kiểm tra nếu có ô nào bị bỏ trống thì báo lỗi
      if (!name || !email || !phone || !subject || !message) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
      }

      // 📧 Kiểm tra email có hợp lệ không
      if (!isValidEmail(email)) {
        alert("Vui lòng nhập địa chỉ email hợp lệ.");
        return;
      }

      // 📱 Kiểm tra số điện thoại hợp lệ không (chỉ chấp nhận 10–11 chữ số)
      if (!isValidPhone(phone)) {
        alert("Vui lòng nhập số điện thoại hợp lệ.");
        return;
      }

      // ✅ Nếu mọi thứ hợp lệ thì hiện thông báo thành công
      // (Trong ứng dụng thật sẽ gửi dữ liệu này lên server)
      alert(
        "Cảm ơn bạn đã liên hệ với chúng tôi! Chúng tôi sẽ phản hồi trong thời gian sớm nhất."
      );

      contactForm.reset(); // 🔄 Xoá trắng form sau khi gửi thành công
    });
  }

  // 📌 Hàm kiểm tra định dạng email có đúng chuẩn hay không
  function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // 📌 Hàm kiểm tra số điện thoại hợp lệ (chỉ số, độ dài 10 hoặc 11 số)
  function isValidPhone(phone) {
    const re = /^[0-9]{10,11}$/;
    return re.test(String(phone).replace(/[^0-9]/g, ""));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // ===== Nút "Back to Top" =====
  const backToTopButton = document.getElementById("back-to-top");

  // Khi người dùng cuộn trang
  window.addEventListener("scroll", () => {
    // Nếu cuộn xuống hơn 300px thì hiển thị nút "Back to Top"
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = "block";
    } else {
      // Ngược lại thì ẩn đi
      backToTopButton.style.display = "none";
    }
  });

  // Khi người dùng nhấn vào nút "Back to Top"
  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định (nếu là thẻ <a> chẳng hạn)
    // Cuộn mượt về đầu trang
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // ===== Form tìm kiếm xe hơi =====
  const carSearchForm = document.getElementById("car-search-form");
  if (carSearchForm) {
    carSearchForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Ngăn reload lại trang khi submit form

      // Lấy giá trị các trường chọn trong form
      const brand = document.getElementById("brand").value;
      const carType = document.getElementById("car-type").value;
      const priceRange = document.getElementById("price-range").value;

      // Tạo chuỗi truy vấn URL từ các giá trị đã nhập
      const queryParams = [];
      if (brand) queryParams.push(`brand=${brand}`);
      if (carType) queryParams.push(`type=${carType}`);
      if (priceRange) queryParams.push(`price=${priceRange}`);

      const queryString =
        queryParams.length > 0 ? `?${queryParams.join("&")}` : "";

      // Chuyển hướng sang trang danh sách xe có kèm bộ lọc (query string)
      window.location.href = `cars.html${queryString}`;
    });
  }

  // ===== Form đăng ký nhận bản tin (newsletter) =====
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Ngăn reload trang khi submit

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;

      // Kiểm tra định dạng email có hợp lệ hay không
      if (!email || !isValidEmail(email)) {
        alert("Vui lòng nhập địa chỉ email hợp lệ.");
        return;
      }

      // Ở đây bạn có thể gửi email về server (hiện tại demo bằng alert)
      alert("Cảm ơn bạn đã đăng ký nhận tin!");
      // Xóa nội dung input sau khi submit thành công
      emailInput.value = "";
    });
  }

  // ===== Hàm kiểm tra định dạng email =====
  function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});

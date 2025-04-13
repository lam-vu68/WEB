document.addEventListener("DOMContentLoaded", () => {
  // 💡 Chờ trang HTML load xong mới thực hiện mã JS bên trong

  // 👉 Lấy các nút chuyển chế độ xem và container chứa danh sách xe
  const gridViewBtn = document.getElementById("grid-view");
  const listViewBtn = document.getElementById("list-view");
  const carGrid = document.getElementById("car-grid");

  if (gridViewBtn && listViewBtn) {
    // 👉 Khi nhấn vào nút chế độ lưới
    gridViewBtn.addEventListener("click", () => {
      gridViewBtn.classList.add("active"); // Thêm class active cho nút lưới
      listViewBtn.classList.remove("active"); // Bỏ class active ở nút danh sách
      carGrid.classList.remove("list-view"); // Bỏ class list-view để trở lại chế độ lưới

      // 👉 Gán lại class col-md-4 để hiển thị 3 xe 1 hàng
      const carItems = carGrid.querySelectorAll(".col-md-4");
      carItems.forEach((item) => {
        item.classList.remove("col-md-12"); // Bỏ class hiển thị 1 cột
        item.classList.add("col-md-4"); // Thêm lại class chia 3 cột
      });
    });

    // 👉 Khi nhấn vào nút chế độ danh sách
    listViewBtn.addEventListener("click", () => {
      listViewBtn.classList.add("active"); // Thêm class active cho nút danh sách
      gridViewBtn.classList.remove("active"); // Bỏ class active ở nút lưới
      carGrid.classList.add("list-view"); // Thêm class list-view để áp dụng CSS danh sách

      // 👉 Cập nhật lại các phần tử xe để hiển thị 1 xe 1 hàng
      const carItems = carGrid.querySelectorAll(".col-md-4");
      carItems.forEach((item) => {
        item.classList.remove("col-md-4");
        item.classList.add("col-md-12");

        // 👉 Nếu chưa chuyển sang dạng danh sách thì thay đổi cấu trúc thẻ card
        const card = item.querySelector(".card");
        if (!card.classList.contains("list-card")) {
          card.classList.add("list-card", "flex-row"); // Dùng flex để canh ngang ảnh và nội dung

          const img = card.querySelector(".position-relative"); // Hình ảnh
          const body = card.querySelector(".card-body"); // Nội dung

          if (img && body) {
            img.style.width = "30%"; // Ảnh chiếm 30%
            body.style.width = "70%"; // Nội dung chiếm 70%
          }
        }
      });
    });
  }

  // 🧠 Chức năng sắp xếp danh sách xe
  const sortSelect = document.getElementById("sort-options");
  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      const sortValue = this.value;

      // 👉 Lấy tất cả phần tử xe để sắp xếp lại
      const carItems = Array.from(
        carGrid.querySelectorAll(".col-md-4, .col-md-12")
      );

      // 👉 Sắp xếp dựa vào giá hoặc tên
      carItems.sort((a, b) => {
        const priceA = Number.parseFloat(
          a.querySelector(".price").textContent.replace(/[^\d.-]/g, "")
        );
        const priceB = Number.parseFloat(
          b.querySelector(".price").textContent.replace(/[^\d.-]/g, "")
        );
        const nameA = a.querySelector(".card-title").textContent;
        const nameB = b.querySelector(".card-title").textContent;

        // 🎯 Xử lý theo lựa chọn người dùng
        switch (sortValue) {
          case "price-asc":
            return priceA - priceB; // Giá tăng dần
          case "price-desc":
            return priceB - priceA; // Giá giảm dần
          case "name-asc":
            return nameA.localeCompare(nameB); // Tên A-Z
          case "name-desc":
            return nameB.localeCompare(nameA); // Tên Z-A
          default:
            return 0; // Không sắp xếp (ví dụ mặc định là "Mới nhất")
        }
      });

      // 👉 Gắn lại các phần tử đã sắp xếp vào giao diện
      carItems.forEach((item) => {
        carGrid.appendChild(item);
      });
    });
  }

  // 🧪 Chức năng lọc xe (demo)
  const filterForm = document.getElementById("filter-form");
  if (filterForm) {
    // 👉 Khi người dùng nhấn nút lọc
    filterForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Ngăn load lại trang
      alert(
        "Bộ lọc đã được áp dụng. Trong ứng dụng thực tế, danh sách xe sẽ được lọc theo các tiêu chí đã chọn."
      );
    });

    // 👉 Khi người dùng nhấn nút đặt lại lọc
    filterForm.addEventListener("reset", () => {
      setTimeout(() => {
        alert("Đã đặt lại bộ lọc.");
      }, 100); // Thêm delay nhẹ để form kịp reset
    });
  }

  // 📦 Tự động đánh dấu bộ lọc từ URL (ví dụ: ?brand=honda&type=suv)
  function parseUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get("type");
    const brand = urlParams.get("brand");
    const price = urlParams.get("price");

    // ✅ Nếu có tham số lọc, thì tìm checkbox tương ứng và đánh dấu
    if (type) {
      const typeCheckbox = document.getElementById(`type-${type}`);
      if (typeCheckbox) typeCheckbox.checked = true;
    }

    if (brand) {
      const brandCheckbox = document.getElementById(`brand-${brand}`);
      if (brandCheckbox) brandCheckbox.checked = true;
    }

    if (price) {
      const priceCheckbox = document.getElementById(`price-${price}`);
      if (priceCheckbox) priceCheckbox.checked = true;
    }
  }

  // 👉 Gọi hàm xử lý URL
  parseUrlParams();
});

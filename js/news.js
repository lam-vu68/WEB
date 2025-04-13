document.addEventListener("DOMContentLoaded", () => {
  // Search form functionality
  const searchForms = document.querySelectorAll(".search-form");

  if (searchForms.length > 0) {
    searchForms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const searchInput = form.querySelector('input[type="text"]');
        const searchTerm = searchInput.value.trim();

        if (searchTerm) {
          // In a real application, this would redirect to search results
          alert(`Đang tìm kiếm: "${searchTerm}"`);
          // window.location.href = `search-results.html?q=${encodeURIComponent(searchTerm)}`;
        } else {
          alert("Vui lòng nhập từ khóa tìm kiếm");
        }
      });
    });
  }

  // Newsletter form functionality
  const newsletterForms = document.querySelectorAll(".newsletter-form");

  if (newsletterForms.length > 0) {
    newsletterForms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value.trim();

        if (email && isValidEmail(email)) {
          alert(`Cảm ơn bạn đã đăng ký nhận tin với email: ${email}`);
          emailInput.value = "";
        } else {
          alert("Vui lòng nhập địa chỉ email hợp lệ");
        }
      });
    });
  }

  // Comment form functionality in news-detail.html
  const commentForm = document.querySelector(".comment-form form");

  if (commentForm) {
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = commentForm.querySelector('input[type="text"]');
      const emailInput = commentForm.querySelector('input[type="email"]');
      const commentInput = commentForm.querySelector("textarea");

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const comment = commentInput.value.trim();

      if (name && email && comment && isValidEmail(email)) {
        alert(
          "Cảm ơn bạn đã gửi bình luận. Bình luận của bạn đang chờ phê duyệt."
        );
        commentForm.reset();
      } else {
        alert("Vui lòng điền đầy đủ thông tin và đảm bảo email hợp lệ");
      }
    });
  }

  // Email validation helper function
  function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Parse URL parameters to get news ID in news-detail.html
  function getNewsIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
  }

  // In a real application, you would fetch news details based on the ID
  const newsId = getNewsIdFromUrl();
  if (newsId) {
    console.log(`Displaying news with ID: ${newsId}`);
    // Here you would typically make an AJAX request to get the news data
  }

  // Add animation to news cards
  const newsCards = document.querySelectorAll(".news-list .card");
  if (newsCards.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animated");
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    newsCards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "all 0.5s ease";
      observer.observe(card);
    });
  }

  // Add hover effect to category items
  const categoryItems = document.querySelectorAll(".list-group-item");
  if (categoryItems.length > 0) {
    categoryItems.forEach((item) => {
      item.addEventListener("mouseenter", function () {
        this.style.backgroundColor = "rgba(255, 77, 48, 0.1)";
        this.style.borderLeft = "3px solid var(--primary-color)";
      });

      item.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "";
        this.style.borderLeft = "";
      });
    });
  }
});

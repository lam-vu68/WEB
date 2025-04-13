document.addEventListener("DOMContentLoaded", () => {
  // Animate achievement numbers
  const achievementNumbers = document.querySelectorAll(".achievement-number");

  if (achievementNumbers.length > 0) {
    const animateNumbers = () => {
      achievementNumbers.forEach((number) => {
        const finalValue = number.textContent;
        const numericValue = Number.parseInt(finalValue.replace(/,|\+/g, ""));

        let startValue = 0;
        const duration = 2000;
        const increment = Math.ceil(numericValue / (duration / 20));

        const counter = setInterval(() => {
          startValue += increment;

          if (startValue >= numericValue) {
            number.textContent = finalValue;
            clearInterval(counter);
          } else {
            number.textContent =
              startValue + (finalValue.includes("+") ? "+" : "");
          }
        }, 20);
      });
    };

    // Check if element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Trigger animation when scrolled into view
    let animated = false;
    window.addEventListener("scroll", () => {
      if (!animated && isInViewport(document.getElementById("achievements"))) {
        animateNumbers();
        animated = true;
      }
    });

    // Check on page load
    if (isInViewport(document.getElementById("achievements"))) {
      animateNumbers();
      animated = true;
    }
  }

  // Handle showroom map links
  const mapLinks = document.querySelectorAll(".showroom-map-link");
  if (mapLinks.length > 0) {
    mapLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const showroomName = link.getAttribute("data-showroom");
        alert(
          `Bản đồ cho ${showroomName} sẽ được hiển thị trong ứng dụng thực tế.`
        );
      });
    });
  }

  // Add hover effects to team members
  const teamCards = document.querySelectorAll("#our-team .card");
  if (teamCards.length > 0) {
    teamCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-15px)";
        this.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.2)";
      });

      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
        this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
      });
    });
  }

  // Add animation to core values
  const coreValues = document.querySelectorAll("#core-values .card");
  if (coreValues.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animated");
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    coreValues.forEach((value, index) => {
      value.style.opacity = "0";
      value.style.transform = "translateY(20px)";
      value.style.transition = "all 0.5s ease";
      observer.observe(value);
    });
  }
});

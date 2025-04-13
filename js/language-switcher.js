document.addEventListener("DOMContentLoaded", () => {
  // Khởi tạo ngôn ngữ mặc định là tiếng Việt
  let currentLang = localStorage.getItem("language") || "vi";

  // Cập nhật trạng thái nút chuyển đổi ngôn ngữ
  updateLanguageButton(currentLang);

  // Tải và áp dụng ngôn ngữ hiện tại
  loadLanguage(currentLang);

  // Xử lý sự kiện khi nhấn nút chuyển đổi ngôn ngữ
  const languageSwitcher = document.getElementById("language-switcher");
  if (languageSwitcher) {
    languageSwitcher.addEventListener("click", () => {
      // Chuyển đổi ngôn ngữ
      currentLang = currentLang === "vi" ? "en" : "vi";

      // Lưu ngôn ngữ đã chọn vào localStorage
      localStorage.setItem("language", currentLang);

      // Cập nhật trạng thái nút
      updateLanguageButton(currentLang);

      // Tải và áp dụng ngôn ngữ mới
      loadLanguage(currentLang);
    });
  }
});

// Hàm cập nhật trạng thái nút chuyển đổi ngôn ngữ
function updateLanguageButton(lang) {
  const button = document.getElementById("language-switcher");
  if (button) {
    if (lang === "vi") {
      button.innerHTML = 'EN <i class="fas fa-globe ms-1"></i>';
      button.setAttribute("title", "Switch to English");
    } else {
      button.innerHTML = 'VI <i class="fas fa-globe ms-1"></i>';
      button.setAttribute("title", "Chuyển sang tiếng Việt");
    }
  }
}

// Hàm tải và áp dụng ngôn ngữ
function loadLanguage(lang) {
  fetch(`js/lang/${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      // Áp dụng ngôn ngữ cho các phần tử trên trang
      applyLanguage(data);
    })
    .catch((error) => console.error("Error loading language file:", error));
}

// Hàm áp dụng ngôn ngữ cho các phần tử trên trang
function applyLanguage(langData) {
  // Áp dụng cho thanh điều hướng
  applyTextBySelector('[data-lang="home"]', langData.nav.home);
  applyTextBySelector('[data-lang="cars"]', langData.nav.cars);
  applyTextBySelector('[data-lang="categories"]', langData.nav.categories);
  applyTextBySelector('[data-lang="sedan"]', langData.nav.sedan);
  applyTextBySelector('[data-lang="suv"]', langData.nav.suv);
  applyTextBySelector('[data-lang="hatchback"]', langData.nav.hatchback);
  applyTextBySelector('[data-lang="luxury"]', langData.nav.luxury);
  applyTextBySelector('[data-lang="about"]', langData.nav.about);
  applyTextBySelector('[data-lang="news"]', langData.nav.news);
  applyTextBySelector('[data-lang="promotion"]', langData.nav.promotion);
  applyTextBySelector('[data-lang="contact"]', langData.nav.contact);

  // Áp dụng cho hero section
  applyTextBySelector(
    '[data-lang="hero-slide1-title"]',
    langData.hero?.slide1?.title
  );
  applyTextBySelector(
    '[data-lang="hero-slide1-description"]',
    langData.hero?.slide1?.description
  );
  applyTextBySelector(
    '[data-lang="hero-slide1-button"]',
    langData.hero?.slide1?.button
  );
  applyTextBySelector(
    '[data-lang="hero-slide2-title"]',
    langData.hero?.slide2?.title
  );
  applyTextBySelector(
    '[data-lang="hero-slide2-description"]',
    langData.hero?.slide2?.description
  );
  applyTextBySelector(
    '[data-lang="hero-slide2-button"]',
    langData.hero?.slide2?.button
  );
  applyTextBySelector(
    '[data-lang="hero-slide3-title"]',
    langData.hero?.slide3?.title
  );
  applyTextBySelector(
    '[data-lang="hero-slide3-description"]',
    langData.hero?.slide3?.description
  );
  applyTextBySelector(
    '[data-lang="hero-slide3-button"]',
    langData.hero?.slide3?.button
  );

  // Áp dụng cho search section
  applyTextBySelector('[data-lang="search-title"]', langData.search?.title);
  applyTextBySelector('[data-lang="search-brand"]', langData.search?.brand);
  applyTextBySelector('[data-lang="search-type"]', langData.search?.type);
  applyTextBySelector('[data-lang="search-price"]', langData.search?.price);
  applyTextBySelector('[data-lang="search-button"]', langData.search?.button);

  // Áp dụng cho featured cars section
  applyTextBySelector('[data-lang="featured-title"]', langData.featured?.title);
  applyTextBySelector(
    '[data-lang="featured-viewAll"]',
    langData.featured?.viewAll
  );
  applyTextBySelector('[data-lang="featured-new"]', langData.featured?.new);
  applyTextBySelector(
    '[data-lang="featured-bestseller"]',
    langData.featured?.bestseller
  );
  applyTextBySelector(
    '[data-lang="featured-car1-title"]',
    langData.featured?.car1?.title
  );
  applyTextBySelector(
    '[data-lang="featured-car1-description"]',
    langData.featured?.car1?.description
  );
  applyTextBySelector(
    '[data-lang="featured-car2-title"]',
    langData.featured?.car2?.title
  );
  applyTextBySelector(
    '[data-lang="featured-car2-description"]',
    langData.featured?.car2?.description
  );
  applyTextBySelector(
    '[data-lang="featured-car3-title"]',
    langData.featured?.car3?.title
  );
  applyTextBySelector(
    '[data-lang="featured-car3-description"]',
    langData.featured?.car3?.description
  );
  applyTextBySelector(
    '[data-lang="featured-details"]',
    langData.featured?.details
  );

  // Áp dụng cho why choose us section
  applyTextBySelector(
    '[data-lang="whyChoose-title"]',
    langData.whyChoose?.title
  );
  applyTextBySelector(
    '[data-lang="whyChoose-reason1-title"]',
    langData.whyChoose?.reason1?.title
  );
  applyTextBySelector(
    '[data-lang="whyChoose-reason1-description"]',
    langData.whyChoose?.reason1?.description
  );
  applyTextBySelector(
    '[data-lang="whyChoose-reason2-title"]',
    langData.whyChoose?.reason2?.title
  );
  applyTextBySelector(
    '[data-lang="whyChoose-reason2-description"]',
    langData.whyChoose?.reason2?.description
  );
  applyTextBySelector(
    '[data-lang="whyChoose-reason3-title"]',
    langData.whyChoose?.reason3?.title
  );
  applyTextBySelector(
    '[data-lang="whyChoose-reason3-description"]',
    langData.whyChoose?.reason3?.description
  );

  // Áp dụng cho testimonials section
  applyTextBySelector(
    '[data-lang="testimonials-title"]',
    langData.testimonials?.title
  );
  applyTextBySelector(
    '[data-lang="testimonial1-text"]',
    langData.testimonials?.testimonial1?.text
  );
  applyTextBySelector(
    '[data-lang="testimonial1-author"]',
    langData.testimonials?.testimonial1?.author
  );
  applyTextBySelector(
    '[data-lang="testimonial1-position"]',
    langData.testimonials?.testimonial1?.position
  );
  applyTextBySelector(
    '[data-lang="testimonial2-text"]',
    langData.testimonials?.testimonial2?.text
  );
  applyTextBySelector(
    '[data-lang="testimonial2-author"]',
    langData.testimonials?.testimonial2?.author
  );
  applyTextBySelector(
    '[data-lang="testimonial2-position"]',
    langData.testimonials?.testimonial2?.position
  );
  applyTextBySelector(
    '[data-lang="testimonial3-text"]',
    langData.testimonials?.testimonial3?.text
  );
  applyTextBySelector(
    '[data-lang="testimonial3-author"]',
    langData.testimonials?.testimonial3?.author
  );
  applyTextBySelector(
    '[data-lang="testimonial3-position"]',
    langData.testimonials?.testimonial3?.position
  );

  // Áp dụng cho about section
  applyTextBySelector('[data-lang="about-title"]', langData.about?.title);
  applyTextBySelector(
    '[data-lang="about-description1"]',
    langData.about?.description1
  );
  applyTextBySelector(
    '[data-lang="about-description2"]',
    langData.about?.description2
  );
  applyTextBySelector('[data-lang="about-button"]', langData.about?.button);

  // Áp dụng cho news section
  applyTextBySelector('[data-lang="news-title"]', langData.news?.title);
  applyTextBySelector('[data-lang="news-viewAll"]', langData.news?.viewAll);
  applyTextBySelector('[data-lang="news1-title"]', langData.news?.news1?.title);
  applyTextBySelector(
    '[data-lang="news1-description"]',
    langData.news?.news1?.description
  );
  applyTextBySelector('[data-lang="news2-title"]', langData.news?.news2?.title);
  applyTextBySelector(
    '[data-lang="news2-description"]',
    langData.news?.news2?.description
  );
  applyTextBySelector('[data-lang="news3-title"]', langData.news?.news3?.title);
  applyTextBySelector(
    '[data-lang="news3-description"]',
    langData.news?.news3?.description
  );
  applyTextBySelector('[data-lang="news-readMore"]', langData.news?.readMore);

  // Áp dụng cho newsletter section
  applyTextBySelector(
    '[data-lang="newsletter-title"]',
    langData.newsletter?.title
  );
  applyTextBySelector(
    '[data-lang="newsletter-description"]',
    langData.newsletter?.description
  );
  applyTextBySelector(
    '[data-lang="newsletter-button"]',
    langData.newsletter?.button
  );
  applyPlaceholderBySelector(
    '[data-lang="newsletter-placeholder"]',
    langData.newsletter?.placeholder
  );

  // Áp dụng cho footer
  applyTextBySelector(
    '[data-lang="footer-description"]',
    langData.footer?.description
  );
  applyTextBySelector('[data-lang="quickLinks"]', langData.footer?.quickLinks);
  applyTextBySelector(
    '[data-lang="carCategories"]',
    langData.footer?.carCategories
  );
  applyTextBySelector('[data-lang="contact"]', langData.footer?.contact);
  applyTextBySelector('[data-lang="address"]', langData.footer?.address);
  applyTextBySelector('[data-lang="phone"]', langData.footer?.phone);
  applyTextBySelector('[data-lang="email"]', langData.footer?.email);
  applyTextBySelector('[data-lang="hours"]', langData.footer?.hours);
  applyTextBySelector('[data-lang="copyright"]', langData.footer?.copyright);

  // Áp dụng cho car listing page
  applyTextBySelector(
    '[data-lang="carListing-title"]',
    langData.carListing?.title
  );
  applyTextBySelector(
    '[data-lang="carListing-filters"]',
    langData.carListing?.filters
  );
  applyTextBySelector(
    '[data-lang="carListing-brand"]',
    langData.carListing?.brand
  );
  applyTextBySelector(
    '[data-lang="carListing-carType"]',
    langData.carListing?.carType
  );
  applyTextBySelector(
    '[data-lang="carListing-priceRange"]',
    langData.carListing?.priceRange
  );
  applyTextBySelector(
    '[data-lang="carListing-year"]',
    langData.carListing?.year
  );
  applyTextBySelector(
    '[data-lang="carListing-fuel"]',
    langData.carListing?.fuel
  );
  applyTextBySelector(
    '[data-lang="carListing-apply"]',
    langData.carListing?.apply
  );
  applyTextBySelector(
    '[data-lang="carListing-reset"]',
    langData.carListing?.reset
  );
  applyTextBySelector(
    '[data-lang="carListing-sortBy"]',
    langData.carListing?.sortBy
  );
  applyTextBySelector(
    '[data-lang="carListing-newest"]',
    langData.carListing?.newest
  );
  applyTextBySelector(
    '[data-lang="carListing-priceLowToHigh"]',
    langData.carListing?.priceLowToHigh
  );
  applyTextBySelector(
    '[data-lang="carListing-priceHighToLow"]',
    langData.carListing?.priceHighToLow
  );
  applyTextBySelector(
    '[data-lang="carListing-nameAZ"]',
    langData.carListing?.nameAZ
  );
  applyTextBySelector(
    '[data-lang="carListing-nameZA"]',
    langData.carListing?.nameZA
  );
  applyTextBySelector(
    '[data-lang="carListing-prev"]',
    langData.carListing?.prev
  );
  applyTextBySelector(
    '[data-lang="carListing-next"]',
    langData.carListing?.next
  );

  // Áp dụng cho car detail page
  applyTextBySelector(
    '[data-lang="carDetail-features"]',
    langData.carDetail?.features
  );
  applyTextBySelector(
    '[data-lang="carDetail-specifications"]',
    langData.carDetail?.specifications
  );
  applyTextBySelector(
    '[data-lang="carDetail-price"]',
    langData.carDetail?.price
  );
  applyTextBySelector(
    '[data-lang="carDetail-priceNote"]',
    langData.carDetail?.priceNote
  );
  applyTextBySelector(
    '[data-lang="carDetail-callNow"]',
    langData.carDetail?.callNow
  );
  applyTextBySelector(
    '[data-lang="carDetail-testDrive"]',
    langData.carDetail?.testDrive
  );
  applyTextBySelector(
    '[data-lang="carDetail-contactForm"]',
    langData.carDetail?.contactForm
  );
  applyTextBySelector('[data-lang="carDetail-name"]', langData.carDetail?.name);
  applyTextBySelector(
    '[data-lang="carDetail-phone"]',
    langData.carDetail?.phone
  );
  applyTextBySelector(
    '[data-lang="carDetail-email"]',
    langData.carDetail?.email
  );
  applyTextBySelector(
    '[data-lang="carDetail-message"]',
    langData.carDetail?.message
  );
  applyTextBySelector('[data-lang="carDetail-send"]', langData.carDetail?.send);
  applyTextBySelector(
    '[data-lang="carDetail-sellerInfo"]',
    langData.carDetail?.sellerInfo
  );
  applyTextBySelector(
    '[data-lang="carDetail-consultant"]',
    langData.carDetail?.consultant
  );
  applyTextBySelector(
    '[data-lang="carDetail-relatedCars"]',
    langData.carDetail?.relatedCars
  );

  // Áp dụng cho contact page
  applyTextBySelector('[data-lang="contact-title"]', langData.contact?.title);
  applyTextBySelector('[data-lang="contact-info"]', langData.contact?.info);
  applyTextBySelector(
    '[data-lang="contact-address"]',
    langData.contact?.address
  );
  applyTextBySelector('[data-lang="contact-phone"]', langData.contact?.phone);
  applyTextBySelector(
    '[data-lang="contact-hotline"]',
    langData.contact?.hotline
  );
  applyTextBySelector('[data-lang="contact-email"]', langData.contact?.email);
  applyTextBySelector(
    '[data-lang="contact-workingHours"]',
    langData.contact?.workingHours
  );
  applyTextBySelector(
    '[data-lang="contact-weekdays"]',
    langData.contact?.weekdays
  );
  applyTextBySelector(
    '[data-lang="contact-weekends"]',
    langData.contact?.weekends
  );
  applyTextBySelector(
    '[data-lang="contact-connectWithUs"]',
    langData.contact?.connectWithUs
  );
  applyTextBySelector(
    '[data-lang="contact-sendMessage"]',
    langData.contact?.sendMessage
  );
  applyTextBySelector(
    '[data-lang="contact-subject"]',
    langData.contact?.subject
  );
  applyTextBySelector(
    '[data-lang="contact-chooseSubject"]',
    langData.contact?.chooseSubject
  );
  applyTextBySelector(
    '[data-lang="contact-purchase"]',
    langData.contact?.purchase
  );
  applyTextBySelector(
    '[data-lang="contact-service"]',
    langData.contact?.service
  );
  applyTextBySelector(
    '[data-lang="contact-testDrive"]',
    langData.contact?.testDrive
  );
  applyTextBySelector(
    '[data-lang="contact-feedback"]',
    langData.contact?.feedback
  );
  applyTextBySelector('[data-lang="contact-other"]', langData.contact?.other);
  applyTextBySelector(
    '[data-lang="contact-privacyPolicy"]',
    langData.contact?.privacyPolicy
  );
  applyTextBySelector(
    '[data-lang="contact-location"]',
    langData.contact?.location
  );

  // Áp dụng cho about page
  applyTextBySelector('[data-lang="about-page-title"]', langData.about?.title);
  applyTextBySelector('[data-lang="about-aboutUs"]', langData.about?.aboutUs);
  applyTextBySelector(
    '[data-lang="about-description1"]',
    langData.about?.description1
  );
  applyTextBySelector(
    '[data-lang="about-description2"]',
    langData.about?.description2
  );
  applyTextBySelector(
    '[data-lang="about-description3"]',
    langData.about?.description3
  );
  applyTextBySelector('[data-lang="about-mission"]', langData.about?.mission);
  applyTextBySelector(
    '[data-lang="about-missionText1"]',
    langData.about?.missionText1
  );
  applyTextBySelector(
    '[data-lang="about-missionText2"]',
    langData.about?.missionText2
  );
  applyTextBySelector('[data-lang="about-vision"]', langData.about?.vision);
  applyTextBySelector(
    '[data-lang="about-visionText1"]',
    langData.about?.visionText1
  );
  applyTextBySelector(
    '[data-lang="about-visionText2"]',
    langData.about?.visionText2
  );
  applyTextBySelector(
    '[data-lang="about-coreValues"]',
    langData.about?.coreValues
  );
  applyTextBySelector(
    '[data-lang="about-value1-title"]',
    langData.about?.value1?.title
  );
  applyTextBySelector(
    '[data-lang="about-value1-description"]',
    langData.about?.value1?.description
  );
  applyTextBySelector(
    '[data-lang="about-value2-title"]',
    langData.about?.value2?.title
  );
  applyTextBySelector(
    '[data-lang="about-value2-description"]',
    langData.about?.value2?.description
  );
  applyTextBySelector(
    '[data-lang="about-value3-title"]',
    langData.about?.value3?.title
  );
  applyTextBySelector(
    '[data-lang="about-value3-description"]',
    langData.about?.value3?.description
  );
  applyTextBySelector('[data-lang="about-team"]', langData.about?.team);
  applyTextBySelector('[data-lang="about-partners"]', langData.about?.partners);
  applyTextBySelector(
    '[data-lang="about-achievements"]',
    langData.about?.achievements
  );
  applyTextBySelector('[data-lang="about-carsSold"]', langData.about?.carsSold);
  applyTextBySelector(
    '[data-lang="about-happyCustomers"]',
    langData.about?.happyCustomers
  );
  applyTextBySelector('[data-lang="about-awards"]', langData.about?.awards);
  applyTextBySelector(
    '[data-lang="about-showrooms"]',
    langData.about?.showrooms
  );
  applyTextBySelector(
    '[data-lang="about-showroomSystem"]',
    langData.about?.showroomSystem
  );
  applyTextBySelector('[data-lang="about-viewMap"]', langData.about?.viewMap);
  applyTextBySelector(
    '[data-lang="about-learnMore"]',
    langData.about?.learnMore
  );
  applyTextBySelector(
    '[data-lang="about-contactUs"]',
    langData.about?.contactUs
  );
  applyTextBySelector(
    '[data-lang="about-contactNow"]',
    langData.about?.contactNow
  );

  // Áp dụng cho news page
  applyTextBySelector('[data-lang="news-page-title"]', langData.news?.title);
  applyTextBySelector('[data-lang="news-search"]', langData.news?.search);
  applyTextBySelector(
    '[data-lang="news-categories"]',
    langData.news?.categories
  );
  applyTextBySelector(
    '[data-lang="news-recentPosts"]',
    langData.news?.recentPosts
  );
  applyTextBySelector('[data-lang="news-tags"]', langData.news?.tags);
  applyTextBySelector(
    '[data-lang="news-newsletter"]',
    langData.news?.newsletter
  );
  applyTextBySelector(
    '[data-lang="news-newsletterDesc"]',
    langData.news?.newsletterDesc
  );
  applyTextBySelector('[data-lang="news-event"]', langData.news?.event);
  applyTextBySelector(
    '[data-lang="news-technology"]',
    langData.news?.technology
  );
  applyTextBySelector('[data-lang="news-promotion"]', langData.news?.promotion);
  applyTextBySelector('[data-lang="news-trend"]', langData.news?.trend);
  applyTextBySelector('[data-lang="news-tips"]', langData.news?.tips);
  applyTextBySelector(
    '[data-lang="news-newProduct"]',
    langData.news?.newProduct
  );
  applyTextBySelector('[data-lang="news-policy"]', langData.news?.policy);
  applyTextBySelector('[data-lang="news-readMore"]', langData.news?.readMore);
  applyTextBySelector('[data-lang="news-prev"]', langData.news?.prev);
  applyTextBySelector('[data-lang="news-next"]', langData.news?.next);
  applyPlaceholderBySelector(
    '[data-lang="news-searchPlaceholder"]',
    langData.news?.searchPlaceholder
  );

  // Áp dụng cho news detail page
  applyTextBySelector(
    '[data-lang="newsDetail-comments"]',
    langData.newsDetail?.comments
  );
  applyTextBySelector(
    '[data-lang="newsDetail-leaveComment"]',
    langData.newsDetail?.leaveComment
  );
  applyTextBySelector(
    '[data-lang="newsDetail-name"]',
    langData.newsDetail?.name
  );
  applyTextBySelector(
    '[data-lang="newsDetail-email"]',
    langData.newsDetail?.email
  );
  applyTextBySelector(
    '[data-lang="newsDetail-comment"]',
    langData.newsDetail?.comment
  );
  applyTextBySelector(
    '[data-lang="newsDetail-submit"]',
    langData.newsDetail?.submit
  );
  applyTextBySelector(
    '[data-lang="newsDetail-relatedPosts"]',
    langData.newsDetail?.relatedPosts
  );
  applyTextBySelector(
    '[data-lang="newsDetail-share"]',
    langData.newsDetail?.share
  );
  applyTextBySelector(
    '[data-lang="newsDetail-tags"]',
    langData.newsDetail?.tags
  );

  // Áp dụng cho các phần tử chung
  applyTextBySelector('[data-lang="common-sedan"]', langData.common?.sedan);
  applyTextBySelector('[data-lang="common-suv"]', langData.common?.suv);
  applyTextBySelector(
    '[data-lang="common-hatchback"]',
    langData.common?.hatchback
  );
  applyTextBySelector('[data-lang="common-luxury"]', langData.common?.luxury);
  applyTextBySelector('[data-lang="common-new"]', langData.common?.new);
  applyTextBySelector('[data-lang="common-petrol"]', langData.common?.petrol);
  applyTextBySelector('[data-lang="common-diesel"]', langData.common?.diesel);
  applyTextBySelector(
    '[data-lang="common-automatic"]',
    langData.common?.automatic
  );
  applyTextBySelector(
    '[data-lang="common-backToTop"]',
    langData.common?.backToTop
  );
}

// Hàm hỗ trợ để áp dụng văn bản cho các phần tử theo bộ chọn
function applyTextBySelector(selector, text) {
  if (!text) return;

  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.textContent = text;
  });
}

// Hàm hỗ trợ để áp dụng placeholder cho các phần tử theo bộ chọn
function applyPlaceholderBySelector(selector, text) {
  if (!text) return;

  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.placeholder = text;
  });
}

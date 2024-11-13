// وظيفة للتمرير السلس إلى الأقسام عند النقر على الروابط
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navbar-nav a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // منع السلوك الافتراضي للرابط
      const targetId = this.getAttribute("href"); // الحصول على عنوان القسم المستهدف
      const targetElement = document.querySelector(targetId); // تحديد العنصر المستهدف

      // التمرير إلى القسم المستهدف بسلاسة
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // === Sidebar Toggle ===
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      sidebar.style.right = sidebar.style.right === "0px" ? "-250px" : "0px";
    });

    document.addEventListener("click", function (e) {
      if (!sidebar.contains(e.target) && e.target !== menuToggle) {
        sidebar.style.right = "-250px";
      }
    });
  }

  // === Accordion Toggle ===
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const content = header.nextElementSibling;
      const isOpen = content.classList.contains("open");

      // Close all other accordions (optional, comment if not needed)
      document.querySelectorAll(".accordion-content").forEach((section) => {
        section.classList.remove("open");
        section.style.display = "none";
      });
      document.querySelectorAll(".accordion-header").forEach((h) =>
        h.classList.remove("active")
      );

      if (!isOpen) {
        content.classList.add("open");
        content.style.display = "block";
        header.classList.add("active");
      }
    });
  });
});

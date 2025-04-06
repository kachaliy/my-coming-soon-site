document.addEventListener("DOMContentLoaded", () => {
  // Fade-in sections on scroll
  const sections = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Parallax effect for hero background
  window.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset;
    document.querySelector(".hero").style.backgroundPositionY = `${
      scrollPosition * 0.5
    }px`;
  });

  // Back to top button
  const backToTopButton = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

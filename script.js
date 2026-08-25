document.getElementById("year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 12 ? "0 8px 25px rgba(25,60,75,.07)" : "none";
});

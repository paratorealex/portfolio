const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.
querySelectorAll("section");
const navbarLinks = document.
querySelectorAll(".navbar-link");

window.addEventListener("scroll", () => {
    
    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
          navbarLinks.forEach((navbarLink) => {
            navbarLink.classList.remove("change");
          });
          navbarLinks[i].classList.add("change");
        }
      });
});
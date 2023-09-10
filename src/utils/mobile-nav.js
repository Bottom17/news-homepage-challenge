const mobileNav = () => {
  const openMenuBtn = document.querySelector(".header__bars");
  const closeMenuBtn = document.querySelector(".mobile-nav__menu-btn");
  const mobileMenuLinks = document.querySelectorAll(".mobile-nav__menu-link");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavMenu = document.querySelector(".mobile-nav__menu");
  const mobileNavMenuUl = document.querySelector(".mobile-nav__menu-ul");

  //   State
  let isMobileNavOpen = false;

  //   When open menu button is clicked open menu
  openMenuBtn.addEventListener("click", () => {
    if (!isMobileNavOpen) {
      mobileNav.style.display = "inline";
      isMobileNavOpen = !isMobileNavOpen;
    }
  });

  //   When close menu button is clicked close menu
  closeMenuBtn.addEventListener("click", () => {
    if (isMobileNavOpen) {
      mobileNav.style.display = "none";
      isMobileNavOpen = !isMobileNavOpen;
    }
  });

  //   When link is clicked close menu
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.style.display = "none";
      isMobileNavOpen = !isMobileNavOpen;
    });
  });

  //   When user clicks outside the menu close it
  document.addEventListener("click", (event) => {
    if (
      !mobileNavMenu.contains(event.target) &&
      mobileNav.contains(event.target)
    ) {
      mobileNav.style.display = "none";
      isMobileNavOpen = !isMobileNavOpen;
    }
  });
};

export default mobileNav;

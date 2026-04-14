import "./style.css";
import showHome from "./home/home.js";
import showMenu from "./menu/menu.js";
import showAbout from "./about/about.js";

function setMainNavListener() {
  const pageMap = new Map([
    ["home", showHome],
    ["menu", showMenu],
    ["about", showAbout],
  ]);

  const mainNav = document.querySelector(".main-nav");
  mainNav.addEventListener("click", (event) => {
    const button = event.target.closest(".main-nav__button");
    if (!button) {
      return;
    }

    const showPage = pageMap.get(button.dataset.page);
    if (showPage) {
      showPage();
    }
  });
}

setMainNavListener();
showHome();

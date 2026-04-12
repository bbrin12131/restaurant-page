import "./style.css";
import showHome from "./home.js";
import showMenu from "./menu.js";

function setMainNavListener() {
  const pageMap = new Map([
    ["home", showHome],
    ["menu", showMenu],
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

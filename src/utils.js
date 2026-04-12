const contentElement = document.querySelector(".content");

function resetContent() {
  contentElement.textContent = "";
}

function showHeading(text, level) {
  const element = document.createElement(`h${level}`);
  element.classList.add("content__heading");
  element.textContent = text;
  contentElement.appendChild(element);
}

function showParagraph(text) {
  const element = document.createElement("p");
  element.textContent = text;
  element.classList.add("content__paragraph");
  contentElement.appendChild(element);
}

function showImage(image, alt) {
  const element = document.createElement("img");
  element.classList.add("content__image");
  element.src = image;
  element.alt = alt;
  contentElement.appendChild(element);
}

export { resetContent, showHeading, showParagraph, showImage };

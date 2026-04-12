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

function showImage(image, alt, additionalClasses = None) {
  const element = document.createElement("img");
  element.classList.add("content__image");
  if (additionalClasses) {
    for (const className of additionalClasses) {
      element.classList.add(className);
    }
  }
  element.src = image;
  element.alt = alt;
  contentElement.appendChild(element);
}

function showDishCard(name, image, alt) {
  const card = document.createElement("div");
  card.classList.add("dish-card");

  const nameElement = document.createElement("p");
  nameElement.classList.add("dish-card__name");
  nameElement.textContent = name;
  card.appendChild(nameElement);

  const imageElement = document.createElement("img");
  imageElement.classList.add("dish-card__image");
  imageElement.src = image;
  imageElement.alt = alt;
  card.appendChild(imageElement);

  contentElement.appendChild(card);
}

export { resetContent, showHeading, showParagraph, showImage, showDishCard };

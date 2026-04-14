const contentElement = document.querySelector(".content");

function resetContent() {
  contentElement.textContent = "";
}

function showHeading(text, level) {
  const element = document.createElement(`h${level}`);
  fillTextElement(element, text, "content__heading");
  contentElement.appendChild(element);
}

function showParagraph(text) {
  const element = createParagraph(text, "content__paragraph");
  contentElement.appendChild(element);
}

function showImage(image, alt, width = 0, height = 0) {
  const element = createImage(image, alt, "content__image", width, height);
  contentElement.appendChild(element);
}

function showCard(name, image, alt, imageWidth = 0, imageHeight = 0) {
  const card = document.createElement("div");
  card.classList.add("card");

  const nameElement = createParagraph(name, "card__name");
  card.appendChild(nameElement);

  const imageElement = createImage(
    image,
    alt,
    "card__image",
    imageWidth,
    imageHeight,
  );
  card.appendChild(imageElement);

  contentElement.appendChild(card);
}

function createParagraph(text, className) {
  const element = document.createElement("p");
  fillTextElement(element, text, className);
  return element;
}

function fillTextElement(element, text, className) {
  element.classList.add(className);
  element.textContent = text;
}

function createImage(image, alt, className, width = 0, height = 0) {
  const element = document.createElement("img");
  element.classList.add(className);
  element.src = image;
  element.alt = alt;

  if (width > 0) {
    element.width = width;
  }

  if (height > 0) {
    element.height = height;
  }

  return element;
}

export { resetContent, showHeading, showParagraph, showImage, showCard };

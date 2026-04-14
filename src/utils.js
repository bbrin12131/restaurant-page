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
  contentElement.appendChild(createParagraph(text, "content__paragraph"));
}

function showImage(
  image,
  alt,
  width = 0,
  height = 0,
  additionalClasses = null,
) {
  let classes = ["content__image"];
  if (additionalClasses) {
    classes = classes.concat(additionalClasses);
  }

  contentElement.appendChild(createImage(image, alt, classes, width, height));
}

function showCard(name, image, alt, imageWidth = 0, imageHeight = 0) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.appendChild(createParagraph(name, "card__name"));

  card.appendChild(
    createImage(image, alt, ["card__image"], imageWidth, imageHeight),
  );

  contentElement.appendChild(card);
}

function createParagraph(text, className) {
  const element = document.createElement("p");
  return fillTextElement(element, text, className);
}

function fillTextElement(element, text, className) {
  element.classList.add(className);
  element.textContent = text;
  return element;
}

function createImage(image, alt, classes, width = 0, height = 0) {
  const element = document.createElement("img");

  for (const className of classes) {
    element.classList.add(className);
  }

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

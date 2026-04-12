const DISH_CARD_IMAGE_WIDTH = 500;
const DISH_CARD_IMAGE_HEIGHT = 300;

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

function showDishCard(name, image, alt) {
  const card = document.createElement("div");
  card.classList.add("dish-card");

  const nameElement = document.createElement("p");
  nameElement.classList.add("dish-card__name");
  nameElement.textContent = name;
  card.appendChild(nameElement);

  card.appendChild(
    createImage(
      image,
      alt,
      ["dish-card__image"],
      DISH_CARD_IMAGE_WIDTH,
      DISH_CARD_IMAGE_HEIGHT,
    ),
  );

  contentElement.appendChild(card);
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

export { resetContent, showHeading, showParagraph, showImage, showDishCard };

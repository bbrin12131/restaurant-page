import { resetContent, showHeading, showCard } from "../screen.js";
import vanillaIceCreamImage from "./vanilla-ice-cream.jpg";
import chocolateIceCreamImage from "./chocolate-ice-cream.jpg";
import strawberryIceCreamImage from "./strawberry-ice-cream.jpg";

const DISH_CARD_IMAGE_WIDTH = 500;
const DISH_CARD_IMAGE_HEIGHT = 300;

export default function () {
  resetContent();
  showHeading("Menu", 1);
  showCard(
    "Vanilla Ice Cream",
    vanillaIceCreamImage,
    "Two scoops of vanilla ice cream in a bowl, with a spoon on a cloth nearby",
    DISH_CARD_IMAGE_WIDTH,
    DISH_CARD_IMAGE_HEIGHT,
  );
  showCard(
    "Chocolate Ice Cream",
    chocolateIceCreamImage,
    "Three scoops of chocolate ice cream in a white bowl on a yellow background",
    DISH_CARD_IMAGE_WIDTH,
    DISH_CARD_IMAGE_HEIGHT,
  );
  showCard(
    "Strawberry Ice Cream",
    strawberryIceCreamImage,
    "Three scoops of strawberry ice cream with a spoon in a bowl",
    DISH_CARD_IMAGE_WIDTH,
    DISH_CARD_IMAGE_HEIGHT,
  );
}

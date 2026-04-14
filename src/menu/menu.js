import { resetContent, showHeading, showCard } from "../screen.js";
import vanillaIceCreamImage from "./vanilla-ice-cream.jpg";
import chocolateIceCreamImage from "./chocolate-ice-cream.jpg";
import strawberryIceCreamImage from "./strawberry-ice-cream.jpg";

const DISH_CARD_IMAGE_WIDTH = 500;
const DISH_CARD_IMAGE_HEIGHT = 300;

export default function () {
  const entries = [
    [
      "Vanilla Ice Cream",
      vanillaIceCreamImage,
      "Two scoops of vanilla ice cream in a bowl, with a spoon on a cloth nearby",
    ],
    [
      "Chocolate Ice Cream",
      chocolateIceCreamImage,
      "Three scoops of chocolate ice cream in a white bowl on a yellow background",
    ],
    [
      "Strawberry Ice Cream",
      strawberryIceCreamImage,
      "Three scoops of strawberry ice cream with a spoon in a bowl",
    ],
  ];

  resetContent();
  showHeading("Menu", 1);
  for (const entry of entries) {
    showCard(...entry, DISH_CARD_IMAGE_WIDTH, DISH_CARD_IMAGE_HEIGHT);
  }
}

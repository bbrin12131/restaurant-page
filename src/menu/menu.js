import { resetContent, showHeading, showDishCard } from "../utils.js";
import vanillaIceCreamImage from "./vanilla-ice-cream.jpg";
import chocolateIceCreamImage from "./chocolate-ice-cream.jpg";
import strawberryIceCreamImage from "./strawberry-ice-cream.jpg";

export default function () {
  resetContent();
  showHeading("Menu", 1);
  showDishCard(
    "Vanilla Ice Cream",
    vanillaIceCreamImage,
    "Two scoops of vanilla ice cream in a bowl, with a spoon on a cloth nearby",
  );
  showDishCard(
    "Chocolate Ice Cream",
    chocolateIceCreamImage,
    "Three scoops of chocolate ice cream in a white bowl on a yellow background",
  );
  showDishCard(
    "Strawberry Ice Cream",
    strawberryIceCreamImage,
    "Three scoops of strawberry ice cream with a spoon in a bowl",
  );
}

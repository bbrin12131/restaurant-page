import {
  resetContent,
  showHeading,
  showParagraph,
  showImage,
} from "../utils.js";
import iceCreamImage from "./home.jpg";

const HOME_IMAGE_WIDTH = 500;
const HOME_IMAGE_HEIGHT = 700;

export default function () {
  resetContent();
  showHeading("Very cool restaurant", 1);
  showImage(
    iceCreamImage,
    "A scoop of orange-colored ice cream on a small pedestal dish, with a fork gently piercing the top against a blue background",
    HOME_IMAGE_WIDTH,
    HOME_IMAGE_HEIGHT,
  );
  showParagraph(
    "Welcome to our extremely cool restaurant! It's cool because we make the best ice cream in town!",
  );
  showParagraph(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus officia quod saepe ipsa ea ullam aut dicta ipsam perferendis aliquid impedit cumque rem magnam quisquam cum, beatae laborum inventore.",
  );
}

import {
  resetContent,
  showHeading,
  showParagraph,
  showImage,
} from "./utils.js";
import iceCreamImage from "./img/home.jpg";

export default function () {
  resetContent();
  showHeading("Very cool restaurant", 1);
  showImage(
    iceCreamImage,
    "A scoop of orange-colored ice cream on a small pedestal dish, with a fork gently piercing the top against a blue background",
  );
  showParagraph(
    "Welcome to our extremely cool restaurant! It's cool because we make the best ice cream in town!",
  );
  showParagraph(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus officia quod saepe ipsa ea ullam aut dicta ipsam perferendis aliquid impedit cumque rem magnam quisquam cum, beatae laborum inventore.",
  );
}

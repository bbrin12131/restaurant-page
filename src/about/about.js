import { resetContent, showHeading, showParagraph } from "../screen.js";

export default function () {
  resetContent();
  showHeading("About", 1);
  showParagraph(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus officia quod saepe ipsa ea ullam aut dicta ipsam perferendis aliquid impedit cumque rem magnam quisquam cum, beatae laborum inventore.",
  );
}

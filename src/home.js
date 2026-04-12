import iceCreamImage from "./img/home.jpg";

export default function () {
  const contentElement = document.querySelector(".content");

  contentElement.textContent = "";

  const heading = document.createElement("h1");
  heading.classList.add("content__heading");
  heading.textContent = "Very cool restaurant";
  contentElement.appendChild(heading);

  const image = document.createElement("img");
  image.classList.add("content__image");
  image.src = iceCreamImage;
  contentElement.appendChild(image);

  const para1 = document.createElement("p");
  para1.textContent =
    "Welcome to our extremely cool restaurant! It's cool because we make the \
    best ice cream in town!";
  para1.classList.add("content__paragraph");
  contentElement.appendChild(para1);

  const para2 = document.createElement("p");
  para2.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus \
    repellendus officia quod saepe ipsa ea ullam aut dicta ipsam perferendis \
    aliquid impedit cumque rem magnam quisquam cum, beatae laborum inventore.";
  para2.classList.add("content__paragraph");
  contentElement.appendChild(para2);
}

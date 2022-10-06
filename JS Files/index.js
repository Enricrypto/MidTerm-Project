/* Fetch */

function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts/").then((response) =>
    response.json()
  );
}

function printData() {
  getData().then((response) => {
    for (let index = 0; index <= 2; index++) {
      document.querySelector(
        `.project-title-${index}`
      ).innerHTML = `${response[index].title}`;
      document.querySelector(
        `.project-description-${index}`
      ).innerHTML = `${response[index].body}`;
    }
  });
}

printData();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((elem) =>
  elem.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

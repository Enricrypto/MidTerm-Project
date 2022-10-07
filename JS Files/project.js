/* Fetch */

function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts/").then((res) =>
    res.json()
  );
}
console.log(getData());

function printData() {
  getData().then((response) => {
    document.querySelector(
      `.simplify-description`
    ).innerHTML = `${response[1].body}`;
  });
}

printData();

/* Hamburger Menu*/

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

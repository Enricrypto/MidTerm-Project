function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts/").then((res) =>
    res.json()
  );
}
console.log(getData());

/*
function printData() {
  getData().then((response) => {
    document.querySelector(
      `.simplify-description`
    ).innerHTML = `${response.title}`;
  });
}

printData();

*/

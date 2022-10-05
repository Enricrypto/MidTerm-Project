    function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts/").then((response) =>
    response.json()
  );

  /* const cards = [];
        for (let id = 1; id <= 3; id++) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await response.json();
            cards.push(data);
            return (cards);
        }*/
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

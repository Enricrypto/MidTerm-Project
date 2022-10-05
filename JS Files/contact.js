form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("tel").value;
  const message = document.getElementById("textarea").value;
  const data = { name: name, email: email, phone: phone, message: message };
  console.log(data);
});

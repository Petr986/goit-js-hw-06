const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.target.elements;

  if (email.value === "" || password.value === "") {
    return alert("Поле к обязательному заполнению");
  }

  const dataSubmit = { email: email.value, password: password.value };
  console.log(dataSubmit);
  event.target.reset();
}

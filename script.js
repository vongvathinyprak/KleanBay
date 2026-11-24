const form = document.getElementById("recipe-form");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "You have submitted the form, thankyou for the recipe!!";
});

form.addEventListener("reset", () => {
  message.textContent = "";
});
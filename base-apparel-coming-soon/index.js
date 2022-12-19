const form = document.getElementById("form");
const emailInput = document.getElementById("email-input");
const errorIcon = document.getElementById("error-icon");
const errorLabel = document.getElementById("error-label");
const submitBtn = document.getElementById("submit-btn");

const invalidField = (input) => {
  input.classList.add("input-error");
  errorIcon.classList.remove("fade-out");
  errorLabel.classList.remove("fade-out");
  errorIcon.classList.add("fade-in");
  errorLabel.classList.add("fade-in");
};

const validField = (input) => {
  input.classList.remove("input-error");
  errorIcon.classList.remove("fade-in");
  errorLabel.classList.remove("fade-in");
  errorIcon.classList.add("fade-out");
  errorLabel.classList.add("fade-out");
};

let emailIsValid = false;

const validateEmail = (input) => {
  const filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(input.value)) {
    invalidField(input);
    emailIsValid = false;
  } else if (filter.test(input.value)) {
    validField(input);
    emailIsValid = true;
  }
};

const submitForm = (e) => {
  if (!emailIsValid) {
    e.preventDefault();
  }
};

form.addEventListener("click", (e) => {
  if (e.target === emailInput) {
    emailInput.addEventListener("keyup", () => {
      validateEmail(emailInput);
    });
  } else if (e.target === submitBtn) {
    submitForm(e);
  }
});

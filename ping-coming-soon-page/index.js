const form = document.getElementById("form");
const emailInput = document.getElementById("email-input");
const notifyMeBtn = document.getElementById("notify-me-btn");
const label = document.getElementById("label");

let emailIsValid = false;

form.addEventListener("click", (e) => {
  if (e.target === emailInput) {
    validateEmail(emailInput);
  } else if (e.target === notifyMeBtn) {
    submitForm(e);
  }
});

const invalidField = (input) => {
  if (window.innerWidth < 768) {
    emailInput.style.marginBottom = "2.625rem";
  }
  input.style.border = "0.0625rem solid #ff5466";
  label.style.display = "block";
};

const validField = (input) => {
  if (window.innerWidth < 768) {
    emailInput.style.marginBottom = "0.625rem";
  }
  input.style.border = "0.0625rem solid #c2d3ff";
  label.style.display = "none";
};

const validateEmail = (input) => {
  input.addEventListener("keyup", () => {
    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(input.value)) {
      invalidField(input);
      input.focus;
      emailIsValid = false;
    } else {
      validField(input);
      emailIsValid = true;
    }
  });
};

const submitForm = (e) => {
  if (!emailIsValid) {
    e.preventDefault();
  }
};

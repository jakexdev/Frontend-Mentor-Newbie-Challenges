const form = document.getElementById("form");
const firstNameInput = document.getElementById("first-name-input");
const lastNameInput = document.getElementById("last-name-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const submitBtn = document.getElementById("submit-btn");

let firstNameInputValid;
let lastNameInputValid;
let emailInputValid;
let passwordInputValid;

const validField = (input) => {
  input.style.border = "0.125rem solid #38CC8B";
  input.style.marginBottom = "1rem";
  document.querySelector(`[data-label = ${input.id}]`).style.display = "none";
  document.querySelector(`[data-icon = ${input.id}]`).style.display = "none";
};

const invalidField = (input) => {
  input.style.border = "0.125rem solid #FF7979";
  input.style.marginBottom = "2.5rem";
  document.querySelector(`[data-label = ${input.id}]`).style.display = "block";
  document.querySelector(`[data-icon = ${input.id}]`).style.display = "block";
};

const validateFirstName = (input) => {
  input.addEventListener("keyup", () => {
    if (input.value.length < 2) {
      invalidField(input);
      firstNameInputValid = false;
    } else {
      validField(input);
      firstNameInputValid = true;
    }
  });
};

const validateLastName = (input) => {
  input.addEventListener("keyup", () => {
    if (input.value.length < 2) {
      invalidField(input);
      lastNameInputValid = false;
    } else {
      validField(input);
      lastNameInputValid = true;
    }
  });
};

const validateEmail = (input) => {
  const filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  input.addEventListener("keyup", () => {
    if (!filter.test(input.value)) {
      invalidField(input);
      emailInputValid = false;
    } else {
      validField(input);
      emailInputValid = true;
    }
  });
};

function checkPassword(password) {
  const specialCharRegex = /[^A-Za-z0-9]/;
  if (!specialCharRegex.test(password)) {
    return false;
  }

  const numberRegex = /[0-9]/;
  if (!numberRegex.test(password)) {
    return false;
  }

  if (password.length < 8) {
    return false;
  }

  return true;
}

validatePassword = (input) => {
  passwordInput.addEventListener("keyup", function () {
    if (!checkPassword(input.value)) {
      invalidField(input);
      passwordInputValid = false;
    } else {
      validField(input);
      passwordInputValid = true;
    }
  });
};

const submitForm = (e) => {
  if (!firstNameInputValid || firstNameInput.value === "") {
    e.preventDefault();
    firstNameInput.focus();
    invalidField(firstNameInput);
    validateFirstName(firstNameInput);
  } else if (!lastNameInputValid) {
    e.preventDefault();
    lastNameInput.focus();
    invalidField(lastNameInput);
    validateLastName(lastNameInput);
  } else if (!emailInputValid) {
    e.preventDefault();
    emailInput.focus();
    invalidField(emailInput);
    validateEmail(emailInput);
  } else if (!passwordInputValid) {
    e.preventDefault();
    passwordInput.focus();
    invalidField(passwordInput);
    validatePassword(passwordInput);
  }
};

form.addEventListener("click", (e) => {
  if (e.target === firstNameInput) {
    validateFirstName(firstNameInput);
  } else if (e.target === lastNameInput) {
    validateLastName(lastNameInput);
  } else if (e.target === emailInput) {
    validateEmail(emailInput);
  } else if (e.target === passwordInput) {
    validatePassword(passwordInput);
  } else if (e.target === submitBtn) {
    submitForm(e);
  }
});

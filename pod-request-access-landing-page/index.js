const requestAccessBtn = document.getElementById("request-access-btn");
const emailInput = document.getElementById("email-input");
const warningLabel = document.getElementById("warning-label");

let emailValid;

function validateEmail() {
  // Regular expression to check for a valid email address
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (emailValid = regex.test(String(emailInput.value).toLowerCase())
    ? true
    : false);
}

const inValidEmail = () => {
  emailInput.focus();
  warningLabel.style.display = "block";
  warningLabel.classList.add("fade-in-fwd");

  if (window.innerWidth < 768) {
    emailInput.style.border = "0.0625rem solid #fb3e3e";
    emailInput.style.marginBottom = "0.5rem";
    emailInput.style.padding = "0.5rem 0 0.5rem 1.9375rem";
    warningLabel.style.marginBottom = "0.5rem";
  } else {
    emailInput.style.border = "0.0625rem solid #fb3e3e";
    emailInput.style.padding = "0.8125rem 0 0.8125rem 1.9375rem";
  }
};

const validEmail = () => {
  warningLabel.style.display = "none";

  if (window.innerWidth < 768) {
    emailInput.style.border = "none";
    emailInput.style.marginBottom = "1rem";
    emailInput.style.padding = "0.5625rem 0 0.5625rem 1.9375rem";
  } else {
    emailInput.style.border = "none";
    emailInput.style.padding = "0.875rem 0 0.875rem 1.9375rem";
  }
};

emailInput.addEventListener("keyup", (e) => {
  validateEmail();
  if (!emailValid) {
    inValidEmail();
  } else {
    validEmail();
  }
});

requestAccessBtn.addEventListener("click", (e) => {
  validateEmail();
  if (emailValid) {
    console.log("valid");
    validEmail();
  } else {
    e.preventDefault();
    console.log("invalid");
    inValidEmail();
  }
});

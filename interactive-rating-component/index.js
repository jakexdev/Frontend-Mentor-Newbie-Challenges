const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");
const selectedRating = document.getElementById("selected-rating");

if (form) {
  form.addEventListener("change", (e) => {
    localStorage.setItem("rating", e.target.value);
    submitBtn.disabled = false;
  });
}

if (selectedRating) {
  selectedRating.innerText = localStorage.getItem("rating");
  localStorage.clear();
}

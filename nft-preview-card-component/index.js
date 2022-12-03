const imgContainer = document.querySelector(".main-img-container");
const filter = document.querySelector(".filter");
const viewIcon = document.querySelector(".view-icon");

imgContainer.addEventListener("mouseover", () => {
  filter.style.display = "block";
  viewIcon.style.display = "block";
  filter.classList.remove("fade-out-filter");
  filter.classList.add("fade-in-filter");
});

imgContainer.addEventListener("mouseout", () => {
  filter.classList.remove("fade-in-filter");
  filter.classList.add("fade-out-filter");
  viewIcon.style.display = "none";
});

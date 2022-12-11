const imageHeroLeft = document.querySelector(".image-hero-left");
const imageHeroRight = document.querySelector(".image-hero-right");
const mainTextContent = document.querySelector(".main-text-content");
const gridImgs = document.querySelectorAll(".grid-img");
const imgGalleryGrid = document.querySelector(".img-gallery-grid");
const aboutSection = document.querySelector(".about-section");

if (window.matchMedia("(min-width: 1440px)").matches) {
  setTimeout(() => {
    imageHeroLeft.classList.add("slide-in-left");
    imageHeroRight.classList.add("slide-in-right");
  }, 1100);

  setTimeout(() => {
    mainTextContent.classList.add("fade-in-fwd");
  }, 2100);
}

const isInViewport = function (elem) {
  const distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

window.addEventListener(
  "scroll",
  function (event) {
    // add event on scroll
    if (isInViewport(imgGalleryGrid)) {
      //if in Viewport
      setTimeout(() => {
        gridImgs[0].classList.add("slide-in-fwd-center");
      }, 0);

      setTimeout(() => {
        gridImgs[1].classList.add("slide-in-fwd-center");
      }, 200);

      setTimeout(() => {
        gridImgs[2].classList.add("slide-in-fwd-center");
      }, 400);

      setTimeout(() => {
        gridImgs[3].classList.add("slide-in-fwd-center");
      }, 600);
    }
  },
  false
);

window.addEventListener(
  "scroll",
  function (event) {
    if (isInViewport(aboutSection)) {
      aboutSection.classList.add("fade-in-fwd");
    }
  },
  false
);

var isInViewport = function (components) {
  var distance = components.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};
// read the link on how above code works

const components = document.querySelectorAll(".component");

window.addEventListener(
  "scroll",
  function (event) {
    // add event on scroll
    components.forEach((element, index) => {
      //for each .thisisatest
      if (isInViewport(element) && this.window.innerWidth < 768) {
        //if in Viewport
        if (index % 2 === 0) {
          element.classList.add("slide-in-right");
        } else {
          element.classList.add("slide-in-left");
        }
      }
    });
  },
  false
);

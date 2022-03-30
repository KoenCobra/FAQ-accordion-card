const blocks = document.querySelectorAll(".accordion-blocks");

blocks.forEach((block) => {
  block.addEventListener("click", function () {
    block.classList.add(".active");
  });
});

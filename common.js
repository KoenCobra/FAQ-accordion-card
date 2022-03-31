const blocks = document.querySelectorAll(".accordion-block");

blocks.forEach(function (block) {
  block.addEventListener("click", openTabs);
});

function openTabs(block) {
  var btnTarget = block.currentTarget;

  blocks.forEach(function (block) {
    block.classList.remove("active");
  });

  btnTarget.classList.add("active");
}

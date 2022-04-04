document.querySelectorAll(".accordion-block").forEach((box) =>
  box.addEventListener("click", () => {
    if (box.classList.contains("active")) box.classList.remove("active");
    else {
      document
        .querySelectorAll(".accordion-block")
        .forEach((box) => box.classList.remove("active"));
      box.classList.add("active");
    }
  })
);

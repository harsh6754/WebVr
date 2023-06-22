document.addEventListener("DOMContentLoaded", () => {
  let positionY = 100;
  setInterval(() => {
    document
      .getElementById("bg_image")
      .setAttribute("rotation", `0 ${positionY} -5`);
    positionY += 0.1;
  }, 10);
});

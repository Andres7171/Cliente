let caja = document.getElementById("caja");
let posY = 0;
let posX = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" || event.key === "8") {
    posY -= 5;
  }
  if (event.key === "ArrowDown" || event.key === "2") {
    posY += 5;
  }
  if (event.key === "ArrowRight" || event.key === "6") {
    posX += 5;
  }
  if (event.key === "ArrowLeft" || event.key === "4") {
    posX -= 5;
  }
  caja.style.top = posY + "px";
  caja.style.left = posX + "px";
});

const bat = document.getElementById("bat");
function moveBatLeft() {
  const leftNumbers = bat.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    bat.style.left = `${left - 10}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveBatLeft();
  }
});

function moveBatRight() {
  const leftNumbers = bat.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left <= 360) {
    bat.style.left = `${left + 10}px`;
  }
}
document.addEventListener("keydown", function (e) {
    
  if (e.key === "ArrowRight") {
    moveBatRight();
  }
});

function moveBatUp() {
  const bottomNumbers = bat.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);
  if (bottom > 0) {
    bat.style.bottom = `${bottom + 10}px`;
  }
}
document.addEventListener("keydown", function (e) {
    
  if (e.key === "ArrowUp") {
    moveBatUp();
  }
});
function moveBatDown() {
  const bottomNumbers = bat.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);
  if (bottom > 0) {
    bat.style.bottom = `${bottom - 10}px`;
  }
}
document.addEventListener("keydown", function (e) {
    
  if (e.key === "ArrowDown") {
    moveBatDown();
  }
});

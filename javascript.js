const screenContainer = document.querySelector(".screen-container");
const resizeButton = document.createElement("button");
resizeButton.textContent = "Resize me!";
const buttonDiv = document.querySelector(".button-div");
buttonDiv.appendChild(resizeButton);
let square = 256;

function createGrid() {
  for (let i = 0; i < square; i++) {
    const squares = document.createElement("div");
    squares.className = "squares";
    screenContainer.appendChild(squares);
    squares.style.backgroundColor = "white";
  }

  let createdSquares = document.querySelectorAll(".squares");

  createdSquares.forEach((square) => {
    square.addEventListener("mouseenter", function () {
      square.style.backgroundColor = "red";
    });
  });
}
createGrid();

resizeButton.addEventListener("click", function () {
  let getUserNumber = prompt("Enter the number of squares in your new grid:");
  square = getUserNumber * getUserNumber;
  let oldSquares = document.querySelectorAll(".squares");
  oldSquares.forEach((square) => {
    square.remove();
  });
  createGrid();
});

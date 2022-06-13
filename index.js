let currentRow = 1
let gameStarted = false
let code = [

]
let colors = [
  "red",
  "lightblue",
  "white",
  "yellow",
  "lightgreen",
  "pink",
  "silver",
  "orange",
];
function selectPinColor(pinId) {
  let pin = document.getElementById(pinId);
  pin.style.backgroundColor = getNextColor(pin.style.backgroundColor);
  if (pin.classList.contains("hole")) {
    pin.classList.remove("hole");
  }
  if (!pin.classList.contains("pin")) {
    pin.classList.add("pin");
  }
}

function getNextColor(currentColor) {
  if (currentColor === "gray" || currentColor === "orange") {
    return colors[0];
  }
  let index = colors.indexOf(currentColor);
  return colors[index + 1];
}

function addRow(rowId) {
  let board = document.getElementById("board");
  let row = document.createElement("div");
  board.appendChild(row);
  row.className = "row";
  row.id = "row_" + rowId;
  for (let i = 0; i < 4; i++) {
    addPin(row, rowId, i + 1);
  }
}

function addPin(row, rowId, pinId) {
  let pinWrapper = document.createElement("div");
  let pin = createPin(rowId, pinId);
  pinWrapper.appendChild(pin);
  pinWrapper.className = "pin-wrapper";
  row.appendChild(pinWrapper);
}

function createPin(rowId, pinId) {
  let pin = document.createElement("div");
  pin.classList.add("pin-position");
  pin.classList.add("hole");
  pin.id = "pin_" + rowId + "_" + pinId;
  pin.addEventListener("click", function () {
    if (gameStarted) {
      selectPinColor(pin.id);
    }
  });
  return pin;
}

window.onload = function () {
  for (let i = 1; i < 10; i++) {
    addRow(i);
  }
};
function start() {
  gameStarted = true
  let start = document.getElementById("start")
  makeCode()
  start.classList.add("hidden")
}

function makeCode() {
  code = [
    "lightgreen",
    "red",
    "lightblue",
    "pink"
  ]
}
function checkRow() {
  let guess = getGuess(currentRow)
  if (guess[0] === code[0] &&
    guess[1] === code[1] &&
    guess[2] === code[2] &&
    guess[3] === code[3]) {
    alert("You Won")
  } else {
    currentRow += 1
  }
}
function getGuess(currentRow) {
  let pin_1 = document.getElementById("pin_" + currentRow + "_1").style.backgroundColor
  let pin_2 = document.getElementById("pin_" + currentRow + "_2").style.backgroundColor
  let pin_3 = document.getElementById("pin_" + currentRow + "_3").style.backgroundColor
  let pin_4 = document.getElementById("pin_" + currentRow + "_4").style.backgroundColor
  return [
    pin_1,
    pin_2,
    pin_3,
    pin_4
  ]
}
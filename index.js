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
  let result = document.createElement("div")
  result.classList.add("result")
  result.id = "result_" + rowId
  row.appendChild(result)
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
    if (gameStarted && currentRow === rowId) {
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
  let check = document.getElementById("check")
  check.classList.remove("hidden")
}

function makeCode() {
  let positions = shuffle([0, 1, 2, 3, 4, 5, 6, 7])
  code = []
  for (let i = 0; i < 4; i++) {
    code.push(colors[positions[i]])
  }
  console.log(code)
  return code
}
function checkRow() {
  let guess = getGuess(currentRow)
  let pinEmpty = guess.includes('')
  if (pinEmpty) {
    alert("Please select all pins")
    return
  }
  let correctColors = 0
  let correctPositions = [0, 0, 0, 0]
  for (let i = 0; i < 4; i++) {
    if (guess[i] === code[i]) { correctPositions[i] = 1 }
    if (code.includes(guess[i]) && correctPositions[i] == 0) { correctColors += 1 }
  }
  let result = document.getElementById("result_" + currentRow)
  let numberOfCorrectPositions = correctPositions.reduce((pv, cv) => pv + cv, 0)
  result.textContent = "p".repeat(numberOfCorrectPositions)
  result.textContent += "c".repeat(correctColors)
  if (numberOfCorrectPositions == 4) {
    alert("You won!")
  } else {
    currentRow += 1
  }
}
function getGuess(currentRow) {
  let guess = []
  for (let i = 1; i < 5; i++) {
    guess.push(document.getElementById("pin_" + currentRow + "_" + i).style.backgroundColor)
  }
  return guess
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
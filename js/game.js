let currentRow = 1;
let gameStarted = false;
let code = [];

function start() {
  currentRow = 1;
  let board = document.getElementById("board");
  board.innerHTML = "";
  createBoard();
  gameStarted = true;
  let start = document.getElementById("start");
  makeCode();
  start.textContent = "Restart";
  let check = document.getElementById("check");
  check.classList.remove("hidden");
  let checkTwo = document.getElementById("checkTwo");
  checkTwo.classList.remove("hidden");
}

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

function checkRow() {
  let guess = getGuess(currentRow);
  let errorMessage = validateGuess(guess);
  if (errorMessage) {
    return;
  }

  let { numberOfCorrectColors, numberOfCorrectPositions } =
    getCorrectColorsAndPositions(guess, code);
  displayResult(numberOfCorrectPositions, numberOfCorrectColors);
  continueGame(numberOfCorrectPositions);
}

function validateGuess(guess) {
  let errorMessage = null;
  let pinEmpty = guess.includes("");
  if (pinEmpty) {
    errorMessage = "Please select all pins";
  }
  const counts = {};
  guess.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  if (Object.keys(counts).length < 4) {
    errorMessage = "Please use unique colors(no duplicates allowed)";
  }
  if (errorMessage) {
    displayError(errorMessage);
  }
  return errorMessage;
}

function getCorrectColorsAndPositions(guess, code) {
  let correctColors = 0;
  let correctPositions = [0, 0, 0, 0];
  for (let i = 0; i < 4; i++) {
    if (guess[i] === code[i]) {
      correctPositions[i] = 1;
    }
    if (code.includes(guess[i]) && correctPositions[i] == 0) {
      correctColors += 1;
    }
  }
  let numberOfCorrectPositions = correctPositions.reduce(
    (pv, cv) => pv + cv,
    0
  );
  return { correctColors, numberOfCorrectPositions };
}

function displayResult(numberOfCorrectPositions, numberOfCorrectColors) {
  let result = document.getElementById("result_" + currentRow);
  result.textContent = "p".repeat(numberOfCorrectPositions);
  result.textContent += "c".repeat(numberOfCorrectColors);
}

function continueGame(numberOfCorrectPositions) {
  if (numberOfCorrectPositions == 4) {
    alert("You won!");
  } else if (currentRow === 9) {
    alert("You lost!");
    start();
  } else {
    currentRow += 1;
  }
}

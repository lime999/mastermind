function start() {
  gameState.currentRow = 1;
  gameState.gameStarted = true;
  let board = document.getElementById("board");
  board.innerHTML = "";
  createBoard(gameState);
  let start = document.getElementById("start");
  gameState.code = makeCode();
  start.textContent = "Restart";
  let check = document.getElementById("check");
  check.classList.remove("hidden");
  let checkTwo = document.getElementById("checkTwo");
  checkTwo.classList.remove("hidden");
}

function selectPinColor(pinId, color) {
  let pin = document.getElementById(pinId);
  pin.style.backgroundColor = color;
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
  let guess = getGuess(gameState.currentRow);
  let errorMessage = validateGuess(guess);
  if (errorMessage) {
    return;
  }

  let numberOfCorrectPositions = getNumberOfCorrectPositions(
    guess,
    gameState.code
  );
  let numberOfCorrectColors = getNumberOfCorrectColors(guess, gameState.code);

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

function getNumberOfCorrectPositions(guess, code) {
  let correctPositions = getCorrectPositions(guess, code);
  let numberOfCorrectPositions = correctPositions.reduce(
    (pv, cv) => pv + cv,
    0
  );
  return numberOfCorrectPositions;
}

function getCorrectPositions(guess, code) {
  let correctPositions = [0, 0, 0, 0];
  for (let i = 0; i < 4; i++) {
    if (guess[i] === code[i]) {
      correctPositions[i] = 1;
    }
  }
  return correctPositions;
}

function getNumberOfCorrectColors(guess, code) {
  let correctColors = 0;
  let correctPositions = getCorrectPositions(guess, code);
  for (let i = 0; i < 4; i++) {
    if (code.includes(guess[i]) && correctPositions[i] == 0) {
      correctColors += 1;
    }
  }
  return correctColors;
}

function displayResult(numberOfCorrectPositions, numberOfCorrectColors) {
  let result = document.getElementById("result_" + gameState.currentRow);
  result.classList.remove("hidden");
  for (let i = 0; i < numberOfCorrectPositions; i++) {
    let pin = getResultPin(i);
    pin.style.backgroundColor = "red";
  }
  for (let i = numberOfCorrectPositions; i < numberOfCorrectColors + numberOfCorrectPositions; i++) {
    let pin = getResultPin(i);
    pin.style.backgroundColor = "green";
  }
}
function getResultPin(pinId) {
  return document.getElementById("result_pin_" + gameState.currentRow + "_" + pinId)
}
function continueGame(numberOfCorrectPositions) {
  if (numberOfCorrectPositions == 4) {
    alert("You won!");
  } else if (gameState.currentRow === 9) {
    alert("You lost!");
    start();
  } else {
    gameState.currentRow += 1;
  }
}

function createBoard(gameState) {
  for (let i = 1; i < 10; i++) {
    addRow(i, gameState);
  }
}

function addRow(rowId, gameState) {
  let board = document.getElementById("board");
  let row = document.createElement("div");
  board.appendChild(row);
  row.className = "row";
  row.id = "row_" + rowId;
  for (let i = 0; i < 4; i++) {
    addPin(row, rowId, i + 1, gameState);
  }
  addResult(rowId, row);
}
function addResult(rowId, row) {
  let result = document.createElement("div");
  result.classList.add("result");
  result.id = "result_" + rowId;
  row.appendChild(result);
  for (let i = 0; i < 4; i++) {
    let pinWrapper = document.createElement("div");
    let pin = createResultPin(rowId,i);
    pinWrapper.appendChild(pin);
    pinWrapper.className = "result-pin-wrapper";
    result.appendChild(pinWrapper);
  }
}

function addPin(row, rowId, pinId, gameState) {
  let pinWrapper = document.createElement("div");
  let pin = createPin(rowId, pinId, gameState);
  pinWrapper.appendChild(pin);
  pinWrapper.className = "pin-wrapper";
  row.appendChild(pinWrapper);
}
function createResultPin(rowId, pinId) {
  let pin = document.createElement("div");
  pin.classList.add("pin-position");
  pin.classList.add("hole");
  pin.id = "result_pin_" + rowId + "_" + pinId;
  return pin;
}
function createPin(rowId, pinId, gameState) {
  let pin = document.createElement("div");
  pin.classList.add("pin-position");
  pin.classList.add("hole");
  pin.id = "pin_" + rowId + "_" + pinId;
  pin.addEventListener("click", function (event) {
    if (gameState && gameState.gameStarted && gameState.currentRow === rowId) {
      showPopup(pin.id, event);
    }
  });
  return pin;
}

function getGuess(currentRow) {
  let guess = [];
  for (let i = 1; i < 5; i++) {
    guess.push(
      document.getElementById("pin_" + currentRow + "_" + i).style
        .backgroundColor
    );
  }
  return guess;
}

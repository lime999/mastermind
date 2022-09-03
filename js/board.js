function createBoard() {
  for (let i = 1; i < 10; i++) {
    addRow(i);
  }
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
  let result = document.createElement("div");
  result.classList.add("result");
  result.id = "result_" + rowId;
  row.appendChild(result);
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
      showPopup(pin.id);
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

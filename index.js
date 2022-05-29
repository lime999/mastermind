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
    selectPinColor(pin.id);
  });
  return pin;
}

window.onload = function () {
  for (let i = 0; i < 9; i++) {
    //TODO: adjust counter to avoid adding one here
    addRow(i + 1);
  }
};

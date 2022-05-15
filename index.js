
let colors = [
    "red",
    "lightblue",
    "white",
    "yellow",
    "lightgreen",
    "pink",
    "silver",
    "orange"
]
function selectButtonColor(buttonId) {
    let button = document.getElementById(buttonId)
    button.style.backgroundColor = getNextColor(button.style.backgroundColor)
}

function getNextColor(currentColor) {
    if (currentColor === "grey") {
        return colors[0]
    }
    let index = colors.indexOf(currentColor)
    return colors[index + 1]
}

function addRow() {
    let board = document.getElementById("board")
    let row = document.createElement("div")
    board.appendChild(row)
    row.className = "row"
    row.id = "row_1"
    for (let i = 0; i < 4; i++) {
        addButton(row, 1, i + 1)
    }
}

function addButton(row, rowId, buttonId) {
    let button = document.createElement("button")
    button.className = "hole"
    button.id = "button_" + rowId + "_" + buttonId
    button.addEventListener('click', function () {
        selectButtonColor(button.id)
    });
    row.appendChild(button)
}

addRow()

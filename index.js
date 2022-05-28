
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
    button.classList.remove("hole")
    button.classList.add("pin")
}

function getNextColor(currentColor) {
    if (currentColor === "grey" || currentColor === "orange") {
        return colors[0]
    }
    let index = colors.indexOf(currentColor)
    return colors[index + 1]
}

function addRow(rowId) {
    let board = document.getElementById("board")
    let row = document.createElement("div")
    board.appendChild(row)
    row.className = "row"
    row.id = "row_" + rowId
    for (let i = 0; i < 4; i++) {
        addButton(row, rowId, i + 1)
    }
}

function addButton(row, rowId, buttonId) {
    let buttonWrapper =document.createElement("div")
    let button = document.createElement("button")
    buttonWrapper.appendChild(button)
    buttonWrapper.className = "button-wrapper"
    button.className = "hole"
    button.id = "button_" + rowId + "_" + buttonId
    button.addEventListener('click', function () {
        selectButtonColor(button.id)
    });
    row.appendChild(buttonWrapper)
}

window.onload = function () {
    for (let i = 0; i < 9; i++) {
        addRow(i + 1)
    }
}

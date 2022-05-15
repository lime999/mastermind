
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
function selectColor11() {
    let firstRowOne = document.getElementById("1_1")
    console.log(firstRowOne.style.backgroundColor)
    console.log(firstRowOne.style)
    firstRowOne.style.backgroundColor = getNextColor(firstRowOne.style.backgroundColor)
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
    addButton(row)
}

function addButton(row) {
    let button = document.createElement("button")
    button.className = "hole"
    button.id = "1_1"
    button.onclick = selectColor11
    row.appendChild(button)
}
addRow()

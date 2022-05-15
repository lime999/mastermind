
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
    let firstRowOne = document.getElementById("firstRow1")
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
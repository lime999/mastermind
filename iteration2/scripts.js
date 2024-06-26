'use strict';
let selectedDot = null;
const colors = ["blue", "red", "silver", "green", "black", "yellow"]
function initializeDots() {
    for (let i = 1; i < 41; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        dot.id = "dot_" + i;
        dot.addEventListener("click", (event) => showPopup(event, dot));
        const board = document.getElementById("board");
        const popup = createPopup();
        dot.appendChild(popup);
        board.appendChild(dot);
    }
}

function createPopup() {
    const popup = document.createElement("span");
    for (let i = 0; i < colors.length; i++) {
        const dot = document.createElement("div")
        dot.classList.add("dot")
        dot.classList.add(colors[i])
        dot.addEventListener("click", (event) => changeDotColor(colors[i]));
        popup.appendChild(dot)
    }
    popup.classList.add("popuptext");
    return popup;
}

function togglePopup(dot) {
    dot.firstChild.classList.toggle("show");
}

function changeDotColor(color) {
    selectedDot.style.backgroundColor = color;
    togglePopup(selectedDot);
    selectedDot = null;
}

function showPopup(event, dot) {
    if (selectedDot || !event.target.id) {
        return
    }

    togglePopup(dot);
    selectedDot = dot;
}



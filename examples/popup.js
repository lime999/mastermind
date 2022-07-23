let colors = [
    "red",
    "lightblue",
    "white",
    "yellow",
    "lightgreen",
    "pink",
    "silver",
    "orange",
    "gray"
];
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function selectPinColor(pinId, color) {
    let pin = document.getElementById(pinId);
    pin.style.backgroundColor = color
}
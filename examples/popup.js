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
function showPopup(pinId) {
    let popup = document.getElementById("colorSelect");
    popup.classList.toggle("show");
    addSelectPin(pinId)
}
function selectPinColor(pinId, color) {
    let pin = document.getElementById(pinId);
    pin.style.backgroundColor = color
}
function addSelectPin(pinId) {
    let pinWrapper = document.createElement("div");
    let pin = createSelectPin(pinId);
    pinWrapper.appendChild(pin);
    pinWrapper.className = "pin-wrapper";
    let popup = document.getElementById("colorSelect")
    popup.appendChild(pinWrapper);
}
function createSelectPin(pinId) {
    let selectPin = document.createElement("div");
    selectPin.classList.add("pin-position");
    selectPin.classList.add("pin");
    selectPin.id = "color-red";
    selectPin.addEventListener("click", function () {
        selectPinColor(pinId, "red")
    })
    selectPin.style.backgroundColor = "red"
    return selectPin;
}

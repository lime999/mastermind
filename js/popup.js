function showPopup(pinId, event) {
  let popup = document.getElementById("colorSelect");
  popup.classList.toggle("show");
  // position next to clicked hole
  popup.style.top = `${event.pageY}px`;
  popup.style.left = `${event.pageX}px`;
  // clear popup content
  popup.textContent = "";

  addSelectPins(pinId);
}
function hidePopup() {
  let popup = document.getElementById("colorSelect");
  popup.classList.toggle("show");
  popup.textContent = "";
}
function addSelectPins(pinId) {
  let popup = document.getElementById("colorSelect");
  for (let i = 0; i < colors.length; i++) {
    let pinWrapper = createPinWrapper(pinId, colors[i]);
    popup.appendChild(pinWrapper);
  }
}
function createPinWrapper(pinId, color) {
  let pinWrapper = document.createElement("div");
  let pin = createSelectPin(pinId, color);
  pinWrapper.appendChild(pin);
  pinWrapper.className = "pin-wrapper";
  return pinWrapper;
}

function createSelectPin(pinId, color) {
  let selectPin = document.createElement("div");
  selectPin.classList.add("pin-position");
  selectPin.classList.add("pin");
  selectPin.addEventListener("click", function () {
    selectPinColor(pinId, color);
    hidePopup();
  });
  selectPin.style.backgroundColor = color;
  return selectPin;
}

function initializeErrorElement() {
  let errorElement = document.getElementById("error");
  errorElement.addEventListener("click", function () {
    errorElement.classList.add("hidden");
  });
}

function displayError(errorMessage) {
  let errorElement = document.getElementById("error");
  errorElement.classList.remove("hidden");
  errorElement.innerText = errorMessage;
}

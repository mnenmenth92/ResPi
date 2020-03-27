function showMessage(message) {
  popup.textContent = message;

}

function hideMessage() {
  popup.textContent = "";
  popup.classList.remove('lumbar-info-max')
}
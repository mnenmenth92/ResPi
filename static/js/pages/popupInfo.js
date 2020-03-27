function showMessage(message) {
  popup.textContent = message;
  popup.style.display = 'inline-block';

}

function hideMessage() {
  popup.textContent = "";
  popup.style.display = 'none';
  popup.classList.remove('lumbar-info-max')
}
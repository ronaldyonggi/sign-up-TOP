let passwordInput = document.getElementById('password')
let confirmPasswordInput = document.getElementById('confirm_password')
let matchingErrorMessageDiv = document.getElementById('matchErrorDiv')

function check() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    matchingErrorMessageDiv.innerText = '* Passwords do not match';
  } else {
    matchingErrorMessageDiv.innerText = '';
  }
}
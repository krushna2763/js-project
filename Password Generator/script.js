function generatePassword() {
  const length = document.getElementById("length").value;
  const hasUpper = document.getElementById("uppercase").checked;
  const hasLower = document.getElementById("lowercase").checked;
  const hasNumbers = document.getElementById("numbers").checked;
  const hasSymbols = document.getElementById("symbols").checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}[]<>?";

  let characters = "";

  if (hasUpper) characters += upper;
  if (hasLower) characters += lower;
  if (hasNumbers) characters += numbers;
  if (hasSymbols) characters += symbols;

  if (characters === "") {
    alert("Please select at least one option!");
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied!");
}

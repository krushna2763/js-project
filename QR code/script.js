const container = document.querySelector(".container");
const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submit");
const downloadBtn = document.getElementById("download");
const sizeOptions = document.querySelector(".sizeOptions");
const BGColor = document.getElementById("BGColor");
const FGColor = document.getElementById("FGColor");

let sizeChoice = 100;
let BGColorChoice = "#ffffff";
let FGColorChoice = "#9b51e0";

// enable / disable button
userInput.addEventListener("input", () => {
  submitBtn.disabled = userInput.value.trim() === "";
});

// size
sizeOptions.addEventListener("change", () => {
  sizeChoice = sizeOptions.value;
});

// colors
BGColor.addEventListener("input", () => BGColorChoice = BGColor.value);
FGColor.addEventListener("input", () => FGColorChoice = FGColor.value);

// generate QR
submitBtn.addEventListener("click", () => {
  container.innerHTML = "";

  new QRCode(container, {
    text: userInput.value,
    width: sizeChoice,
    height: sizeChoice,
    colorDark: FGColorChoice,
    colorLight: BGColorChoice,
  });

  const canvas = container.querySelector("canvas");
  downloadBtn.href = canvas.toDataURL("image/png");
  downloadBtn.download = "qr-code.png";
  downloadBtn.classList.remove("hide");
});

// on load
window.onload = () => {
  BGColor.value = BGColorChoice;
  FGColor.value = FGColorChoice;
  submitBtn.disabled = true;
  downloadBtn.classList.add("hide");
};

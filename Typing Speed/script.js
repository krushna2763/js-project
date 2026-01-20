const quotes = [
  "JavaScript is the language of the web.",
  "Practice makes a developer perfect.",
  "Typing fast improves productivity.",
  "Consistency is the key to success.",
  "Learning to code is learning to think."
];

const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const startBtn = document.getElementById("startBtn");

let startTime, timerInterval, currentQuote;

startBtn.addEventListener("click", startTest);

function startTest() {
  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = currentQuote;

  inputEl.value = "";
  inputEl.disabled = false;
  inputEl.focus();

  timeEl.textContent = 0;
  wpmEl.textContent = 0;
  accuracyEl.textContent = 0;

  startTime = new Date();
  clearInterval(timerInterval);

  timerInterval = setInterval(updateTime, 1000);
}

function updateTime() {
  const currentTime = Math.floor((new Date() - startTime) / 1000);
  timeEl.textContent = currentTime;
}

inputEl.addEventListener("input", () => {
  const typedText = inputEl.value;

  if (typedText === currentQuote) {
    finishTest();
  }
});

function finishTest() {
  clearInterval(timerInterval);
  inputEl.disabled = true;

  const totalTime = Math.floor((new Date() - startTime) / 1000);
  const words = currentQuote.split(" ").length;
  const wpm = Math.round((words / totalTime) * 60);

  const typedChars = inputEl.value.length;
  const correctChars = currentQuote.length;
  const accuracy = Math.round((correctChars / typedChars) * 100);

  wpmEl.textContent = wpm || 0;
  accuracyEl.textContent = accuracy || 0;
}

const analyzeButton = document.getElementById("analyzeButton");
const resultContainer = document.getElementById("resultContainer");
const loader = document.getElementById("loader");

analyzeButton.addEventListener("click", analyzePerformance);

function analyzePerformance() {
    resultContainer.innerHTML = "";
    loader.style.display = "block";
    analyzeButton.disabled = true;

    const startTime = performance.now();

    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(() => {
            const endTime = performance.now();
            const elapsedTime = endTime - startTime;

            showResult(elapsedTime.toFixed(2));
        })
        .catch(() => {
            showError();
        });
}

function showResult(time) {
    loader.style.display = "none";
    analyzeButton.disabled = false;

    resultContainer.className = "result success";
    resultContainer.innerHTML = `✅ Network response time: <b>${time} ms</b>`;
}

function showError() {
    loader.style.display = "none";
    analyzeButton.disabled = false;

    resultContainer.className = "result error";
    resultContainer.innerHTML = `❌ Network request failed`;
}

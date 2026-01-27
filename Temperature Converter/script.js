function convertTemp() {
    const temp = parseFloat(document.getElementById("tempInput").value);
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(temp)) {
        resultDiv.textContent = "❌ Please enter a valid number!";
        return;
    }

    let result;

    // Convert to Celsius first
    let celsius;
    if (from === "celsius") celsius = temp;
    else if (from === "fahrenheit") celsius = (temp - 32) * 5/9;
    else celsius = temp - 273.15;

    // Convert from Celsius to target
    if (to === "celsius") result = celsius;
    else if (to === "fahrenheit") result = (celsius * 9/5) + 32;
    else result = celsius + 273.15;

    resultDiv.textContent = `✅ Result: ${result.toFixed(2)} ${unitSymbol(to)}`;
}

function unitSymbol(unit) {
    if (unit === "celsius") return "°C";
    if (unit === "fahrenheit") return "°F";
    return "K";
}

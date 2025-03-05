let numbers = [];

function insertNumber() {
    let num = parseFloat(document.getElementById("numberInput").value);
    if (!isNaN(num)) {
        numbers.push(num);
        updateDisplay();
    }
    document.getElementById("numberInput").value = "";
}

function deleteAll() {
    numbers = [];
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("numbers").innerHTML = numbers.join(", ");
    document.getElementById("sum").innerHTML = numbers.reduce((a, b) => a + b, 0);
    document.getElementById("highest").innerHTML = numbers.length ? Math.max(...numbers) : "";
    document.getElementById("lowest").innerHTML = numbers.length ? Math.min(...numbers) : "";
}
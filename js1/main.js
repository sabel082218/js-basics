function performOperations() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    document.getElementById("sum").innerHTML = num1 + num2;
    document.getElementById("Difference").innerHTML = num1 - num2;
    document.getElementById("Product").innerHTML = num1 * num2;
    document.getElementById("Quotient").innerHTML = num2 ? num1 / num2 : "Cannot divide by 0";
}

function clearEntries() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("sum").innerHTML = "";
    document.getElementById("Difference").innerHTML = "";
    document.getElementById("Product").innerHTML = "";
    document.getElementById("Quotient").innerHTML = "";
}

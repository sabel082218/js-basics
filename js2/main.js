function generateFullname() {
    let first = document.getElementById("firstName").value;
    let middle = document.getElementById("middleName").value;
    let last = document.getElementById("lastName").value;
    document.getElementById("fullname").innerHTML = `<b>${first} ${middle} ${last}</b>`;
}

function clearEntries() {
    document.getElementById("firstName").value = "";
    document.getElementById("middleName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("fullname").innerHTML = "";
}

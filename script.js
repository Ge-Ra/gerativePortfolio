function emptyForm() {
    let x = document.getElementById("fName").value;
    let y = document.getElementById("lName").value;
    if (x === " " || y === " ") {
        alert("Please input your name!");
        return false;
    } else {
        return true;
    }
}
// used to take keyboard input
document.onkeydown = isNumberKey;

// Function to check for valid input from keyboard
function isNumberKey(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (
        charCode !== 8 && // Allow backspace
        charCode !== 13 && // Allow enter key
        (charCode < 48 || charCode > 57) // Check if the pressed key is not a number
    ) {
        alert("Only numbers are allowed");
        event.preventDefault();
    }
}

// Attach the isNumberKey function to the onkeydown event of the document
let div = document.createElement("div");
document.body.append(div);
let outputScreen = document.getElementById("result");

function display(num) {
    outputScreen.value += num;
}
function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert("Invalid");
    }
}
function Clear() {
    outputScreen.value = "";
}
function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}
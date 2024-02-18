const prompt = require('prompt-sync')();

function addNumbers() {
    var num1 = parseFloat(prompt("Insert first number: "));
    var num2 = parseFloat(prompt("Insert second number: "));

    return num1 + num2;
}

console.log(addNumbers());

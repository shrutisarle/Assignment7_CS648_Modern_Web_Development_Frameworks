//STEP 1
function halfNumber(num1) {
    var half = num1 / 2;
    window.console.log("Half of" + num1 + "is" + half);
}

//STEP 2
function squareNumber(num2) {
    var sqaure = num2 * num2;
    window.console.log("The result of squaring the number " + num2 + " is " + sqaure);
}

//STEP 3
function percentOf(num1, num2) {
    var result = num1 / num2 * 100;
    window.console.log(num1 + " is " + result + " % of " + num2);
}

//STEP 4
function findModulus(num1, num2) {
    var mod = num1 % num2;
    window.console.log(mod + " is the modulus of " + num1 + " and " + num2);
}

//STEP 5

var i, base = 0;

function sum(numbers) {

    for (i = 0; i < numbers.length; i += 1) {
        base += parseInt(numbers[i]);
    }

    window.alert("Addition of all Numbers : " + base);
}

function main() {

    choice = window.prompt("Enter variables").split(",");
    sum(choice);
    halfNumber(44);
    squareNumber(12);
    findModulus(22, 11);
    percentOf(100, 10);
}

main();
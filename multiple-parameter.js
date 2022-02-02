function addTwoNumbers (number1, number2){
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}
var firstNumber = 21;
var secondNumber = 22;
var total = addTwoNumbers(firstNumber, secondNumber);
console.log('result value', total);

function multiplyTwoNumbers(num1, num2){
    console.log(num1, num2);
    var result = num1 * num2;
    return result;
}
var result = multiplyTwoNumbers(6, 8);
console.log('The result is', result);
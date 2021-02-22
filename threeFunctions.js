//function Decleration

function DeclerationFunction(number1, number2) {
    const squaredNumbers = (number1 * number1) + (number2 * number2);
    const totalSquared = squaredNumbers * squaredNumbers
    return totalSquared
}
console.log(DeclerationFunction(10, 20));
//250000



//Function expression
const ExpressionFunction = function (number1, number2) {
    const squaredNumbers = (number1 * number1) + (number2 * number2);
    const totalSquared = squaredNumbers * squaredNumbers
    return totalSquared
};
console.log(ExpressionFunction(10, 20));
//250000



//Arrow Function
const ArrowFunction = (number1, number2) => ((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2));
console.log(ArrowFunction(10, 20));
//250000
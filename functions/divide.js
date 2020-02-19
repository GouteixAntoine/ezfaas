function divide(numberOne, numberTwo) {
    numberOne = parseInt(numberOne);
    numberTwo = parseInt(numberTwo);
    return [numberOne + " Divisé par " + numberTwo, numberTwo === 0 ? 0 : numberOne / numberTwo];
}

module.exports = divide;

function multiply(numberOne, numberTwo) {
    numberOne = parseInt(numberOne);
    numberTwo = parseInt(numberTwo);
    return [numberOne + " Multiplié par " + numberTwo, numberOne * numberTwo];
}

module.exports = multiply;

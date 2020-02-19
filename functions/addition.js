function addition(numberOne, numberTwo) {
    numberOne = parseInt(numberOne);
    numberTwo = parseInt(numberTwo);
    return [numberOne + " Plus " + numberTwo, numberOne + numberTwo];
}

module.exports = addition;

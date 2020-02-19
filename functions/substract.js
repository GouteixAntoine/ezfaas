function substract(numberOne, numberTwo) {
    numberOne = parseInt(numberOne);
    numberTwo = parseInt(numberTwo);
    return [numberOne + " Moins " + numberTwo, numberOne - numberTwo];
}

module.exports = substract;

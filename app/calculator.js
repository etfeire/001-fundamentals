function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function isOdd(a) {
    if (a % 2 == 1)
        return true
    else
        return false
}

function isEven(a) {
    if (a % 2 == 0)
        return true
    else
        return false
}

function divisibleBy(a, b) {
    if (a % b == 0) 
        return true
    else
        return false
}

function squared(a) {
    return a*a
}

module.exports = {
    add,
    subtract,
    multiply,
    isOdd,
    isEven,
    divisibleBy,
    squared 
};
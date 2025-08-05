class Calculator {
    add(a, b) {
        return a + b;
    }

    substract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) throw new Error('Cannot divide by zero');

        return (a / b).toFixed(3);
    }
}

const newfn = () => 145;

const calc = new Calculator();


module.exports = Calculator;

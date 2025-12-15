const Calculator = require('../js/Calculator');

describe('Calculator', () => {
    let calc = null;

    beforeEach(() => {
        calc = new Calculator();
    });


    test('adds two numbers', () => {
        expect(calc.add(4, 8)).toBe(12);
        expect(calc.add(-4, -3)).toBe(-7);
    });

    test('substracts two numbers', () => {
        expect(calc.substract(4, 8)).toBe(-4);
        expect(calc.substract(-4, -3)).toBe(-1);
    });

    test('multiplies two numbers', () => {
        expect(calc.multiply(4, 8)).toBe(32);
        expect(calc.multiply(-4, -3)).toBe(12);
    });

    test('divides two numbers', () => {
        expect(calc.divide(4, 8)).toBe((0.5).toFixed(3));
        expect(calc.divide(-4, -3)).toBe((1.33333).toFixed(3));

        expect(() => calc.divide(-4, 0)).toThrow('Cannot divide by zero');
    });
});

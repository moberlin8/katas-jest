const fizzbuzz = require("../src/fizzBuzz");

describe('Multiples of 3 return fizz so', () => {
    test('Three returns Fizz', () => {
        expect(fizzbuzz.fizzbuzz(3)).toEqual('Fizz');
    })

    test('Other numbers return the same number', () => {
        expect(fizzbuzz.fizzbuzz(1)).toEqual('1');
        expect(fizzbuzz.fizzbuzz(2)).toEqual('2');
    })

    test('Six should also return Fizz', () => {
        expect(fizzbuzz.fizzbuzz(6)).toEqual('Fizz');
    })
    test('Five returns Buzz', () => {
        expect(fizzbuzz.fizzbuzz(5)).toEqual('Buzz');
    })
    test('Twenty Five returns Buzz', () => {
        expect(fizzbuzz.fizzbuzz(25)).toEqual('Buzz');
    })

});


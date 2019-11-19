const fizz = require("../src/fizzBuzz");
const buzz = require("../src/fizzBuzz");

describe('Multiples of 3 return fizz so', () => {
    test('Three returns Fizz', () => {
        expect(fizz(3)).toEqual('Fizz');
    })

    test('Other numbers return the same number', () => {
        expect(fizz(1)).toEqual('1');
        expect(fizz(2)).toEqual('2');
    })

    test('Six should also return Fizz', () => {
        expect(fizz(6)).toEqual('Fizz');
    })
})


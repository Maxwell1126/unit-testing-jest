const divide = require('../modules/divide');

test('If the number is divisible by 3, return "Fizz".', () => {
    expect(divide(3)).toBe("Fizz")
})

test('If the number is divisible by 5, return "Buzz".', () => {
    expect(divide(20)).toBe("Buzz")
})

test('If the number is divisible by 5 and 3, return "FizzBuzz".', () => {
    expect(divide(15)).toBe("FizzBuzz")
})

test('If the number is not divisible by 5 or 3, return the number.', () => {
    expect(divide(8)).toBe(8)
})
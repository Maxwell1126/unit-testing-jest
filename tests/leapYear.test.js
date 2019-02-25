const leapYear = require('../modules/leapYear');

test('takes in a year and returns true for leap years and false otherwise.',()=>{
    expect(leapYear(200)).toBe(false);
})

test('takes in a year and returns true for leap years and false otherwise.', () => {
    expect(leapYear(400)).toBe(true);
})

test('takes in a year and returns true for leap years and false otherwise.', () => {
    expect(leapYear(20)).toBe(true);
})

test('takes in a year and returns true for leap years and false otherwise.', () => {
    expect(leapYear(2000)).toBe(true);
})
test('takes in a year and returns true for leap years and false otherwise.', () => {
    expect(leapYear(2200)).toBe(false);
})
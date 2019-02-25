const sum = require('../modules/sum');

test('take in two integers and return sum', () => {
    expect(sum(1, 2)).toBe(3)
})

test('take a decimal and an integer return sum', ()=>{
    expect(sum(1.5,2)).toBe(3.5)
})

test('take a positive and an negative integer return sum', () => {
    expect(sum(1, -2)).toBe(-1)
})

test('take one integer return sum', () => {
    expect(sum(1)).toBe(1)
})

test('take in two integers as strings return sum', () => {
    expect(sum('1','2')).toBe(3)
})

test(`take in two strings and return NaN`, () => {
    expect(sum('foo', 'bar')).toBe(NaN);
});
const { sum, checkCapital, reverseString, calculator } = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Is it capitalised?', () => {
    expect(checkCapital('dog')).toBe('Dog');
});
test('Is it capitalised?', () => {
    expect(checkCapital('cat')).toBe('Cat');
});
test('Is first letter only capitalised?', () => {
    expect(checkCapital('cAt')).toBe('Cat');
});
test('Is space ignored?', () => {
    expect(checkCapital(' cAt')).toBe('Cat');
});
test('Is space ignored (2)?', () => {
    expect(checkCapital(' cAT     ')).toBe('Cat');
});

test('reverse string (1)', () => {
    expect(reverseString('home')).toBe('emoh');
});
test('reverse string (2)', () => {
    expect(reverseString('cat')).toBe('tac');
});
test('reverse string with space', () => {
    expect(reverseString('    cat    ')).toBe('tac');
});
test('reverse multiple word string', () => {
    expect(reverseString('cats and dogs')).toBe('sgod dna stac');
});
test('reverse multiple word string with space before', () => {
    expect(reverseString('    cats and dogs')).toBe('sgod dna stac');
});
test('calculator: add', () => {
    expect(calculator.add(2, 3)).toBe(5);
});
test('calculator: sub', () => {
    expect(calculator.sub(3, 2)).toBe(1);
});
test('calculator: mul', () => {
    expect(calculator.mul(3, 2)).toBe(6);
});
test('calculator: div', () => {
    expect(calculator.div(6, 2)).toBe(3);
});

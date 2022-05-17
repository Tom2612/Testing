const { sum, checkCapital, reverseString, calculator, caesarCipher, analyzeArray } = require('./sum');

//Simple test for sum
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

//Tests for capitalisation
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

//Tests for string reversing
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

//Tests for calculator
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

//Tests for caesarCipher
test('CaesarCipher test (1)', () => {
    expect(caesarCipher('cat')).toBe('dbu');
});
test('CaesarCipher test (2)', () => {
    expect(caesarCipher('dog')).toBe('eph');
});
test('CaesarCipher: capitals', () => {
    expect(caesarCipher('Cat')).toBe('Dbu');
});
test('CaesarCipher: z', () => {
    expect(caesarCipher('zero')).toBe('afsp');
});
test('CaesarCipher: capital Z', () => {
    expect(caesarCipher('Zero')).toBe('Afsp');
});
test('CaesarCipher: message', () => {
    expect(caesarCipher('Hello you')).toBe('Ifmmp!zpv');
});
test('CaesarCipher: complex', () => {
    expect(caesarCipher('Zestiness is bestez!')).toBe('Aftujoftt jt cftufa!');
});

//Tests for arrayAnalyser
test('Analyzer', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});
test('return object', () => {
    expect(analyzeArray([2, 4, 6])).toStrictEqual({
        average: 4,
        min: 2,
        max: 6,
        length: 3
    });
});
test('reversed array', () => {
    expect(analyzeArray([6, 4, 2])).toStrictEqual({
        average: 4,
        min: 2,
        max: 6,
        length: 3
    });
});

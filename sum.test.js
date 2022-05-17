const { sum, checkCapital } =require('./sum');

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
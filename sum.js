function sum(a, b) {
    return a + b;
}

function checkCapital(string) {
    const split = string.trim().toLowerCase().split('');
    split.splice(0, 1, split[0].toUpperCase());
    return split.join('');
}

function reverseString(string) {
    return string.trim().split('').reverse().join('');
}

const calculator = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => a / b
};

//Using Module pattern
// const calculator = (() => {
//     const add = (a, b) => a + b;
//     const sub = (a, b) => a - b;
//     const mul = (a, b) => a * b;
//     const div = (a, b) => a / b;
//     return {
//     add,
//     sub,
//     mul,
//     div
// }
// })();

function caesarCipher(string) {

}

function analyzeArray(array) {

}
module.exports = { sum, checkCapital, reverseString }

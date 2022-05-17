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
    let map = Array.prototype.map;
    let newArr = [];
    let arr = map.call(string, (x) => x.charCodeAt(0));
    for (let value of arr) {
        if (value == 122) {
            newArr.push(97);
        } else if (value == 90) {
            newArr.push(65);
        } else if (value < 65 || value > 122) {
            newArr.push(value);
        } else {
            newArr.push(value + 1);
        }
    }
    return String.fromCharCode(...newArr);
};

function analyzeArray(array) {
    return {
        average: array.reduce((prev, current) => (prev + current)) / array.length,
        min: array.reduce ((prev, current) => current < prev ? current : prev),
        max: array.reduce((prev, current) => current > prev ? current : prev),
        length: array.length
    }
};

module.exports = { sum, checkCapital, reverseString, calculator, caesarCipher, analyzeArray }

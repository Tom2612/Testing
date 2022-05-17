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

function calculator() {
    
}

function caesarCipher(string) {

}

function analyzeArray(array) {

}
module.exports = { sum, checkCapital, reverseString }

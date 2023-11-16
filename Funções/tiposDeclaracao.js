console.log(soma(3, 4)) // pode ser chamada antes na Declaration... as demais não!

// Function Declaration
function soma(x, y) {
    return x + y
}


// Function Expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))


// Named Function Expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))
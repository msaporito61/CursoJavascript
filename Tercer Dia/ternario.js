function minimo (x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

console.log(minimo(55, 19));

var a = 55;
var b = 55;

console.log(a > b ? b : a);

function compararNumeros (a, b) {
    if (a === b) {
        return "a y b son iguales";
    } else if (a > b) {
        return "a es mayor que b";
    } else {
        return "b es mayor que a";
    }
}

function compararNumerosTernario (a, b) {
    return a === b ? "a y b son iguales"
        : a > b ? "a es mayor que b"
            : "b es mayor que a";
}

console.log(compararNumeros(a, b));
console.log(compararNumerosTernario(a, b));
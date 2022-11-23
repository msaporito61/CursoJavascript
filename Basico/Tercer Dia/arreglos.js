var a;
var b;

[a, b] = [1, 2]

[a, b] = [1, 2, 3, 4, 5];

[a, b, , , , c] = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(a, b, c)

var a = 15
var b = 30

// console.log(a, b);

[b, a] = [a, b]

//console.log(a, b)


var x;
var y;
var arr;

[x, y, ...arr] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(x);
// console.log(y);
// console.log(arr);

arregloIncial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arregloNuevo = (arreglo) => {
    const [, , , ...resultado] = arreglo;
    return resultado;
}

console.log(arregloNuevo(arregloIncial));
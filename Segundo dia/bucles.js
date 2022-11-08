var i = 0;

/*
while (i <= 3) {
    console.log(i);
    i++;
}
*/
var arreglo = [];

//console.log(arreglo);

while (i < 10) {
    arreglo.push(i);
    i++;
}

// console.log(arreglo);

var numeros = [2, 3, 4, 5, 6, 7, 8, 9, 57];
// console.log(numeros)

while (numeros.length > 4) {
    numeros.pop();
}

// console.log(numeros)

var arreglo = [];

// console.log(arreglo)
for (var i = 1; i < 10; i++) {
    arreglo.push(i);
}
// console.log(arreglo)

var arreglo = [];

// console.log(arreglo)
for (var i = 1; i < 10; i += 2) {
    arreglo.push(i);
}
// console.log(arreglo)

var arreglo = [];

// console.log(arreglo)
for (var i = 15; i >= 10; i--) {
    arreglo.push(i);
}
// console.log(arreglo)

var arreglo = [4, 6, 8, 2, 10];
var total = 0;

for (var i = 0; i < arreglo.length; i++) {
    total += arreglo[i]
}

// console.log(total);


var lenguajes = ["Javascript", "Python", "Java", "C++"];
for (var i = 0; i < lenguajes.length; i++) {
    // console.log(lenguajes[i].toUpperCase());
}

var arreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var i = 0; i < arreglo.length; i++) {
    var arregloAnidado = arreglo[i];
    for (var j = 0; j < arregloAnidado.length; j++) {
        // console.log(arregloAnidado[j]);
    }
}

var x;
x = 5;

do {
    console.log(x);
    x++
} while (x < 10)
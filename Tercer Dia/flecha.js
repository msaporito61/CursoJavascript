const fecha = function () {
    return new Date();
}

const fechax = () => new Date();

// console.log(fecha);
// console.log(fechax);

const sumaTres = (x) => x + 3;

// console.log(sumaTres(5));

const sumaSeis = (a = 11, b) => {
    let num = 6;
    return a + b + num;
};

// console.log(sumaSeis(5, 7));
// console.log(sumaSeis(5));

function prueba (...pepe) {
    console.log(pepe)
}

prueba(1, 2, 3, 5, "Blanco");


const sumarx = (x, y, z) => {
    const sumandos = [x, y, z];
    return sumandos.reduce((a, b) => a + b, 0);
}

const sumar = (...sumandos) => {
    return sumandos.reduce((a, b) => a + b, 0);
}

console.log(sumar(4, 5, 7));


const numeros = [1, 2, 3]

console.log(sumarx(...numeros));
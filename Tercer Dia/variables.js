var empleado = "Juan"
var empleado = "Jose"

let colaborador = "Lucho"
colaborador = 5


console.log(empleado)
console.log(colaborador)


function areaCirculo (radio) {
    const PI = 3.14;
    return (radio > 0) ? PI * (radio ** 2) : undefined;
}

console.log(areaCirculo(10));
console.log(areaCirculo(-10));

const ARREGLO = [1, 2, 3, 4];

ARREGLO[0] = 5;

console.log(ARREGLO);
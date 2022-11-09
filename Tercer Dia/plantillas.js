var a = 6;

console.log(`El valor de a es ${a}`);

var nombre = "Lucho";
var edad = 50;

console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`)

var arreglo = [1, 2, 3, 4];

console.log(`El arreglo es ${JSON.stringify(arreglo)}`);

var persona = {
    nombre: "Pepe",
    edad: 23
}

let saludo = `Hola mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`

console.log(saludo);

persona.nombre = "Lucho";
saludo = `Hola mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`

console.log(saludo);
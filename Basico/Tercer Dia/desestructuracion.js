const usuario = {
    nombre: "Juan",
    edad: 40,
    trabaja: "NCR"
}


const { nombre, edad, trabaja } = usuario;

console.log(nombre);
console.log(edad);
console.log(trabaja);

const cliente = {
    juan: {
        edad: 27,
        correo: "juan@mail.com"
    }
};

const { juan: { edad: edadCliente, correo: correoCliente } } = cliente

console.log(edadCliente)
console.log(correoCliente)

const PRONOSTICO_LOCAL = {
    ayer: {
        minima: 18,
        maxima: 24
    },
    hoy: {
        minima: 16,
        maxima: 25
    },
    mañana: {
        minima: 17,
        maxima: 23
    }
};

const minimaHoy = PRONOSTICO_LOCAL.hoy.minima;
const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;

console.log(minimaHoy, maximaHoy);

const { ayer: { minima: minimaAyer, maxima: maximaAyer } } = PRONOSTICO_LOCAL;

console.log(minimaAyer, maximaAyer)
var cuaderno = {
    tapa: "dura",
    papel: "A4",
    precio: 100
}


// console.log(cuaderno.hasOwnProperty("tapa"));
// console.log(cuaderno.hasOwnProperty("paginas"));

function verificarPropiedad (obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
        return "Propiedad: " + obj[propiedad];
    } else {
        return "El objeto no tiene esta propiedad.";
    }
}

console.log(verificarPropiedad(cuaderno, "paginas"));
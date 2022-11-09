function generar () {
    return Math.floor(Math.random() * 251);
}

function rangoSimulacion (limiteInferior, limiteSuperior) {
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior)) + limiteInferior
}

// console.log(generar());
for (var i = 0; i < 10; i++) {
    console.log(rangoSimulacion(10, 26));
}

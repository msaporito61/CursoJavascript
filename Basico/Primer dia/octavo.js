function clasificar(valor) {
    var respuesta;

    switch (valor) {
        case 1:
        case 2:
        case 3:
            respuesta = "alfa";
            break;
        case 4:
        case 5:
        case 6:
            respuesta = "beta";
            break;
        case 7:
            respuesta = "delta";
            break;
        case 8:
            respuesta = "epsilon";
            break;
        default:
            respuesta = "Fuera de rango";
            break;
    }
    return respuesta;
}


console.log(clasificar(5));

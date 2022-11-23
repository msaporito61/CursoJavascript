function clasificar(valor) {

    if (valor % 2 == 0 ) {
        console.log("Divisible por 2");
    } else if ( valor % 3 == 0 ) {

        console.log("Divisible por 3");
    } else {
        console.log(" No es divisible por 2 ó 3 ")
    }
}


clasificar(4);
clasificar(15);
clasificar(7);
clasificar(6);


function esMenorQue(a, b){
    return a < b;
}

function raizCuadrada(num) {
    if (num < 0){
        return undefined;
    }
    return Math.sqrt(num);
}



console.log(esMenorQue(7,10));
console.log(raizCuadrada(-16));

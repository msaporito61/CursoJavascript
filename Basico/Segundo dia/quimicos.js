function buscarElementoQuimico (simbolo) {
    var simbolosQuimicos = {
        Al: ["Aluminio", 15],
        S: "Azufre",
        H: "Hidrogeno",
        Cl: "Cloro",
        He: "Helio"
    };

    return simbolosQuimicos[simbolo]
}

console.log(buscarElementoQuimico("Al"));


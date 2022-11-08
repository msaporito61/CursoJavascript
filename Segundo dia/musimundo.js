var coleccionDiscos = {
    7853: {
        tituloDelAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: ["Stayin'Alive"]
    },
    5439: {
        tituloDelAlbum: "ABBA Gold"
    }
};

/*
discos  =  obj
id = numero
propiedad 
valor 
*/

function actualizarDisco (coleccionD, albun, propiedad, valor) {
    if (valor === "") {
        delete coleccionD[albun][propiedad];
    } else if (typeof coleccionD[albun][propiedad] === "object") {
        coleccionD[albun][propiedad].push(valor);
    } else {
        coleccionD[albun][propiedad] = valor;
    }

    return coleccionD;
}
console.log(actualizarDisco(coleccionDiscos, 7853, "canciones", "Cancion2"));
console.log(actualizarDisco(coleccionDiscos, 5439, "artista", "Palito Ortega"));
console.log(actualizarDisco(coleccionDiscos, 7853, "artista", "Sandro"));
console.log(actualizarDisco(coleccionDiscos, 5439, "sello", "Sony"));
console.log(actualizarDisco(coleccionDiscos, 5439, "sello", ""));
//console.log(actualizarDisco(coleccionDiscos, 7853, "canciones", ""));
console.log(actualizarDisco(coleccionDiscos, 7853, "recitales", ["River", "Obras", "La Plata"]));
console.log(actualizarDisco(coleccionDiscos, 7853, "recitales", ""));
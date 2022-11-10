

class Cohete {
    constructor(modelo) {
        this.modelo = modelo;
    }
}

const falcon9 = new Cohete("falcon9");

console.log(falcon9.modelo);



class Libro {
    constructor(autor, idioma, año) {
        this._autor = autor;
        this._idioma = idioma;
        this._año = año;
    }

    get autor () {
        return this._autor;
    }

    get idioma () {
        return this._idioma;
    }

    get año () {
        return this._año;
    }

    set idioma (nuevoIdioma) {
        this._idioma = nuevoIdioma
    }

}

const alpeh = new Libro("Jorge Luis Borges", "Castellano", "1949");
console.log(alpeh.año);
alpeh.idioma = "Aleman";
console.log(alpeh)
alpeh._autor = "Martin Caparros";
console.log(alpeh)

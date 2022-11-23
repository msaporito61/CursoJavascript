var miReceta = {
    "descripcion": "mi postre favorito",
    "costo": 15.6,
    "ingredientes": {
        "masa": {
            "harina": "100 grs",
            "sal": "1 cucharadita",
            "agua": "1 taza"
        },
        "cobertura": {
            "azucar": "120 grs",
            "chocolate": "4 cucharadas",
            "manteca": "200 grs"
        }
    }
};

miReceta.ingredientes.masa["jugo de limon"] = "2 cucharadas"

console.log(miReceta.descripcion)
console.log(miReceta.costo)
console.log(miReceta.ingredientes)
console.log(miReceta.ingredientes.masa)


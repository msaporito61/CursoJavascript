let colores = {
    verde: "#10e04b",
    azul: "#1b50e0",
    negro: "#000000",
    blanco: "#ffffff"
}
console.log(colores)

Object.freeze(colores)

colores.amarillo = "#fff200";

console.log(colores)
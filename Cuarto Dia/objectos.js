const crearPersona = (nombre, edad, idioma) => {
    return {
        nombre: nombre,
        edad: edad,
        idioma: idioma,
        presentacion () {
            return `Hola mi nombre es ${this.nombre}.`;
        },
        nueva () {
            console.log(this.nombre);
        }
    };
}

const lucho = crearPersona("Lucho", 50, "Castellano")

const crearOtraPersona = (nombre, edad, idioma) => ({ nombre, edad, idioma })

console.log(crearOtraPersona("Pablo", 55, "Guarani"))


var x = 1;
var y = 2;
var z = 3;
var apellido = "Garcia"

console.log({ x, y, z, apellido })

const persona = {
    nombre: "Juan",
    apellido: "Gomez",
    presentacion () {
        return `Hola mi nombre es ${this.nombre} ${this.apellido}.`;
    }
}

console.log(persona.presentacion());
console.log(lucho.presentacion());
lucho.nueva();

var nuevoPerfil = {
    nombre: "Juan Perez",
    edad: 24,
    nacionalidad: "Argentino",
    ubicacion: "Portugal"
}

const actualizarPerfil = (informacionPerfil) => {
    const { nombre, edad, nacionalidad, ubicacion } = informacionPerfil;
    console.log(nombre);
}

const actualizarPerfilx = ({ nombre, edad }) => {
    console.log(nombre);
}

const actualizarPerfily = ({ nombre }) => console.log(nombre);

actualizarPerfil(nuevoPerfil);
actualizarPerfilx(nuevoPerfil);
actualizarPerfily(nuevoPerfil);
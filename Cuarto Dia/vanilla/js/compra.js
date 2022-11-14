"use strict";

const texto = document.getElementById("texto");
const input = document.getElementById("enviar");
const lista = document.querySelector(".lista");
const btnLimpiar = document.querySelector(".limpiar");

input.addEventListener("click", (e) => {
    e.preventDefault()
    const linea = document.createElement("li");
    const crearBoton = document.createElement("button");
    if (texto.value === "") {
        alert("Ingrese producto");
    } else {
        crearBoton.innerHTML = "<img src='../icons/trash.svg' alt='basura' />"
        crearBoton.classList.add("trash");
        const lineaLista = lista.appendChild(linea);
        lineaLista.append(texto.value);
        lineaLista.appendChild(crearBoton);
        texto.value = "";
    }
})

lista.addEventListener("click", (e) => {
    console.log(e)
    const item = e.target;
    console.log(item)
    if (item.classList[0] === "trash") {
        const lineaOut = item.parentElement;
        lineaOut.remove()
    }
})

btnLimpiar.addEventListener("click", (e) => {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
})

console.log(lista);



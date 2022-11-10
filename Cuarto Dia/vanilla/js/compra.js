"use strict";

const texto = document.getElementById("texto");
const input = document.getElementById("enviar");
const lista = document.querySelector(".lista");

input.addEventListener("click", (e) => {
    e.preventDefault()
    const linea = document.createElement("li");
    const lineaLista = lista.appendChild(linea);
    lineaLista.append(texto.value)
    console.log(lista);
})


const btnLimpiar = document.querySelector(".limpiar");

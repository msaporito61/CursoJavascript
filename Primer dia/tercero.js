/* Secuencias de Escape
 Codigo | Resultado
 ------------------
 \'      Comilla Simple
 \"      Comilla Doble
 \\      Barra Invertida
 \n      Linea nueva
 \r      Retorno de Carro
 \t      Tabulacion
 \b      Retroceso
 \f      Salto de pagina
 ...
*/

var cadena = " Curso de lenguaje \"Javascript\" 2022 ";
// console.log(cadena);
var verbo = "programar";
verbo[0] = "P";
var mensaje = "Estoy aprendiendo a " + verbo + " con \'Javascript\'.";
console.log(mensaje[mensaje.length - 1]);

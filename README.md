# Temario Curso Javascript:

## Inicio

### Ejecutar JavaScript
#### creo un archivo *index.html* 

```html
<script>
    console.log("Hola Mundo!")
</script>
```

### Comentarios
```javascript
// Comentario

/* Comentario
Multilinea
*/
```

### Variables

#### Tipos de Datos:
undefined, null, boolean, string, symbol, number y object

```javascript


var miVariable = "freeCodeCamp";
console.log(miVariable);

miVariable = 16;
miVariable = false;
```

### Operador de asignación
```javascript
var a;
var b = 2;

console.log(a); // undefined
console.log(b); // Tiene valor

a = 10;
```

### Asignar el valor de una variable a otra
```javascript
var a = 5;
var b = a;

console.log(a); 
console.log(b); 

var a = 5;
var b;
b = a;
```

### Inicializar variables
```javascript
var x = 9;

var miIdioma = "Español"; // camelCase
```

### Variables no inicializadas
```javascript
var a;
var b;

console.log(a)
```

### Mayúsculas y minúsculas
```javascript
var miVariable = 5;
console.log(MIVARIABLE); // Error
```

### Suma
```javascript
var suma = 7 + 12;
console.log(suma);
```

### Resta
```javascript
var resta = 15 - 5;
console.log(resta); // 10
resta = 5 - 15; 
console.log(resta); // -10
resta = 15 - 15;
console.log(resta); // 0
```

### Multiplicación
```javascript
var producto = 5 * 3;
console.log(producto);

producto = 9 * 0;
console.log(producto);

producto = -5 * 6;
console.log(producto);

```
### División
```javascript
var cociente = 20 / 2;
console.log(cociente);

var cociente = 17 / 31;
console.log(cociente);


var cociente = 3 / 0;
console.log(cociente);

```
### Números Decimales
```javascript
var miNumeroDecimal = 23.4;

var peso = 78.34;

```
### Multiplicar números decimales

```javascript
var producto = 3.4 * 10.4;
console.log(producto);

producto = 2.4 * 4;
console.log(produto);

producto = 6 * 8.9;
console.log(producto);

producto = 3.6 * 0.0;
console.log(producto);

producto = -4.8 * 2.7;
console.log(producto);
```
### Dividir números decimales

```javascript
var cociente = 5.0 / 2.0;
console.log(cociente);

cociente = 2.3 / 6.7;
console.log(cociente);

cociente = 2.3 / 0.0;
console.log(cociente);

```
### Resto de una división

```javascript
var resto = 15 % 5;
console.log(resto);

resto = 5 % 1;
console.log(resto);

resto = 5 % 2;
console.log(resto);

resto = 5 % 3;
console.log(resto);

resto = 5 % 4;
console.log(resto);

```
### Incrementar el valor de una variable

```javascript
var librosComprados = 105;
console.log(librosComprados); //Inicialmente

// Opcion 1
librosComprados = librosComprados + 1
console.log(librosComprados);

// Opcion 2
librosComprados++;
console.log(librosComprados);

```
### Reducir el valor de una variable

```javascript
var numeroDeEmpleados = 256;
console.log(numeroDeEmpleados);

numeroDeEmpleados = numeroDeEmpleados - 1;
console.log(numeroDeEmpleados);

numeroDeEmpleados--;
console.log(numeroDeEmpleados);

```
### Asignación de suma

```javascript
var a = 23;
a = a + 5;
console.log(a);

a += 5;
console.log(a);

var totalVentas = 13567.50;
console.log(totalVentas);

totalVentas += 345.67;
console.log(totalVentas);

```
### Asignación de resta

```javascript
var a = 23;
a = a - 5;
console.log(a);

a -= 5;

var totalDeuda = 2446;
totalDeuda -= 345;
console.log(totalDeuda);

```
### Asignación de multiplicación

```javascript
var c = 23;

c = c * 2;

console.log(c);

c *= 2;

var salario = 45000;
console.log(salario);

salario *= 5;
console.log(salario);
```
### Asignación de división

```javascript
var d = 39;

d = d / 3;

console.log(d);

var salario = 45000;

salario /= 2;

console.log(salario);


```
### Variables con cadenas de caracteres

```javascript
var nombre = "Juan";
console.log(nombre);
var apellido = 'Perez';

```
### Escapar comillas

```javascript
var miCadena = "Soy una cadena \"con comillas\"";
console.log(miCadena);

var miMeta;

miMeta = 'Aprender a "programar"';
console.log(miMeta);

```
### Secuencias de escape
```javascript
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

 console.log("Estoy aprendiendo \"Javascript\"");
 console.log("Estoy aprendiendo \\ Javascript");
 console.log("Estoy aprendiendo: \nJavascript");
```
### Concatenar cadenas de caracteres

```javascript
var nombreCompleto = "Alan " + "Turing";
console.log(nombreCompleto);


```
### Construir cadenas con variables

```javascript
var verbo = "programar";
var mensaje = "Estoy aprendiendo a " + verbo + " con Javascript";
console.log(mensaje);
```
### Agregar variables a cadenas de caracteres

```javascript

var mensajeCompleto = "Estoy aprendiendo a programar ";
var parteFinal = "con Javascript";

console.log(mensajeCompleto);

mensajeCompleto += parteFinal;

console.log(mensajeCompleto);

```
### Longitud de una cadena de caracteres

```javascript
var miCadena = "A";
console.log(miCadena.length);

```
### Notación de corchetes: primer carácter

```javascript
var lenguajeDeProgramacion = "JavaScript";
/*
Cadena:     J a v a s c r i p t
Indices:    0 1 2 3 4 5 6 7 8 9
*/

console.log(lenguajeDeProgramacion[0]);
```
### Inmutabilidad de cadenas de caracteres

```javascript
var miCadena = "Hola, Nundo";

console.log(miCadena);

miCadena[6] = "M"; // Error

miCadena = "Hola, Mundo";

console.log(miCadena);

```
### Notación de corchetes: enésimo carácter 

```javascript
var lenguajeDeProgramacion = "JavaScript";
/*
Cadena:     J a v a s c r i p t
Indices:    0 1 2 3 4 5 6 7 8 9
*/
console.log(lenguajeDeProgramacion[0]);
console.log(lenguajeDeProgramacion[1]);
console.log(lenguajeDeProgramacion[2]);
console.log(lenguajeDeProgramacion[3]);
console.log(lenguajeDeProgramacion[4]);
console.log(lenguajeDeProgramacion[5]);
console.log(lenguajeDeProgramacion[6]);
console.log(lenguajeDeProgramacion[7]);
console.log(lenguajeDeProgramacion[8]);
console.log(lenguajeDeProgramacion[9]);
```
### Notación de corchetes: último carácter

```javascript

var lenguajeDeProgramacion = "JavaScript";
/*
Cadena:     J a v a s c r i p t
Indices:    0 1 2 3 4 5 6 7 8 9
*/

console.log(lenguajeDeProgramacion[lenguajeDeProgramacion.length - 1]); // t
```
### Notación de corchetes: de derecha a izquierda

```javascript
var miCadena;
miCadena = "Javascript";
console.log(miCadena[miCadena.length - 3]);
```
### Arreglos

```javascript
var miArreglo = ["Juan", 24];
console.log(miArreglo);

var estudiantes = ["Lucho", "Pablo", "Gustavo", "Julian"];
console.log(estudiantes);

var notas = [95, 67, 89, 56];
console.log(notas);
```
### Arreglos anidados

```javascript
var listaDeEstudiantes = [["Lucho", 95], ["Pablo", 67], ["Gustavo", 89], ["Julian", 56]];

console.log(listaDeEstudiantes);


var listaDeProductos = [["Camisa", 6.75, "S134"], ["Pantalones", 17.90, "S220"], ["Zapatillas", 41.50, "S897"]];

console.log(listaDeProductos);

var datos = [[3.4, 5.6, 3.2], [6.7, 9.8, 7.7], [4.5, 7.1, 1.9]];

console.log(datos);
```
### Acceder a los elementos de un arreglo

```javascript
var miArreglo = [10, 20, 30];

/*
Arreglo:    [10, 20, 30]
Indices:      0   1   2
*/

console.log(miArreglo[0]);  // 10
console.log(miArreglo[1]);  // 20
console.log(miArreglo[2]);  // 30

var suma = miArreglo[0] + miArreglo[1] + miArreglo[2];
console.log(suma);
```
### Modificar elementos de un arreglo

```javascript
var miArreglo = [10, 20, 30];

miArreglo[0] = 40;

console.log(miArreglo);

```
### Acceder a arreglos multidimensionales

```javascript
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

/*
Arreglo:          [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Indices:               0          1          2
Indices Internos:   0  1  2    0  1  2    0  1  2 
*/

console.log(miArreglo[0]); // [1, 2, 3]
console.log(miArreglo[1]); // [4, 5, 6]
console.log(miArreglo[2]); // [7, 8, 9]

console.log(miArreglo[1][2]); // 6
console.log(miArreglo[2][0]); // 7
```
### Método *.push()*

```javascript
var estaciones = ["Invierno", "Otoño", "Primavera"];
estaciones.push("Verano");

console.log(estaciones);
```
### Método *.pop()*

```javascript

var estaciones;
var estacion;
estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];

estacion = estaciones.pop();
console.log(estaciones); // ["Invierno", "Otoño", "Primavera"`]
console.log(estacion); // "Verano"
```
### Método *.shift()*

```javascript

var estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];
estaciones.shift();

console.log(estaciones); // ["Otoño", "Primavera", "Verano"]
```
### Método *.unshift()*

```javascript
var estaciones = ["Invierno", "Otoño", "Primavera"];
estaciones.unshift("Verano");

console.log(estaciones); // ["Verano", "Invierno", "Otoño", "Primavera"`]

```
### Funciones

```javascript
function mostrarMensaje() {
    console.log("Hola Mundo!");
}

mostrarMensaje();
mostrarMensaje();

```
### Parámetros y Argumentos

```javascript
function sumar(a, b) {
    var suma = a + b;
    console.log("El resultado de " + a + " + " + b + " es: " + suma);
}

function concatenarTresCadenas(cadena1, cadena2, cadena3) {
    console.log(cadena1 + " " + cadena2 + " " + cadena3);
}

var x = 5;
var y = 3;

sumar(x, y);

concatenarTresCadenas("Estoy","aprendiendo", "a programar");


```
### Ámbito global y variables globales

```javascript
var miVariableGlobal = 5;

console.log(miVariableGlobal);

function miFuncion() {
    console.log(miVariableGlobal);
}

miFuncion();

console.log(miVariableGlobal);

```
### Ámbito local y variables locales

```javascript
function miFuncion() {
    var miVariableLocal = 4;
    console.log(miVariableLocal);
}

miFuncion();

console.log(miVariableLocal); // Error

```
### Ámbito global vs. ámbito local

```javascript
var miNombre = "Lucho";

function mostrarMiNombre() {
    var miNombre = "Gustavo";
    console.log(miNombre);  // Gustavo
}

mostrarMiNombre();

console.log(miNombre);  // Lucho
```
### Retornar un valor

```javascript
function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 3));
```
### *undefined*

```javascript
function sumar(a, b) {
    console.log(a + b);
}

console.log(sumar(5, 3));
```
### Asignar un valor retornado a una variable

```javascript

function sumar(a, b) {
   return a + b 
}

function crearCadenaConMeta(lenguajeDeProgramacion) {
    return "Mi meta es aprender " + lenguajeDeProgramacion;
}

var resultado = sumar(5, 3);
console.log(resultado);

var miMeta = crearCadenaConMeta("Javascript");

console.log(miMeta);

```
### Valores booleanos

```javascript
console.log(true);
console.log(True); // Error
```
### Operador de igualdad

```javascript
console.log(5 == 5);
console.log("Hola" == "Hola"); // Cuando compara cadenas solo lo hace alfabeticamente caracter a caracter
```
### Operador de igualdad estricta

```javascript
console.log(9 == 9); // true
console.log(9 == "9"); //true
 
console.log(9 === 9); //true
console.log(9 === "9"); //false
```
### Practica cómo comparar valores

```javascript
var a;
var b;

a = 5;
b = 5;

console.log(a == b); //true
console.log(a === b); //true

b=8;

console.log(a == b); //false
console.log(a === b); //false

b="5";

console.log(a == b); //true
console.log(a === b); //false

a = "Javascript";  
b = "Javascript";

console.log(a == b); //true
console.log(a === b); //true
```
### Operador de desigualdad

```javascript
console.log(9 != 6); //true
console.log(9 != 9); //false
console.log(1 != "1"); //false
console.log("Javascript" != "Javascript"); //false

```
### Operador de desigualdad estricta

```javascript
console.log(1 != "1"); //false
console.log(1 !== "1"); //true

```
### Operador mayor que

```javascript
console.log(6 > 5); // true
console.log(3 > 10); //false

console.log("B" > "A"); //true
console.log("ACB" > "ABC"); //true

console.log("AB" > "A"); //true
console.log("Mundo" > "Hola"); // true

var a = 15;
var b = 7;

console.log(a > b); //true
console.log(b > a); //false

```
### Operador mayor o igual que

```javascript
console.log(5 > 5); // false
console.log(5 >= 5); // true

```
### Operador menor que

```javascript
console.log(5 < 6); // true
console.log(10 < 3); // false

console.log("A" < "B"); //true
console.log("ABC" < "ACB"); //true

var a = 15;
var b = 7;

console.log(a < b); //false
console.log(b < a); true

```
### Operador menor o igual que

```javascript
console.log(5 < 5); // false
console.log(5 <= 5); // true

```
### Operador lógico and
##### Tabla de verdad operador AND
##### Para X && Y 
| X | Y | X && Y |
|---|---|--------|
| T | T |    T   |
| T | F |    F   |
| F | T |    F   |
| F | F |    F   |

```javascript
console.log(true && true);  // true
console.log(true && false);  //false
console.log(false && true);  //false
console.log(false && false); //false

var a = 8;
console.log((a > 5) && (a < 10)); //true

a = 3;
console.log((a > 5) && (a < 10)); //false

var a = 15;
console.log((a > 5) && (a < 10)); //false

var a = 1;
console.log((a > 5) && (a == 3)); //false
```
### Operador lógico or
##### Tabla de verdad operador OR
##### Para X || Y 
| X | Y | X    Y |
|---|---|--------|
| T | T |    T   |
| T | F |    T   |
| F | T |    T   |
| F | F |    F   |


```javascript
console.log(true || true);  // true
console.log(true || false);  //true
console.log(false || true);  //true
console.log(false || false); //false

var a = 8;
console.log((a < 5) || (a > 10)); //false

a = 3;
console.log((a < 5) ||(a > 10)); //true

var a = 15;
console.log((a < 5) && (a > 10)); //true

var a = 5;
console.log((a == 5) && (a < 15)); //false
```
### Operador lógico not
##### Tabla de verdad operador NOT
##### Para !X
| X | !X |
|---|----|
| T | F  | 
| F | T  | 
```javascript
console.log(!true); // false
console.log(!false); // true

var a = 8;
console.log(!(a > 5)); // false
console.log(!(a < 5)); // true
```
### Sentencias condicionales

```javascript

if (true) {
	console.log("la condicion es verdadera);
}

var x = 5;

if (x > 2) {
	console.log("la condicion es verdadera);
}

```
### Cláusula "else"

```javascript
if (true) {
	console.log("la condicion es verdadera);
} else {
	console.log("la condicion es falsa);
}
```
### Cláusula "else if"

```javascript
function clasificacion(valor) {
	if ( valor % 2 == 0) {
		console.log("Divisible entre 2.");
	} else if (valor % 3 == 0) {
		console.log("Divisible entre 3.");
	} else {
		console.log("No es divisible entre las opciones.");
	}
}

clasificar(2);
clasificar(15);
clasificar(7);

```
### Condicionales: orden lógico

```javascript
function clasificarValor (valor) {
	if (valor ‹ 5) {
		console. log("Menor que 5.");
	} else if (valor < 10) {
		console. log ("Menor que 10.");
	} else {
		console. log ("Mayor o igual a 10.");
	}
}
clasificarValor(15);
```
### Encadenar sentencias if...else

```javascript
function interpretarIMC(indiceDeMasaCorporal) {
	if (indiceDeMasaCorporal < 18.5) {
		console.log("Bajo Peso");
	} else if (indiceDeMasaCorporal ‹= 24.9) {
		console.log ("Normal");
	} else if (indiceDeMasaCorporal <= 29.9) {
		console.log ("Sobrepeso");
	} else {
		console.log ("Obeso");
	}
}

interpretarIMC(17.8); // Bajo Peso
interpretarIMC(22.2); // Normal
interpretarIMC(28.5); // Sobrepeso
interpretarIMC(32.2); // Obeso
```
### Sentencias switch

```javascript
function clasificar(valor) {
	var respuesta;
	switch (valor) {
		case 1:
			respuesta = "alpha";
			break;
		case 2:
			respuesta = "beta";
			break;
		case 3:
			respueta = "gamma";
			break;
		case 4:
			respuesta = "delta";
			break;
	}
	return respuesta;
}
```
### Sentencias switch: opción predeterminada

```javascript
function seleccionarIdioma(valor) {
	var idioma;
	switch (valor) {
		case 1:
			idioma = "Español";
			break;
		case 2:
			idioma = "Francés";
			break;
		case 3:
			idioma = "Italiano";
			break;
		default:
			idioma = "Inglés";
			break;
	}
	return idioma;
}

```
### Sentencias switch: múltiples casos

```javascript
function clasificarVolumen(valor) {
	var volumen;
	switch (valor) {
		case 1:
			volumen = "bajo";
			break;
		case 2:
		case 3:
			volumen = "intermedio";
			break;
		case 4:
		case 5:
		case 6:
			volumen = "alto";
			break;
		default:
			volumen = "Sin registro";
			break;
	}
	return volumen;
}

```
### Retornar valores booleanos

```javascript
function esMenorQue(a, b) {
	return a < b;
}

```
### Patrón de retorno anticipado

```javascript
function miFuncion() {
	console.log("Hola");
	return "Mundo";
	console.log("Adios");
}

function raizCuadrada(num) {
	if (num < 0) {
		return undefined;
	}
	return Math.sqrt(num);
}
```


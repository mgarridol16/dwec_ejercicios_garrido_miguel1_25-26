console.log("T03p01 - Ejercicio 05");
/*
Dada una cadena de texto usando el siguiente formato: "1, 2, 3, 4". 
Primero elimina todos los espacios en blanco, después convierte la cadena de texto en un array de números. 
El separador usado será la ",". Debes hacer uso de uno de los métodos del objeto String.
*/

let cadena = prompt("Dame una cadena de texto asi: 1, 2, 3, 4: ");
let quitoEspacios = cadena.split(" ").join("");
let juntoPalabra = quitoEspacios.split(",");
let conviertoAnum = juntoPalabra.map(Number); // [1, 2, 3, 4]; Se quedaria asi

console.log(conviertoAnum);

//HACERLO CON ReplaceALL
/*
.split(" ") → corta la cadena donde hay espacios.

.join("") → vuelve a unir todo sin espacios.

.split(",") → divide la cadena en un array usando la coma como separador.

.map(Number) → convierte cada elemento de string a número.
*/
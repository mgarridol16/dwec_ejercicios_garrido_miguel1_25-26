console.log("T03p01 - Ejercicio 08");

/*
¿Para qué sirve el método match(), el método search() y el método includes() del objeto String? 
Haz un ejemplo donde demuestres su uso.
https://www.w3schools.com/js/js_string_search.asp 

*/

//MATCH SIRVE PARA VER SI UNA CADENA CUMPLE CON EL PATRON QUE LE DEFINAS MEDIANTE UNA EXPRESSION REGULAR PARA VER PATRONES
let texto = "Correo: ejemplo@gmail.com";
let resultado = texto.match(/\S+@\S+\.\S+/); // patrón para email

console.log(resultado); // ["ejemplo@gmail.com"]
//es una forma de preguntarle a la cadena: ‘¿cumples este patrón? y lo compruebe


//Includes() busca que exactamente que una cadena sea igual a otra cadena y busca exactamente lo que escribes y lo busca
//Es más simple que match() si solo quieres saber si algo existe en la cadena, sin patrones complicados.
let texto2 = "Hola mundo";

console.log(texto2.includes("Hola"));  // true
console.log(texto2.includes("Mundo")); // false por que la primera es Mayuscula y en la otra cadena no

//search() como si en un libro quieres encontrar en qué página empieza una palabra.
//search() busca una palabra o patrón dentro de un texto.
//Te dice en qué posición empieza, contando desde el primer carácter (el índice 0).
//Si no la encuentra, dice -1 (como diciendo “no está aquí”).
let texto3 = "Hola mundo";

// Buscar la palabra "mundo"
let indice = texto3.search("mundo");

console.log(indice); // 5
/*H o l a   m u n d o
0 1 2 3 4 5 6 7 8 9
 */

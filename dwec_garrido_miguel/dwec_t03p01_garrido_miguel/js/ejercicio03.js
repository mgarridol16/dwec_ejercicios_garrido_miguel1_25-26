console.log("T03p01 - Ejercicio 03");
/*
Crea un script que pida al usuario una cadena y diga cuántas palabras tiene esa cadena.
Después mostrará cada una de las palabras que constituyen la  cadena. 
Suponemos que una palabra está formada por uno o más caracteres distintos al espacio y al tabulador.

No puedes usar patrones.

*/
let cadena = prompt("Dime una frase: ");

let partes = cadena.split(" ");
let palabras = partes.filter(p => p !== "" && p !== "\t");
//es un método de los arreglos que crea un nuevo arreglo con solo los elementos que cumplan una condición
let numPalabras = palabras.length;
console.log("Número de palabras: " + numPalabras);

for (let i = 0; i < palabras.length; i++) {
    console.log("Palabra " + (i + 1) + ": " + palabras[i]);
}

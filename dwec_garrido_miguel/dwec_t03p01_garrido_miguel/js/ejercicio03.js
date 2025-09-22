console.log("T03p01 - Ejercicio 03");
/*
Crea un script que pida al usuario una cadena y diga cuántas palabras tiene esa cadena.
Después mostrará cada una de las palabras que constituyen la  cadena. 
Suponemos que una palabra está formada por uno o más caracteres distintos al espacio y al tabulador.

No puedes usar patrones.

*/
let cadena = prompt("Dime una palabra: ");
let numPalabras = cadena.length;
console.log("Numero de letras: "+numPalabras);
for(let i=0; i < numPalabras; i++){
    console.log("Letras de la palabra: " + cadena.charAt(i));
}
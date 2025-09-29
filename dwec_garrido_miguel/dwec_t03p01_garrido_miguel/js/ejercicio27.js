console.log("T03p01 - Ejercicio 27");

/*
Crea un script que pida al usuario una cadena y diga cuántas palabras tiene esa cadena. 
Suponemos que una palabra está formada por uno o más caracteres distintos al espacio y al tabulador. 
Usa expresiones regulares.

*/

let cadena = prompt("Dame una cadena: ");

let regex = /[^\s]+/; 

let palabras;
let contador;
if(regex.test(cadena) && isNaN(cadena)){
    palabras = cadena.trim().split(/\s+/);
    contador = palabras.length;

    console.log("La cadena "+ cadena + " tiene " + contador + " palabras");

}else{
    console.error("Error de formato (una palabra está formada por uno o más caracteres distintos al espacio y al tabulador) ");
}

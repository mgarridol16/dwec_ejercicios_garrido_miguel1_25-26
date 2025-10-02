console.log("T03p01 - Ejercicio 26");

/*
Elabora un script que pida al usuario una cadena y dos letras. 
Después reemplazará una letra por otra. 
Si la primera letra no existe se indicará un error. 
Debes resolverlo usando el método replace() del objeto String usando expresiones regulares. 
No debe distinguir entre mayúsculas y minúsculas. Controla esto desde la expresión regular.

*/

let cadena = prompt("Introduce una cadena de texto: ");
let dosLetras = prompt("Introduce dos letras: ");
cadena = cadena.toLowerCase();
dosLetras = dosLetras.toLowerCase();
let letra1 = dosLetras[0];
let letra2 = dosLetras[1];

let remplazar = remplazarPalabra(cadena, letra1, letra2);
console.log("Antigua palabra: " + cadena);
console.log("Nueva palabra: " + remplazar);

function remplazarPalabra(cadena, letra1, letra2) {
    const regex = new RegExp(letra1, 'gi');
    let letra1Existe = regex.test(letra1);
    if (!letra1Existe) {
        console.log("La letra1 " + letra1 + " no existe");
        console.error("La letra1 " + letra1 + " no existe");
        return cadena;
    } else {
        cadena = cadena.replace(regex, letra2);
        return cadena;
    }
}

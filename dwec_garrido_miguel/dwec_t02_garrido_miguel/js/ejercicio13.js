console.log("T02 - Ejercicio 13");

/**
Crear un script que dada una palabra determine si es un palíndromo.
Ignora mayúsculas y minúsculas.
ana: es un palíndromo.
Ana: en nuestro caso es un palíndromo.
alberto: no es un palíndromo.

*/
let palabra = String(prompt("Dame una palabra:"));

function palindrome(palabra) {

    palabra = palabra.toLowerCase(); //CONVERTIMOS TODO A MINUSCULAS 
    var longitud = palabra.length; //CONTAMOS LAS LETRAS

    for (var i = 0; i < longitud / 2; i++) { //RECORREMOS LA MITAD DE LA PALABRA PARA COMPROBARLA DE LOS DOS LADOS
        // Comparamos la letra de la izquierda con la de la derecha
        if (palabra[i] !== palabra[longitud - 1 - i]) { //CON logitud -1 cogemos el ultimo indice de la palabra es decir
            /**Si la palabra tiene 5 letras para acceder a la ultima como seria r a t a s 0 1 2 3 4 son 5 letras pues 5 - 1 y llegas al ultimo indice
             * y luego -i es para que valla cogiendo el anterior osea coges el 4 la s luego el 3 la a asi sucesivamente 
             */
            // Si alguna letra no coincide devuelvo falso y directamente no es un palindromo
            return false;
        }
    }
    // Si llegamos hasta aquí, todas las letras coincidieron: es un palíndromo
    return true;
}

let resultado = palindrome(palabra);

if (resultado) {
    alert(palabra + " es un palíndromo.");
} else {
    alert(palabra + " no es un palíndromo.");
}

console.log("T02 - Ejercicio 07");

/**
Desarrolla un script que pida parejas de números enteros hasta que sean iguales o uno de ellos sea cero.
El programa pide dos números.

Si son diferentes y ninguno es cero, vuelve a pedir otra pareja.

El bucle termina si:

Los dos números son iguales, o

Alguno de los dos es cero.
 */

let num1, num2;
do {
    num1 = parseInt(prompt("Dame un numero"));
    num2 = parseInt(prompt("Dame un segundo numero"));

    if (num1 == num2) {
        alert("Se finaliza el programa num1 es igual a num2");
        break;
    } else if (num1 == 0) {
        alert("Se finaliza el programa el num1 es igual a 0");
    } else if (num2 == num1) {
        alert("Se finaliza el programa el num2 es igual a num1");
    } else if (num2 == 0) {
        alert("Se finaliza el programa num2 es igual a 0");
    }

} while (!(num1 == num2 || num1 == 0 || num2 == num1 || num2 == 0));


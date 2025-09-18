console.log("T02 - Ejercicio 10");

/**
Haz un script que pida un número entero al usuario y muestre por pantalla el factorial de dicho número.  
El script definirá la función "factorial" que recibe un número entero y devuelve el factorial de dicho número.
La solución se deberá hacer de forma NO recursiva.
Recuerda: El factorial de un número n es el producto de todos los números naturales desde 1 hasta n inclusive. 
Así, factorial de 5 (5!) es: 5! = 5 x 4 x 3 x 2 x 1 = 120.
Contempla qué debe ocurrir si el número es 0 o 1 y qué debe ocurrir si el número es negativo.

*/

let num = Number.parseInt(prompt("Dame un número: "));

let resultado = miFactorial(num);

function miFactorial(num) {
    if (num < 0) {
        return "No existe el factorial de un número negativo.";
    }

    let solucion = 1;

    for (let i = 2; i <= num; i++) {
        solucion *= i;
    }

    return solucion;
}


console.log(`El factorial de ${num} es: ${resultado}`);
alert(`El factorial de ${num} es: ${resultado}`);

/**HACER UN BUCLE POR SI ES ISNAN Y CONTROLAR PARA QUE VUELVA A PEDIR NUMERO CON DO WHILE */
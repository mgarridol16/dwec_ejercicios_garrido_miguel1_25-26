console.log("T02 - Ejercicio 09");

/**
Desarrolla un script que pida un número y a continuación muestre el siguiente menú:
Menú
----
1. Calcular si es múltiplo de 2.
2. Calcular si es múltiplo de 3.
3. Calcular si es múltiplo de 5.
0. Salir
El programa mostrará el resultado en función de la opción elegida. Deberás crear tres funciones para resolver cada una de las opciones.
*/

let num;
do {
    num = Number(prompt("Dame un número para realizar las operaciones siguientes:"));
    if (isNaN(num)) {
        alert("¡Debe ser un número! Por favor, inténtelo de nuevo.");
    }
} while (isNaN(num));

let opcion;

do {
    opcion = Number(prompt(`Menú
----
1. Calcular si es múltiplo de 2.
2. Calcular si es múltiplo de 3.
3. Calcular si es múltiplo de 5.
0. Salir`));

    if (isNaN(opcion) || opcion < 0 || opcion > 3) {
        alert("Opción no válida. Por favor, introduzca un número entre 0 y 3.");
        continue;
    }

    switch (opcion) {
        case 1:
            multiplodos(num);
            break;
        case 2:
            multiplotres(num);
            break;
        case 3:
            multiplocinco(num);
            break;
        case 0:
            alert("Gracias por usarme. ¡Adiós!");
            console.log("Programa cerrado.");
            break;
        default:
            alert("Opción no reconocida.");
            break;
    }
} while (opcion !== 0);


function multiplodos(num) {
    if (num % 2 === 0) {
        console.log(`${num} SI es múltiplo de 2`);
        alert(`${num} SI es múltiplo de 2`);
    } else {
        console.log(`${num} NO es múltiplo de 2`);
        alert(`${num} NO es múltiplo de 2`);
    }
}

function multiplotres(num) {
    if (num % 3 === 0) {
        console.log(`${num} SI es múltiplo de 3`);
        alert(`${num} SI es múltiplo de 3`);
    } else {
        console.log(`${num} NO es múltiplo de 3`);
        alert(`${num} NO es múltiplo de 3`);
    }
}

function multiplocinco(num) {
    if (num % 5 === 0) {
        console.log(`${num} SI es múltiplo de 5`);
        alert(`${num} SI es múltiplo de 5`);
    } else {
        console.log(`${num} NO es múltiplo de 5`);
        alert(`${num} NO es múltiplo de 5`);
    }
}
console.log("T02 - Ejercicio 14");

/**
Determinar si un número entero dado leído desde el teclado es abundante o no. 
Un número abundante es un número natural cuyos divisores (todos los divisores excepto el propio número) sumen más que dicho número.
Ejemplo: 24 < 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36.
*/

let num = Number.parseInt(prompt("Dame un numero:"))
let numDivisores = [];

//PARA ENTERARME YO DE LOS DIVISORES
for (let i = 1; i < num; i++) {
    if (num % i === 0) {
        numDivisores.push(i);
    }
}
// CORTO LO MIO PARA ENTERARME YO 

alert(numDivisores);

function esAbundante(num) {
    let abundante = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            abundante += i;
        }
    }
    if (num < abundante) {
        return true;
    } else if (num > abundante) {
        return false;
    }
}
if (esAbundante(num)) {
    alert(`${num} es abundante`)
    console.log(`${num} es abundante`);
} else {
    alert(`${num} no es abundante`)
    console.log(`${num} no es abundante`);
}
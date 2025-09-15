console.log("T02 - Ejercicio 06");

/**
 * Pedir dos números enteros con parseInt y multiplicarlos 
 * pero mediante sumas sucesivas (ej: 3x4 = 3+3+3+3).
 * Comprobar que el usuario haya introducido números válidos (no NaN, >0).
 */

let num1, num2;

// Pedimos los numeros hasta que los dos sean válidos
do {
    num1 = parseInt(prompt("Introduce un numero: "));
    num2 = parseInt(prompt("Introduce otro numero: "));
} while (isNaN(num1) || isNaN(num2));

let mult = 0;

for (let i = 0; i < num2; i++) {
    mult += num1;
    console.log(mult); 
};
alert("La multiplicación es: " + mult)

//falta hacer lo de negativo fatla la variable negativo si los dos numeros son menos de 0 multiplicamos *=-1 y si solo es num1 igual y funcion isNegativo= true y si es negativo producto*=-1
// y luego lo demas igual pero despues y al final ponerle el signo 
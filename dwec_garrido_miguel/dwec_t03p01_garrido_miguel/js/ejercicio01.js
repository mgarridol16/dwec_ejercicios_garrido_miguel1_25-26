console.log("T03p01 - Ejercicio 01");
/*
Investiga los métodos toFixed() y toPrecision() del objeto Number. 
¿Qué diferencia hay entre ellos? 
Úsalos en un ejemplo con diferentes parámetros de entrada.

toFixed(x) 👉 corta el número y lo deja con x decimales.
Ejemplo: 3.14159.toFixed(2) → "3.14"

toPrecision(x) 👉 muestra el número con x cifras en total (antes y después del punto).
Ejemplo: 3.14159.toPrecision(2)
toFixed = cuántos decimales quieres.

toPrecision = cuántas cifras en total quiere
*/

let num1 = 34.426;
let num1Fixed = num1.toFixed(2);
let num1Press = num1.toPrecision(2);

console.log(num1Fixed);
console.log(num1Press);
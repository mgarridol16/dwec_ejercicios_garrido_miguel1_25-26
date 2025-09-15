console.log("T02 - Ejercicio 05");
/**
 * Necesitamos pedir 5 numeros no array asique 5 variables y hacer la media de los 5 y mostrar  los que sean mayores de la media
 * el mensaje de salida tiene que ser:
 * "Los siguientes números introducidos son superiores a la media (VALORMEDIA): NUM1, NUMX…."

 * 
 */
let num1 = Number(prompt("Introduce un primer numero: "));
let num2 = Number(prompt("Introduce un segundo numero: "));
let num3 = Number(prompt("Introduce un tercer numero: "));
let num4 = Number(prompt("Introduce un cuarto numero: "));
let num5 = Number(prompt("Introduce un quinto numero: "));

let media = (num1 + num2 + num3 + num4 + num5) / 5;

let resultado = "Los siguientes números introducidos son superiores a la media (" + media + "): ";

if (num1 > media) {
    resultado += num1 + ", ";
}
if (num2 > media) {
    resultado += num2 + ", ";
}
if (num3 > media) {
    resultado += num3 + ", ";
}
if (num4 > media) {
    resultado += num4 + ", ";
}
if (num5 > media) {
    resultado += num5 + ", ";
}


alert(resultado);
console.log(resultado);




console.log("T03p01 - Ejercicio 02");
/*
slice(inicio, fin) 👉 corta desde donde le dices que empiece hasta justo antes de donde le dices que pare.
Ejemplo: "hola".slice(1,3) → "ol" (cortó la cuerda entre la letra 1 y la 3, sin incluir la 3).

substring(inicio, fin) 👉 es casi igual a slice, pero si te equivocas y pones los números al revés, él los acomoda.
Ejemplo: "hola".substring(3,1) → "ol" (aunque puse 3 y 1, lo entendió como 1 y 3).

substr(inicio, cantidad) 👉 aquí le dices dónde empezar y cuántas letras quieres.
Ejemplo: "hola".substr(1,2) → "ol" (empieza en la letra 1 y agarra 2 letras).

👉 En resumen:

slice y substring = le das inicio y fin.

substr = le das inicio y cuántas letras.
*/

let palabra = "Miguel";
let palSlice = palabra.slice(1,4);
let palSubstring = palabra.substring(4,1);
let palSubstr = palabra.substr(2,5); //DICEN QUE EN LO PUEDES UTILIZAR TODAVIA PERO NO LO RECOMIENDAN POR QUE ES ANTIGUO Y PODRIA DESAPARECER
console.log(palSlice);
console.log(palSubstring);
console.log(palSubstr);

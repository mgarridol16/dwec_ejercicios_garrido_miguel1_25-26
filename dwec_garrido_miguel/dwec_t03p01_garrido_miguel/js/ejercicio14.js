console.log("T03p01 - Ejercicio 14");

/*
Crea un script que pida al usuario la fecha de su nacimiento (para saber su cumpleaños) y le indique su edad actual.
*/
let fechaNacimiento = prompt("Dime tu fecha de nacimiento (DD-MM-YYYY):");


let partes = fechaNacimiento.split("-");
let dia = parseInt(partes[0]);
let mes = parseInt(partes[1]);
let anio = parseInt(partes[2]);


let hoy = new Date();
let anioActual = hoy.getFullYear();
let mesActual = hoy.getMonth() + 1; // los meses empiezan el 0 en js
let diaActual = hoy.getDate();



let edad = anioActual - anio; //edad
if (mesActual < mes || (mesActual === mes && diaActual < dia)) {
    edad--; //le resto uno si falta un mes o es el mismo mes pero el dia no es el mismo
}

console.log("Tienes " + edad + " años.");

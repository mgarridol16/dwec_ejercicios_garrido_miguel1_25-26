console.log("T03p01 - Ejercicio 17");
/*
Crea un script que pida al usuario dos fechas e indique los meses que hay entre ambas fechas. 
El script debe determinar qué fecha es la más antigua (mayor) y cuál es más reciente (menor).
*/

let fechaTomada1 = prompt("Dame la primera fecha así: DD/MM/AAAA: ");
let partes1 = fechaTomada1.split('/');
let dia1 = parseInt(partes1[0]);
let mes1 = parseInt(partes1[1]) - 1; // Los meses en JS van de 0 a 11
let anio1 = parseInt(partes1[2]);
let fecha1 = new Date(anio1, mes1, dia1);

let fechaTomada2 = prompt("Dame la segunda fecha así: DD/MM/AAAA: ");
let partes2 = fechaTomada2.split('/');
let dia2 = parseInt(partes2[0]);
let mes2 = parseInt(partes2[1]) - 1;
let anio2 = parseInt(partes2[2]);
let fecha2 = new Date(anio2, mes2, dia2);

let mayor, menor;

if (fecha1 < fecha2) {
    mayor = fecha1; // la más antigua
    menor = fecha2; // la más reciente
    console.log("La primera fecha es más antigua que la segunda");
} else if (fecha2 < fecha1) {
    mayor = fecha2;
    menor = fecha1;
    console.log("La segunda fecha es más antigua que la primera");
} else {
    mayor = fecha1;
    menor = fecha2;
    console.log("Ambas fechas son iguales");
}

// Calcular meses entre las fechas
let totalMeses = (menor.getFullYear() - mayor.getFullYear()) * 12 + (menor.getMonth() - mayor.getMonth());

console.log("Meses entre ambas fechas: " + totalMeses);

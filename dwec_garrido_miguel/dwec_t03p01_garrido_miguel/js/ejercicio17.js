console.log("T03p01 - Ejercicio 17");
/*
Crea un script que pida al usuario dos fechas e indique los meses que hay entre ambas fechas. 
El script debe determinar qué fecha es la mayor.

*/
let fecha1Pido = prompt("Dime una primera fecha (DD/MM/YYYY):");
let fecha1;
let partes = fecha1Pido.split("/");
if (partes.length !== 3) {
    console.log("Formato incorrecto. Debe ser DD/MM/YYYY");
} else {
    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1]) - 1;
    let anio = parseInt(partes[2]);

    fecha1 = new Date(anio, mes, dia);
}

let fecha2Pido = prompt("Dime una segunda fecha (DD/MM/YYYY):");
let fecha2;
let partes2 = fecha2Pido.split("/");
if (partes2.length !== 3) {
    console.log("Formato incorrecto. Debe ser DD/MM/YYYY");
} else {
    let dia = parseInt(partes2[0]);
    let mes = parseInt(partes2[1]) - 1;
    let anio = parseInt(partes2[2]);

    fecha2 = new Date(anio, mes, dia);
}

let cantidadMeses;
if (fecha1 > fecha2) {
    cantidadMeses = (fecha1.getFullYear() - fecha2.getFullYear()) * 12;
    cantidadMeses += fecha1.getMonth() - fecha2.getMonth();
} else if (fecha1 < fecha2) {
    cantidadMeses = (fecha2.getFullYear() - fecha1.getFullYear()) * 12;
    cantidadMeses += fecha2.getMonth() - fecha1.getMonth();    
} else {
    cantidadMeses = 0;
}

console.log(`se llevan ${cantidadMeses} meses`);

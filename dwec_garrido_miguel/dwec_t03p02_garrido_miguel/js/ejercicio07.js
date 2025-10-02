console.log("T03p01 - Ejercicio 07");

/*
Un usuario puede darte una hora usando los siguientes formatos: "HH:MM", "HH-MM" o "HH.MM". 
Determina qué separador ha usado el usuario y crea un objeto Date con la hora introducida por el usuario. 
Después verifica si la hora es válida.
No puedes usar patrones.

*/
let horaSucia = prompt("Introduce una una hora con los siguientes formatos (HH:MM || HH-MM || HH.MM): ").trim();

// Determinar el separador que usa el usuario
let separador;
if (horaSucia.includes(":")) {
    separador = ":";
} else if (horaSucia.includes("-")) {
    separador = "-";
} else {
    separador = "."; 
}

let fechaTrasSeparador = horaSucia.split(separador);
let hora = Number(fechaTrasSeparador[0]);
let minutos = Number(fechaTrasSeparador[1]);
if (!Number.isInteger(hora) || !Number.isInteger(minutos)) {
    console.log("Hora o minutos no son números válidos");
} else if (hora < 0 || hora > 23) { 
    console.log("Hora inválida"); 
} else if (minutos < 0 || minutos > 59) {
    console.log("Minutos inválidos"); 
} else { 
    console.log("La hora es válida");

    // Crear objeto Date con la hora y minutos
    let objetoDate = new Date();
    objetoDate.setHours(hora);
    objetoDate.setMinutes(minutos);
    objetoDate.setSeconds(0);
    objetoDate.setMilliseconds(0);

    console.log("Objeto Date:", objetoDate);
}
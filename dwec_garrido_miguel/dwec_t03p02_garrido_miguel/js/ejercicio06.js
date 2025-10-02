console.log("T03p01 - Ejercicio 06");

/*
Un usuario puede darte una fecha usando los siguientes formatos: "DD-MM-YYYY", "DD/MM/YYYY" o "DD MM YYYY". 
Determina qué separador ha usado el usuario y crea un objeto Date con la fecha introducida por el usuario. 
Después verifica si la fecha es válida.
No puedes usar patrones.
*/

let fechaSucia = prompt("Introduce una fecha: ").trim(); // eliminamos espacios al inicio y final

// Determinar el separador
let separador;
if (fechaSucia.includes("-")) {
    separador = "-";
} else if (fechaSucia.includes("/")) {
    separador = "/";
} else {
    separador = " ";
}

// Separar la fecha en partes
let fechaTrasSeparador = fechaSucia.split(separador);
let dia = Number(fechaTrasSeparador[0]);
let mes = Number(fechaTrasSeparador[1]);
let anio = Number(fechaTrasSeparador[2]);

// Función para saber si un año es bisiesto
function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

// Validar la fecha
if (anio < 0) {
    console.log("Año inválido");
} else if (mes < 1 || mes > 12) {
    console.log("Mes inválido");
} else if (
    (dia < 1 || dia > 31) ||
    (mes === 2 &&
        ((esBisiesto(anio) && dia > 29) ||
            (!esBisiesto(anio) && dia > 28))
    ) ||
    ([4, 6, 9, 11].includes(mes) && dia > 30)
) {
    console.log("Día inválido");
} else {
    console.log("La fecha es válida");
}
console.log(dia + "/" + mes + "/" + anio);

/*
Comprueba si el día es válido:
1. No puede ser menor que 1 ni mayor que 31.
2. Febrero: máximo 28 o 29 según si es bisiesto.
3. Abril, junio, septiembre y noviembre: máximo 30 días.
*/

/*
LA FORMA MAS FACIL QUE HE INVESTIGADO QUE DICE EL PROFESOR ES:
let fecha = new Date(anio, mes - 1, dia); // mes-1 porque JavaScript empieza en 0
if (
    fecha.getFullYear() === anio &&
    fecha.getMonth() === mes - 1 &&
    fecha.getDate() === dia
) {
    console.log("La fecha es válida");
} else {
    console.log("Fecha inválida");
}

*/
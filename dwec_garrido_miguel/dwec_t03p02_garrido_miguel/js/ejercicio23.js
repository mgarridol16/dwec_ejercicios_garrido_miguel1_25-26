console.log("T03p01 - Ejercicio 23");

/*
Desarrolla un script que determine si el formato usado en una fecha dada por el usuario es válido o no. 
Los formatos de fechas válidos son DD-MM-YYYY, DD-MM-YY, DD/MM/YYYY y DD/MM/YY. 
Deberás hacer uso del objeto ExpReg y crear una función que se denomine "validarFormatoFecha()" 
que reciba la cadena introducida por el usuario y devuelva un booleano. 
Puedes usar una IA para generar el patrón, entendiendo dicho patrón.
Después tienes que crear un objeto de tipo Date y determinar si la fecha es correcta.
*/

let fechaIntroducida = prompt("Introduce una fecha (DD-MM-YYYY O DD-MM-YY O DD/MM/YYYY O DD/MM/YY");
let valida = validarFormatoFecha(fechaIntroducida);
let fechaDate;
if (valida) {
    console.log("Validando fecha: \n");
    let partes = fechaIntroducida.match(/^(0[1-9]|[12][0-9]|3[01])([\-\/])(0[1-9]|1[0-2])\2(\d{2}|\d{4})$/);
    if (!partes) {
        console.log("Formato invalido. no podemos convertir la fecha lo siento");
    }

    let dia = parseInt(partes[1], 10);
    let mes = parseInt(partes[3], 10) - 1;
    let anio = partes[4].length === 2 ? 2000 + parseInt(partes[4], 10) : parseInt(partes[4], 10); //SI EL AÑO TIENE 2 DIGITOS SUMAMOS 2000 A EL

    fechaDate = new Date(anio, mes, dia);
    if (fechaDate.getFullYear() === anio &&
        fechaDate.getMonth() === mes &&
        fechaDate.getDate() === dia) {
        console.log("Fecha correcta");
    } else {
        console.log("La fecha no existe");
    }
    console.log("\nFecha introducida: " + fechaDate);
} else {
    console.log("Tu fecha no es correcta : \n");
}
function validarFormatoFecha(fecha) {

    let patronFecha = /^(0[1-9]|[12][0-9]|3[01])([\-\/])(0[1-9]|1[0-2])\2(\d{2}|\d{4})$/;
    let valido = false;
    if (patronFecha.test(fecha)) {
        console.log("Fecha valida, introducida con el patron valido");
        valido = true;
    } else {
        console.log("Fecha invalida, no cumple el patron necesario");
    }

    return valido;
}
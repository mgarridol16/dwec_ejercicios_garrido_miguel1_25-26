console.log("T03p01 - Ejercicio 15");

/*
Repite el ejercicio verificando si la fecha es correcta sin usar expresiones regulares 
(la fecha solo será correcta con este formato: DD/MM/YYYY): 
*/
let fechaNacimiento = prompt("Dime tu fecha de nacimiento (DD/MM/YYYY):");

// Separar en día, mes y año
let partes = fechaNacimiento.split("/");
if (partes.length !== 3) {
    alert("Formato incorrecto. Debe ser DD/MM/YYYY");
} else {
    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1]);
    let anio = parseInt(partes[2]);


    if (isNaN(dia) || isNaN(mes) || isNaN(anio)) {
        alert("La fecha debe contener solo números.");
    } else if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || anio < 1900 || anio > new Date().getFullYear()) {
        alert("La fecha no es válida.");
    } else {
        let diasPorMes = [31, (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0) ? 29 : 28,
            31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //Me dice los disa de cada mes empezando por enero hasta diciembre

        if (dia > diasPorMes[mes - 1]) {
            alert("La fecha no es válida.");
        } else {

            let hoy = new Date();
            let anioActual = hoy.getFullYear();
            let mesActual = hoy.getMonth() + 1; //los meses empiezan por 0 en js
            let diaActual = hoy.getDate();

            let edad = anioActual - anio;
            if (mesActual < mes || (mesActual === mes && diaActual < dia)) {
                edad--;
            }

            console.log("Tienes " + edad + " años.");
        }
    }
}

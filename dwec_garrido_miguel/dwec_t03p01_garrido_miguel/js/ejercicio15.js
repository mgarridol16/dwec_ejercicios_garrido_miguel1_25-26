console.log("T03p01 - Ejercicio 15");

/*
Repite el ejercicio verificando si la fecha es correcta sin usar expresiones regulares 
(la fecha solo será correcta con este formato: DD/MM/YYYY): 
*/
let fechaNacimiento = prompt("Dime tu fecha de nacimiento (DD/MM/YYYY):");

let partes = fechaNacimiento.split("/");
if (partes.length !== 3) {
    alert("Formato incorrecto. Debe ser DD/MM/YYYY");
} else {
    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1]) - 1; // Los meses van de 0 a 11 en JS
    let anio = parseInt(partes[2]);

    let fecha = new Date(anio, mes, dia);

    if (fecha.getDate() !== dia || fecha.getMonth() !== mes || fecha.getFullYear() !== anio) {
        alert("La fecha no es válida.");
    } else {
        let hoy = new Date();
        let edad = hoy.getFullYear() - anio;

        if (
            hoy.getMonth() < mes ||
            (hoy.getMonth() === mes && hoy.getDate() < dia)
        ) {
            edad--;
        }

        console.log("Tienes " + edad + " años.");
    }
}

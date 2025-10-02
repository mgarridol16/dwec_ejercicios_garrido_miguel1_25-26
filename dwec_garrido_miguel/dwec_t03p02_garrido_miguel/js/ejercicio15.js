console.log("T03p01 - Ejercicio 15");

/*
Script que pide la fecha de nacimiento en formato DD/MM/YYYY, 
verifica que sea correcta y muestra la edad actual.
*/

let fechaNacimiento = prompt("Dame la fecha de nacimiento así: DD/MM/AAAA: ");

// Comprobar longitud total
if (fechaNacimiento.length !== 10) {
    console.log("Error: la fecha que introduciste no tiene una longitud válida");
} else {
    // Separar por "/"
    let partes = fechaNacimiento.split('/');
    
    if (partes.length !== 3) {
        console.log("Error: no cumple el formato requerido DD/MM/AAAA");
    } else {
        let diaStr = partes[0];
        let mesStr = partes[1];
        let anioStr = partes[2];

        // Comprobar longitud de cada parte
        if (diaStr.length !== 2 || mesStr.length !== 2 || anioStr.length !== 4) {
            console.log("Error: día o mes deben tener 2 dígitos y año 4 dígitos");
        } 
        // Comprobar que sean números
        else if (isNaN(diaStr) || isNaN(mesStr) || isNaN(anioStr)) {
            console.log("Error: la fecha debe contener solo números");
        } 
        else {
            // Convertir a números
            let dia = parseInt(diaStr);
            let mes = parseInt(mesStr) - 1; // En JS los meses van de 0 a 11
            let anio = parseInt(anioStr);

            // Crear objeto Date
            let fechaNaciFormat = new Date(anio, mes, dia);
            let fechaActual = new Date();
            let diaHoy = fechaActual.getDate();
            let mesHoy = fechaActual.getMonth();
            let anioHoy = fechaActual.getFullYear();

            // Calcular edad
            let edad = anioHoy - fechaNaciFormat.getFullYear();

            // Ajustar si todavía no ha cumplido este año
            if (mesHoy < mes || (mesHoy === mes && diaHoy < dia)) {
                edad--;
            }

            console.log("Tu edad actual es: " + edad);
        }
    }
}

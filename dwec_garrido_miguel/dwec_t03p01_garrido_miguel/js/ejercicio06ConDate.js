console.log("T03p01 - Ejercicio 06");

/*
Un usuario puede darte una fecha usando los siguientes formatos: 
"DD-MM-YYYY", "DD/MM/YYYY" o "DD MM YYYY". 
Vamos a determinar qué separador ha usado, crear un objeto Date
y comprobar si la fecha es válida usando la forma rápida con Date.
*/

let fechaSucia = prompt("Introduce una fecha: ").trim();
// .trim() elimina espacios al inicio y final por si el usuario los pone

// Determinar el separador que usa el usuario
let separador;
if (fechaSucia.includes("-")) {
    separador = "-";
} else if (fechaSucia.includes("/")) {
    separador = "/";
} else {
    separador = " "; // si no hay "-" ni "/", asumimos que es un espacio
}

// Separar la fecha en partes usando el separador encontrado
let fechaTrasSeparador = fechaSucia.split(separador);
// fechaTrasSeparador = [DD, MM, YYYY]

// Convertir cada parte a número para poder usarla en Date
let dia = Number(fechaTrasSeparador[0]); //SIEMPRE SERA A BASE 10 SI NO SE INDICA LO HICE CON NUMBER POR QUE TAMBIEN VALE
let mes = Number(fechaTrasSeparador[1]);
let anio = Number(fechaTrasSeparador[2]);

// Crear un objeto Date con los valores del usuario
// Recordar: en JavaScript, los meses empiezan en 0 (enero = 0, diciembre = 11)
let fecha = new Date(anio, mes - 1, dia);//si el usuario pone septiembre (mes 9) y tú pones new Date(año, 9, día), JavaScript lo interpretaría como octubre.

// Validar si la fecha es correcta de manera rápida:
// Si el usuario puso algo que no existe, Date lo "arregla" automáticamente
// Por ejemplo: 31/04/2025 se convierte en 01/05/2025
// Entonces comparamos los valores originales con los que nos da Date
/*

JavaScript “arregla” automáticamente cualquier fecha que no exista.

Ejemplo:
new Date(2025, 3, 31) // Abril solo tiene 30 días
JavaScript lo convierte en: 01/05/2025 (1 de mayo).
*/

if (
    fecha.getFullYear() === anio &&   // ¿el año coincide?
    fecha.getMonth() === mes - 1 &&   // ¿el mes coincide? (recordando -1)
    fecha.getDate() === dia            // ¿el día coincide?
) {
    console.log("La fecha es válida");
} else {
    console.log("Fecha inválida");
}

console.log(dia + "/" + mes + "/" + anio);

/*
¿POR QUE DATE LO ARREGLA SOLO SI PONGO LA FECHA MAL?
PORQUE DATE POR DENTRO INTERNAMENTE FUNCIONA ASI:

Internamente, Date almacena la fecha como un número entero de milisegundos desde el 1 de enero de 1970 (llamado Unix timestamp).
Cuando le pasas valores “locos” (como día 31 en abril o mes 12), simplemente suma esos excesos al cálculo interno.
Día 31 de abril → suma 1 día al mes → 1 de mayo.
Mes 12 (que sería 13º mes) → suma 1 al año → enero del año siguiente.
*/
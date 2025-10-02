console.log("T03p01 - Ejercicio 14");

/*
Crea un script que pida al usuario la fecha de su nacimiento (para saber su cumpleaños) y le indique su edad actual.
*/

let fechaNacimiento = prompt("Dame la fecha de nacimiento asi : DD-MM-AAAA: ");

let partes = fechaNacimiento.split('-');
let dia = parseInt(partes[0]);
let mes = parseInt(partes[1])-1;
let anio = parseInt(partes[2]);

let fechaNaciFormat = new Date(anio,mes,dia);

let fechaActual = new Date();
let diaHoy = fechaActual.getDate();
let mesHoy = fechaActual.getMonth();
let anioHoy = fechaActual.getFullYear();

let edad = fechaActual.getFullYear() - fechaNaciFormat.getFullYear();

if(mesHoy < mes || (mes === mesHoy && diaHoy < dia)){
    edad--;
}
console.log("Tu edad actual es: " + edad);
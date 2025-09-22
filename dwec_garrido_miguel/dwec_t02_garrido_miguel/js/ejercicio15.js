console.log("T02 - Ejercicio 15");

let totalSalarios = 0;
let continuar = true;
let id = 1; 

while (continuar) {
    let horas = parseInt(prompt("Horas trabajadas:"));
    if (!Number.isInteger(horas) || horas <= 0) {
        alert("Horas inválidas, siguiente trabajador.");
        continue;
    }

    let turno = prompt("Turno (M/T/N):").toLowerCase();
    if (turno !== "m" && turno !== "t" && turno !== "n") {
        alert("Turno inválido, siguiente trabajador.");
        continue;
    }

    let salarioBruto;
    if (turno === "m") {
        salarioBruto = horas * 45;
    } else if (turno === "t") {
        salarioBruto = horas * 47;
    } else {
        salarioBruto = horas * 50;
    }

    let descuento;
    if (salarioBruto < 600) {
        descuento = salarioBruto * 0.08;
    } else if (salarioBruto <= 1000) {
        descuento = salarioBruto * 0.10;
    } else {
        descuento = salarioBruto * 0.12;
    }

    let salarioNeto = salarioBruto - descuento;

    console.log("Trabajador " + id + " Salario neto: " + salarioNeto.toFixed(2) + "€");

    totalSalarios += salarioNeto;
    id++; 

    let respuesta = prompt("¿Otro trabajador? (s/n):");
    if (respuesta.toLowerCase() !== "s") {
        continuar = false;
    }
}

console.log("Total salarios: " + totalSalarios.toFixed(2) + "€");

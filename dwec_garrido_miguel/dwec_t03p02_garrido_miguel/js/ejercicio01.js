console.log("T03p02 - Ejercicio 01");
/*
Crea una función llamada oraculo que reciba un número variable de argumentos (edad, nivel de poder, número de batallas, etc.). 
Pueden pasar el número que quieran y si no reciben ninguno el valor por defecto recibido será 0.

*/


let edad = prompt("Dime tu edad: ");
let poder = prompt("Dime tu nivel de poder");
let numeroBatallas = prompt("Dime el numero de batallas");
let opcion;
while (opcion != "no") {
    let resultado = (function () {
        oraculo(edad, poder, numeroBatallas);
    })();
    opcion = prompt("¿Quieres probar con otros numeros? (si/no)");
    opcion = opcion.toLocaleLowerCase();
    if (opcion != "no" && opcion == "si") {
        edad = prompt("Dime tu edad: ");
        poder = prompt("Dime tu nivel de poder");
        numeroBatallas = prompt("Dime el numero de batallas");
    }else{
        console.log("¡Adios!");
    }
}



function oraculo(edad, poder, numeroBatallas, ...resto) {
    let argumentos = esNumero(edad, poder, numeroBatallas);
    for (let i = 0; i < argumentos.length; i++) {
        if (argumentos[i] === undefined) { //CAMBIAR LO DE SI ES UNDEFINED ESE NUMERO YA NO SE TIENE ENCUENTA EN EL CALCULO
            argumentos[i] = 0;
        }
    }
    edad = argumentos[0];
    poder = argumentos[1];
    numeroBatallas = argumentos[2];

    const calcularMedia = function (edad, poder, numeroBatallas) {
        let contador = arguments.length;
        let suma = 0;
        for (let i = 0; i < contador; i++) {
            suma += arguments[i];
        }
        return suma / contador;
    }

    function tradicional(edad, poder, numeroBatallas) {
        let media = calcularMedia(edad, poder, numeroBatallas);
        let desviacionEdad = edad - media;
        let desviacionPoder = poder - media;
        let desviacionBatallas = numeroBatallas - media;
        return [desviacionEdad, desviacionPoder, desviacionBatallas];
    }

    const Maximo = (edad, poder, numeroBatallas) => Math.max(edad, poder, numeroBatallas);
    const Minimo = (edad, poder, numeroBatallas) => Math.min(edad, poder, numeroBatallas);

    let destinoMedia = function (edad, poder, numeroBatallas) {
        let media = calcularMedia(edad, poder, numeroBatallas);
        if (media < 30) {
            return "Tu destino es entrenar mas duro. Tus estadisticas están por debajo del minimo requerido\n";
        } else if (media > 60) {
            let desviaciones = tradicional(edad, poder, numeroBatallas);
            return "Eres un maestro legendario tus desviaciones son: " + desviaciones.toString() + "\n";
        } else {
            return "Estas en el camino del héroe. El valor maximo alcanzado fue " + Maximo(edad, poder, numeroBatallas) + " y el minimo " + Minimo(edad, poder, numeroBatallas);
        }
    }
    return console.log(destinoMedia(edad, poder, numeroBatallas));

}

function esNumero(edad, poder, numeroBatallas) {
    let resultados = [];
    for (let i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            console.error("Tu argumento " + arguments[i] + " no es un numero");
            resultados.push(undefined);
        } else {
            resultados.push(Number(arguments[i]));
        }
    }
    return resultados;
}

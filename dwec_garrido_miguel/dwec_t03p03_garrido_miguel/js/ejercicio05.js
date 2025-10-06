console.log("T03p03 - Ejercicio 05");
/*

*/

const array = [1, 2, 3, 4, 5, 6, 7, 8];

let orden = prompt("¿Como quieres ordenar el array ? [asc | desc]");

if (isNaN(orden) && (orden == "asc" || orden == "desc")) {
    switch (orden) {
        case "asc": ordenarAsc(array)
            break;
        case "desc": ordenarDesc(array);
            break;
        default: console.log("Error al ordenar el array");
    }
} else {
    if (!isNaN(orden)) {
        console.log("Error no puedes introducir un numero");
    } else if (!(orden == "asc" || orden == "desc")) {
        console.log("Error no has introducido asc o desc");
    }
}

function ordenarAsc(array) {
    let arrayOrdenado = array.sort();

    console.log("Array ordenado de forma ascendente");
    for (let i of arrayOrdenado) {
        console.log(i);
    }
}

function ordenarDesc(array) {
    let arrayOrdenado = array.sort();
    let darLavuelta = arrayOrdenado.reverse();

    console.log("Array ordenado de forma descendente");
    for (let i of darLavuelta) {
        console.log(i);
    }
}

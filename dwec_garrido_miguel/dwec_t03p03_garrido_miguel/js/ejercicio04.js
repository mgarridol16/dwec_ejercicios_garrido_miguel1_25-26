console.log("T03p03 - Ejercicio 04");
/*

*/


const array = ["a", "b", "c", "d"];

let orden = "asc";

let arrayOrdenado = ordenarArray(array, orden);
mostrarArray(arrayOrdenado);
function ordenarArray(array, orden) {
    let arrayOrdenado = array.sort();
    if (orden === "asc") return arrayOrdenado;
    if (orden === "desc") {
        return arrayOrdenado.reverse();
    };
}

function mostrarArray(array) {
    console.log("Mostrando Array: ");
    for (let i of array) {
        console.log(i);
    }
}


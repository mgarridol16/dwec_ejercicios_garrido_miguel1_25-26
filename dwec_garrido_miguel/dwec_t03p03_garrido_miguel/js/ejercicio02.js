console.log("T03p03 - Ejercicio 02");
/*

*/

const arrayNumeros = pedirDatos();
let media = calcularMedia(arrayNumeros);
let superiorMedia = calcularSuperioresMedia(arrayNumeros, media);
let orden = "asc";
const arrayOrdenado = ordenarArray(arrayNumeros, orden);
let mostrarArray = mostrarArray(arrayNumeros);
let mostrarArrayOrdenado = mostrarOrdenado(arrayNumeros);


function pedirDatos() {
    let numerosUsuarios = parseInt(prompt("¿Cuantos numeros vas a introducir?"));
    const arrayNumeros = [];
    while (numerosUsuarios < 0 || isNaN(numerosUsuarios)) {
        console.log("Debes introducir un numero mayor que 0");
        numerosUsuarios = parseInt(prompt("¿Cuantos numeros vas a introducir?"));
    }
    for (let i = 0; i < numerosUsuarios; i++) {
        let num = parseInt(prompt("Dame un numero"));
        arrayNumeros.push(num);
    }
    return arrayNumeros;
}

function calcularMedia(arrayNumeros) {
    let suma = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        suma += i;
    }
    let media = suma / arrayNumeros.length;
    return media;
}
function calcularSuperioresMedia(arrayNumeros, media) {
    let superioresMedia;
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (i > media) superioresMedia.push(i);
    }
    return superioresMedia;
}
function ordenarArray(arrayNumeros, orden) {

    for (let i = 1; i < arrayNumeros.length; i++) {
        let key = arrayNumeros[i];
        let j = i - 1;
        if (orden === "asc") {
            while (j >= 0 && arrayNumeros[j] > key) {
                arrayNumeros[j + 1] = arrayNumeros[j];
                j = j - 1;
            }

        } else if (orden === "desc") {
            while (j >= 0 && arrayNumeros[j] < key) {
                arrayNumeros[j + 1] = arrayNumeros[j];
                j = j - 1;
            }
        }

        arrayNumeros[j + 1] = key;
    }

    return arrayNumeros;
}

function mostrarArray(arrayNumeros) {
    console.log("Mostrando array : ");
    for (const i of arrayNumeros) {
        console.log(i);
    }
}
function mostrarOrdenado(arrayNumeros) {
    let ordenarArray = ordenarArray(arrayNumeros, "asc");
    mostrarArray(ordenarArray);
}



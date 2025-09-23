console.log("T02 - Ejercicio 16");
/*
Desarrolla un script que pida un número entero al usuario y muestre el número con sus dígitos invertidos. Ejemplo: 12345 → 54321.
Después se calcula la suma de los dígitos del número original y del número invertido y se comprueba que son iguales.
Debes validar que el número introducido sea un entero positivo.
 */

let num = Number(prompt("Dame un numero entero: "));
if (num < 0 || isNaN(num)) {
    console.log("Error debes introducir un numero. Se termina el programa");
}
console.log(num);
let numInvertido = reverserNum(num);
console.log(numInvertido);

let sumOrigi = sumas(num);
let sumInver = sumas(numInvertido);

if(sumOrigi === sumInver){
    console.log("Correcto todo salio bien la suma de los numeros de forma invertida y normal es igual");
}else{
    console.error("Error algo salio mal por lo cual revisa el codigo");
}

function sumas(num) {
    let digitos = num.toString().split("");
    let suma = 0;
    for (let i = 0; i < digitos.length; i++) {
        suma += Number(digitos[i]);
    }
    return suma;
}

function reverserNum(num) {
    let convertirNum = num.toString().split("").reverse().join("");
    return Number(convertirNum);
}

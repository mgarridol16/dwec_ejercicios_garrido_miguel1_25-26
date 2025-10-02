console.log("T03p01 - Ejercicio 20");

/*
Desarrolla un script que determine si el precio de venta de un artículo dado por un usuario es válido. 
El precio no puede tener más de 6 dígitos en la parte entera y sólo podrá tener dos decimales. 
Los decimales podrán estar indicados por “.” ó “,”. 
Deberás hacer uso del objeto RegExp y crear una función que se denomine "validaMiReal()"
que reciba la cadena introducida por el usuario y devuelva un booleano.
La expresión regular debes crear usando el método: 
*/

let precioUser = prompt("Introduce un precio de venta: ");

let numeroValido = validaMiReal(precioUser);
if (numeroValido) {
    let numeroConvertido = convertirMiReal(precioUser);
    console.log("El número convertido es: " + numeroConvertido);
} else {
    console.log("No pudimos convertir el número, lo siento");
}

function validaMiReal(precioUser) {
    let patron = /^\d{1,6}([.,]\d{1,2})?$/;
    let patt = new RegExp(patron);
    let esValido = patt.test(precioUser);

    if (esValido) {
        console.log("El precio introducido es válido");
        return true;
    } else {
        console.log("El precio introducido no cumple el patrón, no es válido");
        return false; 
    }
}

function convertirMiReal(precioUser) {
    let cadena = precioUser.replace(",", ".");
    return Number(cadena);
}

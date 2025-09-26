console.log("T03p01 - Ejercicio 21");

/*
Elabora un script que determine si un usuario ha introducido un número nacional fijo o móvil válido.
Suponer que los números fijos válidos empiezan por 8 o 9 y que constan de 9 dígitos. 
Asimismo, un número móvil válido empieza por 6 o 7 y constan también de 9 dígitos. 
Deberás hacer uso del objeto RegExp y crear una función que se denomine "validarTelefono()" 
que reciba la cadena introducida por el usuario y devuelva un booleano.
*/

let numeroIntroducido = prompt("Introduce un número nacional fijo o móvil:");

function validarTelefono(numero) {
    let patron = /^(?:[67]\d{8}|[89]\d{8})$/;
    return patron.test(numero);
}

function validarTelefonoConPrefijo(numero) {
    let patron = /^(?:\+34)?(?:[67]\d{8}|[89]\d{8})$/;
    return patron.test(numero);
}

function validarTelefonoFinal(numero) {
    if (numero.startsWith("+34")) {
        if (validarTelefonoConPrefijo(numero)) {
            console.log("El teléfono introducido con prefijo es válido.");
            return true;
        } else {
            console.log("El teléfono introducido con prefijo no es válido.");
            return false;
        }
    } else {
        if (validarTelefono(numero)) {
            console.log("El teléfono introducido es válido.");
            return true;
        } else {
            console.log("El teléfono introducido no es válido.");
            return false;
        }
    }
}

validarTelefonoFinal(numeroIntroducido);

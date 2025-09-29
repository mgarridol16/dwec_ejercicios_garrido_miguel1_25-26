console.log("T03p01 - Ejercicio 22");

/*
Busca en internet dos expresiones regulares. 
Una que permita validar un DNI y otra que permita validar un CIF. 
Crea script que pida al usuario una cadena y determine si es DNI o CIF válido.
Es necesario que definas una función que se denomine "validarDNIyCIF()" que reciba una cadena y devuelva un booleano.

*/

console.log("T03p01 - Ejercicio 22");

let dniOcif = prompt("Dame tu DNI o CIF: ");

if (validarDNIyCIF(dniOcif)) {
    console.log("DNI o CIF válido");
} else {
    console.log("Error al introducir el DNI o CIF");
}

function validarDNIyCIF(cadena) {
    // Detectamos si empieza con letra => CIF, si no => DNI
    if (/^[A-Z]/i.test(cadena)) {
        return validarCIF(cadena);
    } else {
        return validarDNI(cadena);
    }
}

function validarDNI(dni) {
    const regexDNI = /^[0-9]{8}[A-Z]$/;
    if (!regexDNI.test(dni)) return false;

    const numero = parseInt(dni.slice(0, 8));
    const letra = dni.charAt(8).toUpperCase();
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return letra === letras[numero % 23];
}

function validarCIF(cif) {
    const regexCIF = /^[ABCDEFGHJNPQRSUVW][0-9]{7}[0-9A-JXP]$/;
    if (!regexCIF.test(cif)) return false;

    const letraInicial = cif[0];
    const digitos = cif.slice(1, -1);
    const controlFinal = cif[cif.length - 1].toUpperCase();

    // Suma de posiciones pares
    let sumaPares = parseInt(digitos[1]) + parseInt(digitos[3]) + parseInt(digitos[5]);

    // Suma de posiciones impares
    let sumaImpares = 0;
    for (let i = 0; i < digitos.length; i += 2) {
        let doble = parseInt(digitos[i]) * 2;
        sumaImpares += Math.floor(doble / 10) + (doble % 10);  //MODO PRO COGE LOS DOS DIGITOS CON EL DIVISOR Y EL RESTO
                                                            //LO VIMOS HOY EN CLASE
    }

    let sumaTotal = sumaPares + sumaImpares;
    let codeControl = (10 - (sumaTotal % 10)) % 10;

    if (letraInicial === 'X' || letraInicial === 'P') {
        const letraEsperada = String.fromCharCode(64 + codeControl);
        return controlFinal === letraEsperada;
    } else if (!isNaN(controlFinal)) {
        return parseInt(controlFinal) === codeControl;
    } else {
        const letrasControl = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        return controlFinal === letrasControl[codeControl - 1];
    }
}

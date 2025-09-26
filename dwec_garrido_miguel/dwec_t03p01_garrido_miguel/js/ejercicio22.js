console.log("T03p01 - Ejercicio 22");

/*
Busca en internet dos expresiones regulares. 
Una que permita validar un DNI y otra que permita validar un CIF. 
Crea script que pida al usuario una cadena y determine si es DNI o CIF válido.
Es necesario que definas una función que se denomine "validarDNIyCIF()" que reciba una cadena y devuelva un booleano.

*/

let dniOcif = prompt("Dame tu DNI o CIF: ");


const esValido = validarDNIyCIF(dniOcif);
if(!esValido){
    console.log("Error al introducir el DNI o CIF");
} else {
    console.log("DNI o CIF válido");
}


function validarDNIyCIF(dniOcif) {

    let empiezaPorLetra = /^[A-Za-z].*/;
    if (empiezaPorLetra.test(dniOcif)) {
        let regexCIF = /^[ABCDEFGHJNPQRSUVW][0-9]{7}[A-J0-9]$/;
        if (regexCIF.test(dniOcif)) {
            const letraInicial = dniOcif.charAt(0);
            const digitos = dniOcif.slice(1, 8).split('');
            const control = dniOcif.charAt(8);

            // Suma de dígitos en posiciones impares (multiplicados por 2 y sumando sus dígitos)
            let sumaImpares = 0;
            for (let i = 0; i < digitos.length; i += 2) {
                let n = parseInt(digitos[i]) * 2;
                sumaImpares += Math.floor(n / 10) + (n % 10);
            }

            // Suma de dígitos en posiciones pares
            let sumaPares = 0;
            for (let i = 1; i < digitos.length; i += 2) {
                sumaPares += parseInt(digitos[i]);
            }

            const sumaTotal = sumaImpares + sumaPares;
            const digito = (10 - (sumaTotal % 10)) % 10;

            // Letras de control según normativa: 0→J, 1→A, 2→B, ..., 9→I
            const letrasControl = 'JABCDEFGHI';
            const letraCalculada = letrasControl[digito];

            // Determinamos si el control es letra, número o ambos según la letra inicial
            const letrasSolo = 'KPQRSW';
            const numerosSolo = 'ABEH';
            const ambos = 'CDFGJLMN';

            if (letrasSolo.includes(letraInicial)) return control === letraCalculada;
            if (numerosSolo.includes(letraInicial)) return control === digito.toString();
            if (ambos.includes(letraInicial)) return control === digito.toString() || control === letraCalculada;

            // Para otras letras permitidas (U, V, etc.), se acepta número o letra
            return control === digito.toString() || control === letraCalculada;
        } else {
            console.log("Error tu CIF no es correcto");
        }
    } else {
        let regexDNI = /^[0-9]{8}[A-Z]$/;
        if (regexDNI.test(dniOcif)) {
            // Obtenemos los 8 dígitos y la letra
            const numero = parseInt(dniOcif.slice(0, 8));
            const letra = dniOcif.charAt(8).toUpperCase();

            // Cadena de letras según algoritmo oficial
            const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

            // Calculamos la letra correcta
            const letraCorrecta = letras[numero % 23];

            // Comprobamos si la letra coincide
            return letra === letraCorrecta;
        }else{
            console.log("Error tu DNI no es correcto");
        }
    }


}


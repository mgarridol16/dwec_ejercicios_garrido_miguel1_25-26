console.log("T03p01 - Ejercicio 25");

/*
Desarrolla un script que pida al usuario una cadena y una letra e indique cuántas veces aparece dicha letra en esa cadena. 
Si la letra no existe se indicará un error. 
Debes hacer uso del método match() del objeto String usando expresiones regulares.
*/

let cadenaPedida = prompt("Introduce una cadena de texto: ").toLowerCase();
let letraPedida = prompt("Introduce una letra: ").toLowerCase();

let letrasSi = contarLetras(letraPedida, cadenaPedida);
if (!letrasSi) {
    console.log("Error no encontramos la letra en la cadena");
}
function contarLetras(letras, cadena) {

    const regex = new RegExp(letras, 'gi');
    let vecesQueEsta = cadena.match(regex);
    let existe = false;
    if (vecesQueEsta !== null) {
        console.log("\nLa letra existe : " + vecesQueEsta.length + " veces");
        existe = true;
    } else {s
        console.log("La letra no existe");
    }
    return existe;
}

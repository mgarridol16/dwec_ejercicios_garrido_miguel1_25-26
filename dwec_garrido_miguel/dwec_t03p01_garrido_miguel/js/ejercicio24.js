console.log("T03p01 - Ejercicio 24");

/*
Desarrolla un script que pida al usuario una cadena de texto y una palabra. 
El script deberá buscar la palabra en la cadena e indicar si está presente. 
Si se encuentra, mostrará un mensaje con la posición en la que empieza la palabra. 
Si no está, el script ofrecerá la opción de realizar otra búsqueda (esto puede ser en bucle). 
El método search() se usará con una expresión regular para evitar distinguir entre mayúsculas y minúsculas.

*/


let cadenaPedida = prompt("Dame una cadena de texto: ");
let palabraPedida = prompt("Introduce una palabra: ");

if (isNaN(cadenaPedida) && isNaN(palabraPedida)) {
    let encontrada = buscarPalabra(cadenaPedida, palabraPedida);

    while (!encontrada) {
        let quiereOtra = prompt("La palabra no está. ¿Quieres buscar otra? (s/n)").toLowerCase();
        if (quiereOtra === "s") {
            palabraPedida = prompt("Introduce una palabra: ");
            encontrada = buscarPalabra(cadenaPedida, palabraPedida);
        } else {
            console.log("Vale... entendido no quieres buscar otra :( ADIOS!");
            break; //Si no quiere buscar otra salimos y adios
        }
    }

} else {
    console.log("Error: introdujiste un número");
}

function buscarPalabra(cadena, palabra) {
    let posicion = cadena.toLowerCase().search(palabra.toLowerCase());
    if (posicion !== -1) {
        console.log("\nHemos encontrado la palabra.");
        console.log("La palabra empieza en la posición: " + posicion);
        return true;
    } else {
        console.log("La palabra no se encuentra en la cadena");
        return false;
    }
}


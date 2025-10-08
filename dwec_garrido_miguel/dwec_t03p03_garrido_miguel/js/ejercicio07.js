console.log("T03p03 - Ejercicio 07");
/*
Desarrolla un script que pida el número de filas y columnas de una matriz. 
Dichos valores deben ser mayores de 0 y confiamos en que el usuario los introduce de forma correcta. 
Después se pedirán los valores de dicha matriz. Finalmente se mostrarán los datos por pantalla. 
Usa las siguientes funciones:
-    	pedirDatos() -Recibe: filas y columnas. Devuelve: matriz.
-    	mostrarDatos() - Recibe: matriz. Devuelve: nada

*/

let filas = parseInt(prompt("Dime un numero de filas: "));
let columnas = parseInt(prompt("Dime un numero de columnas: "));

if (isNaN(filas) || isNaN(columnas) || filas < 1 || columnas < 1) {
    console.error("Error debe ser un numero mayor que 0");
}

let matriz = pedirDatos(filas, columnas);
mostrarDatos(matriz);


function pedirDatos(filas, columnas) {
    let matriz = [];
    for (let i = 0; i < filas; i++) {
        matriz[i] = [];

        for (let j = 0; j < columnas; j++) { 
            let columna = prompt("Dime un valor para la columna " + (j + 1) + " de la fila " + (i + 1));
            matriz[i].push(columna);

        }
    }
    return matriz;
}

function mostrarDatos(matriz) {
    console.log(matriz);
}



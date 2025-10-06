console.log("T03p03 - Ejercicio 01");
/*

*/

const arrayDefinido = [1, 2, 3];
let inicio;
let final;
let opcion;
let opcionElegida;
do {
    opcion = Number(prompt('====== MENU ARRAY ========' +
        '\n1. Borrar el ultimo elemento de un array' +
        '\n2. Borrar el primer elemento de un array' +
        '\n3. Borrar el primer y ultimo elemento del array' +
        '\n4. Deshacer al ultimo estado' +
        '\n0. No hacer nada' +
        '\n¿Que quieres hacer?: '));


    if (arrayDefinido.length > 0) {
        switch (opcion) {
            case 1:
                if (arrayDefinido.length == 0) {
                    console.log("El array está vacío, no podemos realizar la acción");
                } else {
                    final = arrayDefinido[arrayDefinido.length - 1];
                    inicio = arrayDefinido[0];
                    arrayDefinido.pop();
                }
                opcionElegida = 1;
                break;
            case 2:
                if (arrayDefinido.length == 0) {
                    console.log("El array esta vacio no podemos realizar la acción");
                } else {
                    final = arrayDefinido[arrayDefinido.length - 1];
                    inicio = arrayDefinido[0];
                    arrayDefinido.shift();
                }
                opcionElegida = 2;
                break;
            case 3:
                if (arrayDefinido.length == 0) {
                    console.log("El array esta vacio no podemos realizar la acción");
                } else {
                    inicio = arrayDefinido[0];
                    final = arrayDefinido[arrayDefinido.length - 1];
                    arrayDefinido.shift();
                    arrayDefinido.pop();
                }

                opcionElegida = 3;
                break;
            case 4:
                if (opcionElegida == 1) {
                    arrayDefinido.push(final);
                } else if (opcionElegida == 2) {
                    arrayDefinido.unshift(inicio);
                } else if (opcionElegida == 3) {
                    arrayDefinido.unshift(inicio);
                    arrayDefinido.push(final);
                } else {
                    console.error("Error al deshacer array no hay nada para deshacer");
                }
                inicio = 0;
                final = 0;
                break;
            case 0:
                console.log("\nEl array es " + arrayDefinido.toString());
                console.log("\nAdios gracias por usarnos");
                break;
            default:
                console.log("Hay un error lo siento");
        }
    } else {
        console.log("El array esta vacio no se puede continuar");
        opcion = 0;
    }
    if(arrayDefinido.length == 0){
        console.log("El array esta vacio no podemos continuar");
    }

} while (opcion != 0 && arrayDefinido.length > 0);









/*
paso 1 mirar si hay elementos y que no se puede dejar undefined mirar alguna forma en javaScript y ya lo hacemos lo que hay que hacer
paso 3 miramos si tenemos dos elementos y si no es lo de undefined y llamamos a las dos funciones a la vez de borrar el primer y el segundo y se procesa
paso 4 (SOLO HECHAMOS ATRAS UN PASO SOLO UNA OPERACIÓN ) HAY QUE SABER SI HAN BORRADO LOS DOS ULTIMOS O LOS DOS PRIMEROS UN ARRAY QUE COPIA IDENTICA ANTES DEL ARRAY
AUNQUE ES SENCILLA COPIA CADA COSA QUE HACE ME PUEDE BORRAR INICIO O FINAL Y VER SI SOLO A BORRADO EL FINAL O INICIO CON DOS VARIABLES NO HACER COPIAS CADA VEZ QUE BORRO
MIRO PRINCIPIO Y FIN SI BORRAS INDEX Y VALOR LO GUARDAS IGUAL HACERLO MEJOR SIN COPIA ENTERA ALMACENAR EN DOS VARIABLES LO QUE ME ESTA BORRANDO EN CADA MOMENTO Y LUEGO SI LO DESHACES SE LO PONES
SOLO UN ESTADO POR ESO SOLO ALMACENAS LO QUE BORRAS 
PROBAR HACERLO SIN COPIA Y SI SE COMPLICA MUCHO PUES LO HACEMOS CON COPIA
*/
console.log("T03p03 - Ejercicio 10");

let opcion;
let matriz = [
    ["Equipo", "PTS", "PJ", "PG", "PE", "PP"],
    ["Levante", 40, 14, 13, 1, 0],
    ["Malaga", 37, 14, 12, 1, 1],
    ["Eibar", 34, 14, 11, 1, 2],
    ["Cordoba", 27, 14, 8, 3, 3]
];

let lider;
let perdedor;
let ganador;
do {
    opcion = parseInt(prompt(`\n======= ELIGE UNA OPCION =============
        \n1. Ver lider.
        \n2. Ver equipo con mas partidos perdidos.
        \n3. Ver equipo con mas partidos ganados.
        \n4. Añadir equipo.
        \n5. Mostrar clasificacion.
        \n6. Introducir jornada.
        \n7. Ordenar clasificacion.
        \n0. Salir.
        \n¿Que opcion quieres elegir?`));

    switch (opcion) {
        case 1: lider = verLider(matriz);
                console.log("El lider es " + lider[0] + " con " + lider[1] + " puntos");
            break;
        case 2: perdedor = equipoPerdidos(matriz);
                console.log("El equipo con mas partidos perdidos es " + perdedor[0] + " con " + perdedor[5] + " partidos perdidos");
            break;
        case 3: ganador = equipoGanados(matriz);
                console.log("El equipo con mas partidos ganados es " + ganador[0] + " con " + ganador[3] + " partidos ganados");
            break;
        case 4: añadirEquipo(matriz);
                console.log("Equipo añadido correctamente.");
                ordenarClasi(matriz);
            break;
        case 5: mostrarArray(matriz);
            break;
        case 6: introducirJornada(matriz);
                console.log("Jornada introducida correctamente.");
            break;
        case 7: ordenarClasi(matriz);
            break;
        case 0: console.log("ADIOS GRACIAS POR USARNOS");
            break;
        default: console.log("error al definir una opcion valida");
    }

} while (opcion != 0);

function verLider(matriz) {
    let lider = matriz[1];

    for (let i = 1; i < matriz.length; i++) {
        if (matriz[i][1] > lider[1]) {
            lider = matriz[i];
        }
    }
    return lider;
}

function equipoPerdidos(matriz) {
    let perdedor = matriz[1];

    for (let i = 1; i < matriz.length; i++) {
        if (matriz[i][5] > perdedor[5]) {
            perdedor = matriz[i];
        }
    }
    return perdedor;
}

function equipoGanados(matriz) {
    let ganador = matriz[1];

    for (let i = 1; i < matriz.length; i++) {
        if (matriz[i][3] > ganador[3]) {
            ganador = matriz[i];
        }
    }
    return ganador;
}

function añadirEquipo(matriz) {
    let equipo = prompt("Dime el nombre del equipo.");
    let partidosGanados = parseInt(prompt("Numero partidos ganados"));
    let perdidos = parseInt(prompt("Numero partidos perdidos"));
    let empatados = parseInt(prompt("Numero partidos empatados"));
    let partidosJugados = partidosGanados + perdidos + empatados;

    let puntos = (partidosGanados * 3) + (empatados * 1);
    let nuevoEquipo = [equipo, puntos, partidosJugados, partidosGanados, empatados, perdidos]
    matriz.push(nuevoEquipo);
}

function mostrarArray(matriz) {
    console.log("=== CLASIFICACIÓN ===\n");
        console.table(matriz);
}

function introducirJornada(matriz) {
    for (let i = 1; i < matriz.length; i++) {
        let equipo = matriz[i][0];
        let pregunta = prompt(equipo + " Has ganado(1) || Has perdido(2) || Has empatado(3)");
        if (pregunta == 1) {
            matriz[i][3] += 1;
            matriz[i][2] += 1;
            matriz[i][1] += 3;
        } else if (pregunta == 2) {
            matriz[i][5] += 1;
            matriz[i][2] += 1;
        } else if (pregunta == 3) {
            matriz[i][4] += 1;
            matriz[i][2] += 1;
            matriz[i][1] += 1;
        }
    }

}

function ordenarClasi(matriz) {
    const cabecera = matriz[0]; //ME QUEDO CON LA CABECERA
    const equipos = matriz.slice(1); //ME QUEDO CON EL RESTO QUITANDO LA CABECERA COJO APARTIR DE LA CABECERA TODO LO QUE HAY DETRAS

    equipos.sort((a, b) => b[1] - a[1]); //VOY COMPARANDO LOS PUNTOS QUE ESTAN EN LA POSICION DE CADA ARRAY Y LOS VOY ORDENANDO

    matriz.length = 0;  //DEJO EL ARRAY VACIO
    matriz.push(cabecera);  //PONGO LA CABECERA
    for (let equipo of equipos) {
    matriz.push(equipo);
}  //VOY RECORRIENDO LOS EQUIPOS ORDENADOS Y LOS VOY PONIENDO
    
    console.log("Clasificación ordenada correctamente.");
    mostrarArray(matriz);
}
console.log("T03p0X - Ejercicio 11 - Juego Final");

// 1. ESTRUCTURAS DE DATOS PRINCIPALES
const JUGADAS_SET = new Set(["piedra", "papel", "tijera", "lagarto", "spock"]);
const JUGADAS_ARRAY = Array.from(JUGADAS_SET);

// Matriz de reglas: [Ganador, Perdedor] (Estilo matriz de tu ejercicio10.js)
const REGLAS_GANADOR = [
    ["tijera", "papel"],
    ["tijera", "lagarto"],
    ["papel", "piedra"],
    ["papel", "spock"],
    ["piedra", "tijera"],
    ["piedra", "lagarto"],
    ["lagarto", "spock"],
    ["lagarto", "papel"],
    ["spock", "tijera"],
    ["spock", "piedra"]
];

const tablaJugadores = new Map();


// =================================================================
// 2. LÓGICA PRINCIPAL DEL JUEGO
// =================================================================

// 2.1. Gestión del Jugador 1
let nombre1;
do {
    nombre1 = pedirNombre();
    if (nombre1.toLowerCase() === "máquina") { 
        alert("El nombre 'Máquina' está reservado, elige otro.");
    }
} while (nombre1.toLowerCase() === "máquina");

const jugadas1 = pedirJugadasUsuario(JUGADAS_SET);
tablaJugadores.set(nombre1, jugadas1);


// 2.2. Elección y Gestión del Jugador 2
let opcionJ2;
let esValido;

do {
    opcionJ2 = parseInt(
        prompt(
            "Selección de Oponente: \n1. Jugar contra la Máquina \n2. Jugar contra un Amigo"
        )
    );
    esValido = !isNaN(opcionJ2) && opcionJ2 >= 1 && opcionJ2 <= 2;
    if (!esValido) {
        alert("Opción no válida. Debe ser 1 o 2. Repite.");
    }
} while (!esValido);


let nombre2;
let jugadas2;

if (opcionJ2 === 1) {
    // Caso Máquina (Ampliación)
    nombre2 = "Máquina";
    jugadas2 = generarJugadasMaquina(JUGADAS_ARRAY);
} else {
    // Caso Amigo
    do {
        nombre2 = pedirNombre();
        // Comprobar que no sea el mismo nombre que el Jugador 1
        if (nombre2 === nombre1) {
            alert(`El jugador ${nombre2} ya está jugando. Introduce un nombre diferente.`);
        }
    } while (nombre2 === nombre1);
    
    jugadas2 = pedirJugadasUsuario(JUGADAS_SET);
}

tablaJugadores.set(nombre2, jugadas2);


// 2.3. Ejecución del Juego
ejecutarPartida(tablaJugadores, REGLAS_GANADOR);


// =================================================================
// 3. FUNCIONES BÁSICAS
// =================================================================

function pedirNombre() {
    let nombre = "";
    let esValido = false;
    do {
        nombre = prompt("Dime el nombre de usuario");
        if (nombre && nombre.trim().length > 0) {
            esValido = true;
        } else {
            alert("El nombre no puede estar vacío.");
        }
    } while (!esValido);
    return nombre;
}

function generarJugadasMaquina(opciones) {
    const jugadas = [];
    console.log("Generando jugadas para la Máquina...");
    
    for (let i = 0; i < 5; i++) {
        const indice = Math.floor(Math.random() * opciones.length); 
        jugadas.push(opciones[indice]);
    }
    console.log(`Jugadas Máquina: ${jugadas.join(", ")}`);
    return jugadas;
}

function pedirJugadasUsuario(jugadasSet) {
    const jugadas = [];
    let esValido;
    let metodo;

    // Pedir el método de entrada (Numérico o Texto)
    do {
        metodo = parseInt(
            prompt(
                "¿Método de entrada? \n1. Menú numérico \n2. Escribir texto"
            )
        );
        esValido = !isNaN(metodo) && metodo >= 1 && metodo <= 2;
        if (!esValido) {
            alert("Debe ser 1 o 2. Repite.");
        }
    } while (!esValido);

    // Pedir las 5 jugadas
    for (let i = 0; i < 5; i++) {
        if (metodo === 1) {
            let numJugada;
            do {
                numJugada = parseInt(
                    prompt(`Jugada ${i + 1} (1-Piedra, 2-Papel, 3-Tijera, 4-Lagarto, 5-Spock)`)
                );
                esValido = !isNaN(numJugada) && numJugada >= 1 && numJugada <= 5;
                if (!esValido) {
                    alert("Número inválido. Debe ser entre 1 y 5.");
                }
            } while (!esValido);
            
            // Mapeo simple usando el array global
            jugadas.push(JUGADAS_ARRAY[numJugada - 1]);
            
        } else if (metodo === 2) {
            let textoJugada;
            do {
                textoJugada = prompt(`Jugada ${i + 1} (piedra, papel, tijera, lagarto, spock)`).toLowerCase();
                // Validación con el Set (como se pide)
                esValido = jugadasSet.has(textoJugada);
                if (!esValido) {
                    alert("Jugada no reconocida. Debe ser una de las 5 opciones.");
                }
            } while (!esValido);
            jugadas.push(textoJugada);
        }
    }
    return jugadas;
}


// 4. FUNCIÓN CENTRAL DE JUEGO
function determinarGanadorRonda(j1, j2, reglas) {
    if (j1 === j2) {
        return 0; // Empate
    }
    
    // Bucle para buscar la regla
    for (let i = 0; i < reglas.length; i++) {
        const regla = reglas[i];
        if (regla[0] === j1 && regla[1] === j2) {
            return 1; // Gana Jugador 1
        }
    }
    
    return 2; // Gana Jugador 2
}

function ejecutarPartida(mapaJugadores, reglas) {
    const [jugador1, jugador2] = Array.from(mapaJugadores.keys()); // Obtener nombres del Map
    const jugadas1 = mapaJugadores.get(jugador1);
    const jugadas2 = mapaJugadores.get(jugador2);

    let puntos1 = 0;
    let puntos2 = 0;

    for (let i = 0; i < jugadas1.length; i++) {
        const j1 = jugadas1[i];
        const j2 = jugadas2[i];

        const resultado = determinarGanadorRonda(j1, j2, reglas);

        if (resultado === 1) {
            console.log(`Ronda ${i + 1}: Gana ${jugador1} (${j1} vs ${j2})`);
            puntos1++;
        } else if (resultado === 2) {
            console.log(`Ronda ${i + 1}: Gana ${jugador2} (${j2} vs ${j1})`);
            puntos2++;
        } else {
            console.log(`Ronda ${i + 1}: Empate (${j1} vs ${j2})`);
        }
    }

    // Mostrar el resultado final (como tu if/else if/else)
    console.log("--- RESULTADO FINAL ---");
    if (puntos1 > puntos2) {
        console.log(`Ha ganado ${jugador1} con el resultado ${puntos1}-${puntos2}`);
    } else if (puntos2 > puntos1) {
        console.log(`Ha ganado ${jugador2} con el resultado ${puntos2}-${puntos1}`);
    } else {
        console.log(`Ha sido un empate con el resultado ${puntos1}-${puntos2}`);
    }
}
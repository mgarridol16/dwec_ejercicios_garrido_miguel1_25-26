console.log("T04p01 - Ejercicio 04");

let personajes = [
    {
        nombre: "Spider-Man",
        nombreReal: "Peter Parker",
        profesionReal: "Fotógrafo",
        editorial: "Marvel",
        superpoder: "Agilidad sobrehumana, sentido arácnido, fuerza mejorada",
        debilidad: "Familia, responsabilidades",
        heroe: "héroe",
        edad: 28,
        numeroApariciones: 2500,
        equipo: "Los Vengadores",
        nacionalidad: "Estadounidense",
        especie: "Humano",
        universo: "Tierra-616"
    },
    {
        nombre: "Batman",
        nombreReal: "Bruce Wayne",
        profesionReal: "Empresario",
        editorial: "DC",
        superpoder: "Inteligencia superior, combate cuerpo a cuerpo",
        debilidad: "Humanidad, miedo a perder seres queridos",
        heroe: "héroe",
        edad: 35,
        numeroApariciones: 3000,
        equipo: "Liga de la Justicia",
        nacionalidad: "Estadounidense",
        especie: "Humano",
        universo: "Tierra-1"
    },
    {
        nombre: "Iron Man",
        nombreReal: "Tony Stark",
        profesionReal: "Ingeniero, Empresario",
        editorial: "Marvel",
        superpoder: "Armadura tecnológica avanzada, inteligencia superior",
        debilidad: "Alcoholismo, ego",
        heroe: "héroe",
        edad: 40,
        numeroApariciones: 2200,
        equipo: "Los Vengadores",
        nacionalidad: "Estadounidense",
        especie: "Humano",
        universo: "Tierra-616"
    },
    {
        nombre: "Joker",
        nombreReal: "Desconocido",
        profesionReal: "Criminal",
        editorial: "DC",
        superpoder: "Ingenio criminal, inmunidad a toxinas",
        debilidad: "Insanidad",
        heroe: "villano",
        edad: 45,
        numeroApariciones: 1000,
        equipo: "Injusticia",
        nacionalidad: "Desconocido",
        especie: "Humano",
        universo: "Tierra-1"
    },
    {
        nombre: "Wonder Woman",
        nombreReal: "Diana Prince",
        profesionReal: "Embajadora, guerrera",
        editorial: "DC",
        superpoder: "Fuerza sobrehumana, vuelo, habilidades de combate",
        debilidad: "Cuerdas mágicas",
        heroe: "héroe",
        edad: 3000,
        numeroApariciones: 1200,
        equipo: "Liga de la Justicia",
        nacionalidad: "Themyscirana",
        especie: "Amazona",
        universo: "Tierra-1"
    },
    {
        nombre: "Thor",
        nombreReal: "Thor Odinson",
        profesionReal: "Dios del Trueno",
        editorial: "Marvel",
        superpoder: "Control del trueno, vuelo, fuerza sobrehumana",
        debilidad: "Humildad (cuando sin Mjolnir)",
        heroe: "héroe",
        edad: 1500,
        numeroApariciones: 1500,
        equipo: "Los Vengadores",
        nacionalidad: "Asgardiano",
        especie: "Dios",
        universo: "Tierra-616"
    },
    {
        nombre: "Loki",
        nombreReal: "Loki Laufeyson",
        profesionReal: "Dios de las mentiras",
        editorial: "Marvel",
        superpoder: "Ilusionismo, cambio de forma, magia",
        debilidad: "Celos hacia Thor",
        heroe: "antiheroe",
        edad: 1000,
        numeroApariciones: 900,
        equipo: "",
        nacionalidad: "Asgardiano",
        especie: "Gigante de Hielo",
        universo: "Tierra-616"
    },
    {
        nombre: "Flash",
        nombreReal: "Barry Allen",
        profesionReal: "Forense",
        editorial: "DC",
        superpoder: "Súper velocidad, viaje en el tiempo",
        debilidad: "Demasiada velocidad puede destruir el tiempo",
        heroe: "héroe",
        edad: 30,
        numeroApariciones: 1500,
        equipo: "Liga de la Justicia",
        nacionalidad: "Estadounidense",
        especie: "Humano",
        universo: "Tierra-1"
    },
    {
        nombre: "Thanos",
        nombreReal: "Thanos",
        profesionReal: "Tirano galáctico",
        editorial: "Marvel",
        superpoder: "Fuerza inmensa, inteligencia táctica, uso del Guantelete del Infinito",
        debilidad: "Arrogancia, obsesión con la muerte",
        heroe: "villano",
        edad: 1000,
        numeroApariciones: 500,
        equipo: "Orden Negra",
        nacionalidad: "Titán",
        especie: "Eterno-Deviant",
        universo: "Tierra-616"
    },
    {
        nombre: "Superman",
        nombreReal: "Clark Kent (Kal-El)",
        profesionReal: "Periodista",
        editorial: "DC",
        superpoder: "Fuerza sobrehumana, vuelo, visión de rayos X, invulnerabilidad",
        debilidad: "Kryptonita",
        heroe: "héroe",
        edad: 35,
        numeroApariciones: 3000,
        equipo: "Liga de la Justicia",
        nacionalidad: "Kryptoniano",
        especie: "Extraterrestre (Kryptoniano)",
        universo: "Tierra-1"
    }
];

/*
find(), findIndex(), findLast() y findLastIndex()
includes() y indexOf() 
Explica si devuelven el elemento, el índice, o undefined/-1, y si recorren desde el inicio o el final del array.

Usa el método "find" para encontrar al personaje cuyo nombre real sea "Bruce Wayne". ¿Diferencias entre find(), findIndex(), findLast() y findLastIndex()?

Usa el método "findLast" para conseguir el último personaje que tenga más de 2000 apariciones. ¿Diferencias entre find(), findIndex(), findLast() y findLastIndex()?

Usa "indexOf" para averiguar la posición del primer personaje cuya editorial sea "Marvel".


*/

//paso1:
let personajeEncontradoFind = personajes.find((personaje) => personaje.nombreReal === "Bruce Wayne");
console.log("El personaje cuyo nombre real sea Bruce Wayne ha sido encontrado :" + personajeEncontrado.nombre);

let indiceEncontrado = personajes.findIndex((p) => p.nombreReal === "Bruce Wayne");
console.log("2. findIndex(): La posición es " + indiceEncontrado);

let ultimoPersonajeEncontrado = personajes.findLast((p) => p.nombreReal === "Bruce Wayne");
console.log("3. findLast(): " + ultimoPersonajeEncontrado.nombre);

let ultimoIndiceEncontrado = personajes.findLastIndex((p) => p.nombreReal === "Bruce Wayne");
console.log("4. findLastIndex(): La posición es " + ultimoIndiceEncontrado);


//paso 2:
let personajeEncontradoUltimo = personajes.findLast((personajes) => personajes.numeroApariciones > 2000);
console.log("el último personaje que tenga más de 2000 apariciones es: " + personajeEncontradoUltimo);


//paso3:
personajeMarvel = personajes.indexOf("Marvel"); //ESTO DARA ERROR POR QUE INDEXOF SOLO FNCIONA CON VALORES PRIMITIVOS NO CON OBJETOS
//SI FUERA UN SIMPLE ARRAY SI

/*PARA QUE FUNCIONE CON OBJETOS HABRA CREAR UN NUEVO ARRAY CON SOLO LAS EDITORIALES */
//let editoriales = personajes.map(p => p.editorial);
//personajeMarvel = personajes.indexOf("Marvel"); 

//POR ESO PARA ALGO ASI ES MEJOR USAR FindIndex()
console.log("la posición del primer personaje cuya editorial sea Marvel es: " + personajeMarvel);



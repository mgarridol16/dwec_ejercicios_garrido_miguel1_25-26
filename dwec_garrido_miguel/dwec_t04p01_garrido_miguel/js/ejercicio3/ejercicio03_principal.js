console.log("T04p01 - Ejercicio 3 Principal");


let listaAlumnos = [];
let listaAulas = [];
let asignaturasPorAsignar = [];


function funcionPrueba3() {

    const aula1 = new Aula(40, "AU01", "Aula de primero");
    const aula2 = new Aula(30, "AU02", "Aula de segundo");
    const aula3 = new Aula(30, "AU03", "Aula de tercero");
    const aula4 = new Aula(30, "AU04", "Aula de cuarto");

    listaAulas = [aula1, aula2, aula3, aula4];

    asignaturasPorAsignar = [...listaAsignaturas];

    let opcion;
    do {
        opcion = parseInt(
            prompt(`======== BIENVENIDO AL MENU DE GESTION ==========
            \n1. Añadir alumnos a un aula
            \n2. Asignar asignaturas a profesores
            \n3. Consultar alumnado de profesores
            \n4. Insertar notas por profesor
            \n5. Mostrar % por nota de un aula
            \n0. Salir  `)
        );

        if (isNaN(opcion)) {
            console.log("Error: Debes introducir un número válido.");
            opcion = -1;
        }

        switch (opcion) {
            case 1:
                addAlumAula();
                break;
            case 2:
                asignarOptativa();
                break;
            case 3:
                consultarAlumDeProf();
                break;
            case 4:
                insertarNotasProfe();
                break;
            case 5:
                mostrarNotaAula();
                break;
            case 0:
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Error: Opción no válida. Elige entre 0 y 5.");
        }
    } while (opcion !== 0);
}

function addAlumAula() {
    let textoAulas = "";
    if (listaAulas.length === 0) {
        console.log("No hay aulas creadas");
        return;
    }

    for (let i = 0; i < listaAulas.length; i++) {
        textoAulas += "\n" + i + " . " + listaAulas[i].idAula;
    }
    let opcion = parseInt(
        prompt(textoAulas + "\nElige un aula para añadir un alumno:")
    );

    if (isNaN(opcion) || opcion < 0 || opcion >= listaAulas.length) {
        console.log("Opción de aula no válida.");
        return;
    }
    let aulaSeleccionada = listaAulas[opcion];

    if (!aulaSeleccionada.haySitioAlumnos()) {
        console.log("Error " + aulaSeleccionada.idAula + " esta llena");
        return;
    }

    const nuevoAlumno = aulaSeleccionada.pedirDatosUnAlumno();
    if (!nuevoAlumno) {
        console.log("Creación de alumno cancelada.");
        return; //PARA QUE SALGA DE LA FUNCIÓN SI SE CANCELA
    }

    let cursoAula = aulaSeleccionada.curso;
    let asignaturasMatriculadas = [];
    let contadorAsignaturas = 0;

    // 1. Asignaturas Obligatorias
    for (let asignaturaOriginal of listaAsignaturas) {
        if (asignaturaOriginal.curso == cursoAula && asignaturaOriginal.tipo == "obligatoria") {
            asignaturasMatriculadas.push(asignaturaOriginal);
            contadorAsignaturas++;
            if (contadorAsignaturas == 2) break; // Asumimos 2 obligatorias
        }
    }

    // 2. Asignaturas Optativas
    let nombreAsignaturasOpcionales = listaAsignaturas
        .filter(a => a.curso == cursoAula && a.tipo != "obligatoria")
        .map(a => a.nombreAsignatura);

    let optativasDisponibles = listaAsignaturas
        .filter(a => a.curso == cursoAula && a.tipo != "obligatoria");

    let ContadorAsignaturasOpti = 0;
    const opcionesTexto = nombreAsignaturasOpcionales.join("\n");

    if (opcionesTexto.length > 0) {
        do {
            let mensajePrompt = "Elige la asignatura optativa que quieres cursar. Opciones disponibles:\n" + opcionesTexto;
            let asignaturaQueQuiere = prompt(mensajePrompt);
            if (!asignaturaQueQuiere) break;

            asignaturaQueQuiere = asignaturaQueQuiere.trim();

            // Buscamos la asignatura original
            const asignaturaObj = optativasDisponibles.find(
                (a) => a.nombreAsignatura === asignaturaQueQuiere
            );

            if (asignaturaObj) {
                if (!asignaturasMatriculadas.includes(asignaturaObj)) {
                    asignaturasMatriculadas.push(asignaturaObj);
                    ContadorAsignaturasOpti++;
                } else {
                    console.log("Ya has elegido esta asignatura.");
                }
            } else {
                console.log("Asignatura no válida.");
            }
        } while (ContadorAsignaturasOpti < 2); // Asumimos 2 optativas
    } else {
        console.log("No hay asignaturas optativas disponibles para este curso.");
    }

    // 3. Finalización de Matrícula
    for (let asignatura of asignaturasMatriculadas) {
        nuevoAlumno.insertarAsignatura(asignatura);
    }

    listaAlumnos.push(nuevoAlumno);
    aulaSeleccionada.insertarAlumnos([nuevoAlumno]);
    /

    console.log(`Alumno ${nuevoAlumno.nombre} matriculado correctamente en ${aulaSeleccionada.idAula}.`);
}




// --- 2. Asignar Asignaturas a Profesores ---
function asignarOptativa() {
    console.log("====== Asignación de Asignaturas a Profesores =======");

    const asignaturasDisponibles = asignaturasPorAsignar;
    const listaProfes = [...listaProfesores];

    let opcion;
    let profesorIndex = 0;

    while (profesorIndex < listaProfes.length) {
        let profesorActual = listaProfes[profesorIndex];
        console.log(`\nASIGNANDO ASIGNATURAS AL PROFESOR: ${profesorActual.nombreCompleto}`);

        // Verificamos cuántas asignaturas le faltan
        let asignaturasFaltantes = 2 - profesorActual.asignaturas.length;
        if (asignaturasFaltantes <= 0) {
            console.log("Este profesor ya tiene 2 o más asignaturas.");
            profesorIndex++;
            continue;
        }

        let asignaturasAsignadasEnEsteTurno = 0;

        //asignar las asignaturas faltantes
        while (asignaturasAsignadasEnEsteTurno < asignaturasFaltantes) {

            // 1. Filtrar asignaturas válidas (que no sean del mismo curso que las que ya tiene)
            let asignaturasRestantesValidas = asignaturasDisponibles.filter(asignatura => {
                if (profesorActual.asignaturas.length === 0) return true; // Si no tiene, todas son válidas
                // Comprueba que la asignatura candidata no tenga el mismo curso que CUALQUIERA que ya tenga
                return !profesorActual.asignaturas.some(asigExistente => asigExistente.curso === asignatura.curso);
            });

            //si no hay opciones válidas
            if (asignaturasRestantesValidas.length === 0 && asignaturasDisponibles.length > 0) {
                console.log(`Profesor ${profesorActual.nombreCompleto} no puede elegir más asignaturas con la restricción de curso. Finalizando su asignación.`);
                break; // Sale del bucle
            }

            //si no hay asignaturas en general
            if (asignaturasDisponibles.length === 0) {
                console.log("Todas las asignaturas han sido asignadas. Terminando.");
                profesorIndex = listaProfes.length;
                break;
            }

            // 2. Mostrar opciones
            let opcionesValidasTexto = "Asignaturas disponibles para este profesor:";
            let opcionesValidasArray = [];
            for (let i = 0; i < asignaturasRestantesValidas.length; i++) {
                opcionesValidasTexto += `\n${i} . ${asignaturasRestantesValidas[i].nombreAsignatura} (Curso: ${asignaturasRestantesValidas[i].curso})`;
                opcionesValidasArray.push(asignaturasRestantesValidas[i]);
            }
            console.log(opcionesValidasTexto);

            // 3. Bucle de Validación de Opción
            let opcionValida = false;
            let asignaturaElegida = null;
            do {
                let promptMsg = `Elige la asignatura Nº ${profesorActual.asignaturas.length + 1} para ${profesorActual.nombreCompleto}: `;
                opcion = prompt(promptMsg);

                if (opcion === null) { // Si presiona Cancelar
                    break;
                }

                opcion = parseInt(opcion);

                if (isNaN(opcion) || opcion < 0 || opcion >= opcionesValidasArray.length) {
                    console.log("Error: Debes elegir un número de opción válido de la lista.");
                } else {
                    asignaturaElegida = opcionesValidasArray[opcion];
                    opcionValida = true;
                }
            } while (!opcionValida && opcion !== null);

            if (opcion === null) {
                break; // Sale del bucle 'while
            }

            // 4. Asignación y Eliminación de la lista
            profesorActual.asignaturas.push(asignaturaElegida);

            // Eliminar de la lista global 'asignaturasPorAsignar' por que ya ha sido asignada
            const indexGlobal = asignaturasPorAsignar.indexOf(asignaturaElegida);
            if (indexGlobal > -1) {
                asignaturasPorAsignar.splice(indexGlobal, 1);
            }

            asignaturasAsignadasEnEsteTurno++;
            console.log(`✅ Asignada: ${asignaturaElegida.nombreAsignatura}.`);
        }
        profesorIndex++;
    }
}




// --- 3. Consultar Alumnos por Profesor ---
function consultarAlumDeProf() {
    const profes = [...listaProfesores];

    for (let prof of profes) {
        console.log(`\n--- Profesor: ${prof.nombreCompleto} ---`);
        if (prof.asignaturas.length === 0) {
            console.log(" (No tiene asignaturas asignadas)");
            continue;
        }

        let asignaturasProfe = [...prof.asignaturas];
        for (let asignatura of asignaturasProfe) {
            console.log(`  Asignatura: ${asignatura.nombreAsignatura}`);


            if (asignatura.alumnos.length === 0) {
                console.log("    (No hay alumnos matriculados)");
            } else {
                console.log("    Alumnos:");
                asignatura.alumnos.forEach(alum => {
                    // Usamos los getters que definiste en Alumno.js
                    console.log(`    - ${alum.nombre} (DNI: ${alum.dni})`);
                });
            }
        }
    }
}


// --- 4. Insertar Notas---
function insertarNotasProfe() {
    console.log("=========== BIENVENIDO A INSERTAR NOTAS ============");
    const listaProfes = [...listaProfesores];

    for (let profes of listaProfes) {
        let asignaturasProfe = [...profes.asignaturas];
        console.log(`\n======================================================`);
        console.log(`PROFESOR ACTUAL: ${profes.nombreCompleto}`);
        console.log(`======================================================`);

        for (let asignatura of asignaturasProfe) {
            console.log("Asignatura: " + asignatura.nombreAsignatura);
            if (asignatura.alumnos.length === 0) {
                console.log("No hay alumnos en esta asignatura");
                continue;
            }

            let continuarCalificando = true;
            do {
                let alumnosSinNota = [];
                let indiceOpcion = 0;
                let todosTienenNota = true;

                for (let alumnoActual of asignatura.alumnos) {

                    const notaActual = alumnoActual.asignaturaInfo.get(asignatura);

                    if (notaActual !== undefined) {
                        console.log(`(Nota registrada: ${alumnoActual.nombre}: ${notaActual.toFixed(2)})`);
                    } else {
                        console.log(indiceOpcion + ". " + alumnoActual.nombre);
                        alumnosSinNota.push(alumnoActual);
                        indiceOpcion++;
                        todosTienenNota = false;
                    }
                }

                if (todosTienenNota) {
                    console.log(`Todos los alumnos en ${asignatura.nombreAsignatura} tienen nota.`);
                    break;
                }

                let opcion = prompt(`Elige un alumno (0 a ${alumnosSinNota.length - 1}) o [C]ancelar: `);
                if (!opcion || opcion.toUpperCase() === 'C') {
                    continuarCalificando = false;
                    break;
                }

                opcion = parseInt(opcion);
                if (isNaN(opcion) || opcion < 0 || opcion >= alumnosSinNota.length) {
                    console.log("Error al elegir un alumno");
                    continue;
                }

                let alumnoElegido = alumnosSinNota[opcion];

                let nota = Number(prompt(`Dime una nota para ${alumnoElegido.nombre}:`));
                while (isNaN(nota) || nota < 0 || nota > 10) {
                    console.log("Error al introducir la nota");
                    nota = Number(prompt(`Dime una nota para ${alumnoElegido.nombre}:`));
                }

                alumnoElegido.ponerNota(asignatura, nota);
                console.log(`Nota ${nota} registrada.`);

            } while (continuarCalificando);
        }
    }
}

// --- 5. Mostrar Medias (Usando Getter de Alumno) ---
function mostrarNotaAula() {
    console.log("============= MEDIA DE NOTA POR AULA ==============");

    let textoAulas = "";
    if (listaAulas.length === 0) {
        console.log("No hay aulas creadas");
        return;
    }
    for (let i = 0; i < listaAulas.length; i++) {
        textoAulas += "\n" + i + " . " + listaAulas[i].idAula;
    }

    let opcion = parseInt(
        prompt(textoAulas + "\nSeleccione el aula donde quieres consultar su nota media")
    );

    if (isNaN(opcion) || opcion < 0 || opcion >= listaAulas.length) {
        console.log("Opción no válida");
        return;
    }

    let aulaSeleccionada = listaAulas[opcion];

    let media = aulaSeleccionada.mediasNotas();

    if (media === 0 && aulaSeleccionada.alumnos.length === 0) {
        console.log(`El aula ${aulaSeleccionada.idAula} no tiene alumnos.`);
    } else if (media === 0 && aulaSeleccionada.alumnos.length > 0) {
        console.log(`No hay notas registradas para el aula ${aulaSeleccionada.idAula}.`);
    } else {
        console.log(`La nota media del aula ${aulaSeleccionada.idAula} es: ${media.toFixed(2)}`);
    }
}

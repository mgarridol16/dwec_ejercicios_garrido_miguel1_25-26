console.log("T04p01 - Ejercicio 02");

const aula1 = new Aula(28, 2, "Aula de tecnologia", "1 - Bachiller");
funcionPrueba2();

function funcionPrueba2(){
    let opcion;
    do{
        opcion = parseInt(prompt(`======== BIENVENIDO AL MENU DE ALUMNOS ==========
            \n1. Matricular Alumnos
            \n2. Mostrar Datos alumnos
            \n3. Mostrar Media alumnos
            \n4. Ver alumnos con mejor nota
            \n5. Ver porcentaje alumnos suspensos y aprobados
            \n0. Salir  `));
        
        if(isNaN(opcion)){
            console.log("Error: Debes introducir un número válido."); 
            continue;
        }
        
        switch(opcion){
            case 1: 
                matricularAlumno();
                break;
            case 2: 
                mostrarDatosAlumnos();
                break;
            case 3: 
                mostrarMediaAlumnos();
                break;
            case 4: 
                verAlumnosMejorNota();
                break;
            case 5: 
                verSuspensosYaprobados();
                break;
            case 0: 
                console.log("Saliendo del programa...");
                menu2();
                break;
            default: 
                console.log("Error: Opción no válida. Elige entre 0 y 5.");
        }
    }while(opcion !== 0);
}

function menu2(){
    let opcion;
    do{
        opcion = parseInt(prompt(`======== BIENVENIDO AL MENU2 DE ALUMNOS ==========
            \n1. Mostrar todos los alumnos
            \n2. Mostrar alumnos por grupo
            \n3. Agregar alumno a un grupo
            \n4. Eliminar un grupo
            \n5. Mostrar resumen de grupos
            \n6. Calcular media de un grupo
            \n7. Mostrar alumno con mejor nota de un grupo
            \n8. Porcentaje de suspensos en un grupo
            \n0. Salir  `));
        
        if(isNaN(opcion)){
            console.log("Error: Debes introducir un número válido."); 
            continue;
        }
        
        switch(opcion){
            case 1: 
                mostrarTodosAlumnos();
                break;
            case 2: 
                mostrarAlumnosPorGrupo();
                break;
            case 3: 
                agregarAlumnoAGrupo();
                break;
            case 4: 
                eliminarGrupo();
                break;
            case 5: 
                mostrarResumenGrupo();
                break;
            case 6: 
                calcularMediaGrupo();
                break;
            case 7: 
                verMejorNotaGrupo();
                break;
            case 8: 
                porcentajeSuspensosGrupo();
                break;
            case 0: 
                console.log("Saliendo del programa...");
                break;
            default: 
                console.log("Error: Opción no válida. Elige entre 0 y 5.");
        }
    }while(opcion !== 0);
}

function mostrarTodosAlumnos(){

    console.log("====Mostrando Datos de todos los Alumnos");
    console.log(aula1.mostrarDatos());
}

function mostrarAlumnosPorGrupo(){
    let alumnosAula = aula1.alumnos;
    for(let grupo of aula1.gruposDisponibles){
        console.log("===== " + grupo + " =====");
        for(let alum of alumnosAula){
            if(grupo == alum.grupo){
                console.log(alum.nombre);
            }
        }
    }
}

function agregarAlumnoAGrupo() {

    let grupoQueQuiere = prompt("¿A qué grupo lo quieres añadir?");
    if (!grupoQueQuiere || grupoQueQuiere.trim() === "" || !isNaN(grupoQueQuiere)) {
        console.log("Error: El grupo no puede estar vacío ni ser un número.");
        return; 
    }

    if (!aula1.gruposDisponibles.has(grupoQueQuiere)) {
        console.log("Error: Ese grupo no existe en el aula.");
        return; 
    }

    console.log("====== DATOS DE LOS ALUMNOS PARA AGREGAR ==========");
    for (let alum of aula1.alumnos) {
        console.log(alum.mostrarDatos()); 
    }

    let dniAlumnoAnadir = prompt("Introduce el DNI del Alumno a añadir al grupo:");
    if (!dniAlumnoAnadir) {
        console.log("Operación cancelada.");
        return; 
    }

    let dniLimpio = dniAlumnoAnadir.trim().toUpperCase();


    let alumnoEncontrado = false; 
    
    for (let alum of aula1.alumnos) {
        if (alum.dni === dniLimpio) {
            aula1.asignarGrupoAAlumno(alum, grupoQueQuiere);
            
            console.log(`¡Éxito! ${alum.nombre} ha sido asignado a ${grupoQueQuiere}.`);
            alumnoEncontrado = true;
            break; 
        }
    }

    if (!alumnoEncontrado) {
        console.log("Error: No se ha encontrado ningún alumno con ese DNI.");
    }
}

function matricularAlumno(){
    let alumnosParaMatricular = aula1.pedirDatos();
    aula1.insertarAlumnos(alumnosParaMatricular);
}

function mostrarDatosAlumnos(){
    if(!aula1.hayAlumnos()){
        console.log("No hay alumnos matriculados en el aula.");
        return;
    }
    let datos = aula1.mostrarDatos();
    console.log(datos);
}

function mostrarMediaAlumnos(){
    if(!aula1.hayAlumnos()){
        console.log("No hay alumnos matriculados en el aula.");
        return;
    }
    let medias = aula1.mediasNotas();
    console.log("Media de notas del aula: " + medias.toFixed(2));
}

function verAlumnosMejorNota(){
    if(!aula1.hayAlumnos()){
        console.log("No hay alumnos matriculados en el aula.");
        return;
    }
    let mejores = aula1.mejorNota();
    console.log("Alumnos con mejor nota:");
    console.table(mejores);
}

function verSuspensosYaprobados(){
    if(!aula1.hayAlumnos()){
        console.log("No hay alumnos matriculados en el aula.");
        return;
    }
    let suspensosYaprobados = aula1.mostrarSuspensosAprobados();
    console.log(suspensosYaprobados);
}
console.log("T04p01 - Ejercicio 02");
/*
1. 	Desarrolla un script que permita almacenar información de los alumnos de una asignatura. El script constará de dos ficheros: ejercicio0X_alumno.js y ejercicio0X_principal.js

*/
funcionPrueba2();
const Alumnos = [];
function funcionPrueba2(){ //Num alumnos no se pide se crea un aula por defecto y ya se piden opciones del aula
    let numAlumnosMaxAula = parseInt(prompt("Dime el numero de alumnos maximo que hay en un aula: "));
    let opcion;
    do{
        if(!isNaN(opcion) && !opcion == ""){
        opcion = parseInt(prompt(`======== BIENVENIDO AL MENU DE ALUMNOS ==========
            \n1. Crear Alumno 
            \n2. Matricular Alumnos
            \n3. Mostrar Datos alumnos
            \n4. Mostrar Media alumnos
            \n5. Ver alumnos con mejor nota
            \n6. Ver porcentaje alumnos suspensos y aprobados
            \n0. Salir  `));
        
            switch(opcion){
                case 1: crearAlumno();
                break;
                case 2: matricularAlumno();
                break;
                case 3: mostrarDatosAlumnos();
                break;
                case 4: mostrarMediaAlumnos();
                break;
                case 5: verAlumnosMejorNota();
                break;
                case 6: verSuspensosYaprobados();
                break;
                case 0: "Saliendo del programa...";
                break;
                default: "Error en el menu Alumnos";
            }
        }else{
            console.log("Error al introducir una opcion"); 
        }
    }while(opcion != 0);
}
function crearAlumno(){

}

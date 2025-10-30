console.log("T04p01 - Ejercicio 01");
/*
1. 	Desarrolla un script que permita almacenar información de los alumnos de una asignatura. El script constará de dos ficheros: ejercicio0X_alumno.js y ejercicio0X_principal.js

*/
function funcionPrueba1(){
    const Alumno1 = new Alumno("Miguel", new Date('2003-03-13'), "12345678A", "h", 5.45, 6.25,4.6);
    const Alumno2 = new Alumno("Javier",new Date('1997-01-23'),"34567421A", "h",  8.50, 6.25, 9.25 );

    let edadAlumno = Alumno1.calcularEdad();
    console.log("Edad: " + edadAlumno);
    let notaFinal= Alumno1.calcularNota();
    console.log(notaFinal);
    let info = Alumno1.mostrarInformacion();
    console.log(info);
    Alumno1.cambiarNotas(7, 8, 10);
    let infoDespues = Alumno1.mostrarInformacion();
    console.log(infoDespues);

    let compararcionNotas = Alumno1.comparar(Alumno2);
    console.log(compararcionNotas);

    let aprobadoOno = Alumno1.estaAprobado();
    console.log(aprobadoOno);
}
funcionPrueba1();
//ME FALTA EL GET DE NOTA FINAL Y DONDE LA CALCULAR EDAD NO HAE FALTA HACERLO POR QUE YA SE HACE DENTRO DEL CONSTRUCTOR
//PASAR LA FECHA COMO STRING NO COMO OBJETO DATE ESO SE HACE DENTRO DEL OBJETO ALUMNO
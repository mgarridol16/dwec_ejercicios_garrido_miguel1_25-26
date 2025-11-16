console.log("T04p01 - Ejercicio 02");
/*
1. 	Desarrolla un script que permita almacenar información de los alumnos de una asignatura. El script constará de dos ficheros: ejercicio0X_alumno.js y ejercicio0X_principal.js

*/
function Aula(numMaximoAlumnos, idAula, descripcionAula, curso) {
    this._alumnos = [];
    this._numAlumnosAula = 0;
    this.numMaximoAlumnos = numMaximoAlumnos;
    this._idAula = idAula;
    this.descripcionAula = descripcionAula;
    this._curso = curso;

    this.haySitioAlumnos = function () {
        if (this.numAlumnosAula <= this.numMaximoAlumnos) {
            return true;
        } else {
            return false;
        }
    };
    this.hayAlumnos = function () {
        if (this.numAlumnosAula > 0) {
            return true;
        } else {
            return false;
        }
    };
    this.pedirDatosUnAlumno = function () {
        let nombre, fechaNacimiento, dni, sexo, nota1, nota2, nota3;
        const regexFecha = /^\d{4}-\d{2}-\d{2}$/;
        const regexDNI = /^\d{8}[A-Za-z]$/;
        do {
            nombre = prompt("Dime el nombre del Alumno: ");
        } while (!nombre || nombre.trim() === "");
        do {
            fechaNacimiento = prompt("Dime la fecha de nacimiento (YYYY-MM-DD): ");
        } while (!regexFecha.test(fechaNacimiento));
        do {
            dni = prompt("Dime el DNI del Alumno (ej: 12345678A): ");
        } while (!regexDNI.test(dni));
        do {
            sexo = prompt("Dime tu sexo (h - m): ");
            if (sexo) sexo = sexo.toLowerCase().trim();
        } while (sexo !== 'h' && sexo !== 'm');

        do {
            nota1 = parseFloat(prompt("Dime tu primera nota: "));
        } while (isNaN(nota1) || nota1 < 0 || nota1 > 10);
        do {
            nota2 = parseFloat(prompt("Dime tu segunda nota: "));
        } while (isNaN(nota2) || nota2 < 0 || nota2 > 10);
        do {
            nota3 = parseFloat(prompt("Dime tu tercera nota: "));
        } while (isNaN(nota3) || nota3 < 0 || nota3 > 10);

        const alumnoUno = new Alumno(nombre, fechaNacimiento, dni, sexo, nota1, nota2, nota3);
        return alumnoUno;
    };
    this.pedirDatos = function () {
        let numAlumnos = parseInt(prompt("Dime el numero de Alumnos que vas a matricular: "));
        let nuevosAlumnos = [];
        if (isNaN(numAlumnos) || numAlumnos <= 0) {
            console.log("Número de alumnos no válido.");
            return nuevosAlumnos;
        }
        if (this.haySitioAlumnos()) {
            let huecosLibres = this.numMaximoAlumnos - this.numAlumnosAula;
            if (numAlumnos <= huecosLibres) {
                for (let i = 0; i < numAlumnos; i++) {
                    nuevosAlumnos.push(this.pedirDatosUnAlumno());
                }
                return nuevosAlumnos;
            } else {
                console.log("No puedes añadir " + numAlumnos + " alumnos. Solo hay " + huecosLibres + " huecos libres.");
                return nuevosAlumnos;
            }
        } else {
            console.log("No hay mas sitio en el aula. El aula está llena.");
            return nuevosAlumnos;
        }
    };
    this.insertarAlumnos = function (alumnosAInsertar) {
        this._alumnos = this._alumnos.concat(alumnosAInsertar);
        this._numAlumnosAula += alumnosAInsertar.length;
        console.log("Alumnos añadidos al aula correctamente");
    };
    this.mostrarDatos = function () {
        let info = ""; 
        for (let alum of this.alumnos) {
            info += `--- Ficha del Alumno ---\n` + 
                `Nombre: ${alum.nombre}\n` +
                `DNI: ${alum.dni}\n` +
                `Fecha Nacimiento: ${alum.fecha_Nacimiento}\n` +
                `Edad: ${alum.edad}\n` +
                `Sexo: ${alum.sexo}\n` +
                `Notas: ${alum.nota1}, ${alum.nota2}, ${alum.nota3}\n` +
                `Nota Final: ${alum.notaFinal.toFixed(2)}\n\n`; 
        }
        return info;
    };
    this.mediasNotas = function () {
        let contadorNotas = 0;
        let sumaNotas = 0;


        for (let alum of this.alumnos) {
            contadorNotas++;
            sumaNotas += alum.notaFinal;
        }
        let mediaNotasAulas = sumaNotas / contadorNotas;
        return mediaNotasAulas;
    };
    this.mejorNota = function () {
        let notaMaxima = 0;
        let mejoresAlumnos = [];
        for (let alum of this.alumnos) {
            if (alum.notaFinal > notaMaxima) {
                notaMaxima = alum.notaFinal;
                mejoresAlumnos = [alum];
            } else if (alum.notaFinal == notaMaxima) {
                mejoresAlumnos.push(alum);
            }
        }
        return mejoresAlumnos;
    };
    this.porcentajeSuspensos = function () {
        let numeroAlumnos = 0;
        let alumnosSuspensos = 0;

        for (let alum of this.alumnos) {
            numeroAlumnos++;
            if (alum.notaFinal < 5) {
                alumnosSuspensos++;
            }
        }
        let porcentajeSuspensos = (alumnosSuspensos * 100) / numeroAlumnos;
        return porcentajeSuspensos;
    };
    this.mostrarSuspensosAprobados = function () {
        let porcentajeSuspensos = this.porcentajeSuspensos();
        let porcentajeAprobados = 100 - porcentajeSuspensos;
        let cadenaResult = "Porcentaje de Alumnos Aprobados: " + porcentajeAprobados.toFixed(2) +
            "% | Porcentaje de Alumnos suspensos: " + porcentajeSuspensos.toFixed(2) + "%";
        return cadenaResult;
    };

    Aula.prototype.gruposDisponibles = new Set(["Grupo1", "Grupo2"]);

    Aula.prototype.asignarGrupoAAlumno = function (AlumnoAsignar, grupo){
        for (let alum of this.alumnos){
            if(alum.dni == AlumnoAsignar.dni){
                if(this.gruposDisponibles.has(grupo)){
                    alum.grupo = grupo;
                }
                return;
            }
        }
    }

    Aula.prototype.crearNuevoGrupo = function (nombreGrupo){
            this.gruposDisponibles.add(nombreGrupo);
    }

};

Object.defineProperty(Aula.prototype, "alumnos", {
    get: function () {
        return this._alumnos;
    },
    set: function (alumnos) {
        this._alumnos = alumnos;
    }
});
Object.defineProperty(Aula.prototype, "numAlumnosAula", {
    get: function () {
        return this._numAlumnosAula;
    },
    set: function (numAlumnosAula) {
        this._numAlumnosAula = numAlumnosAula;
    }
});
Object.defineProperty(Aula.prototype, "numMaximoAlumnos", {
    get: function () {
        return this._numMaximoAlumnos;
    },
    set: function (numMaximoAlumnos) {
        this._numMaximoAlumnos = numMaximoAlumnos;
    }
});
Object.defineProperty(Aula.prototype, "idAula", {
    get: function () {
        return this._idAula;
    },
    set: function (idAula) {
        this._idAula = idAula;
    }
});

Object.defineProperty(Aula.prototype, "descripcionAula", {
    get: function () {
        return this._descripcionAula;
    },
    set: function (descripcionAula) {
        this._descripcionAula = descripcionAula;
    }
});
Object.defineProperty(Aula.prototype, "curso", {
    get: function () {
        return this._curso;
    },
    set: function (curso) {
        this._curso = curso;
    }
});


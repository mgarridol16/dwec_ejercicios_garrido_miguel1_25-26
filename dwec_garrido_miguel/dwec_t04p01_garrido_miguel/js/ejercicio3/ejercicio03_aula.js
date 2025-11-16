console.log("T04p01 - Ejercicio 03 Aula");

function Aula(numMaximoAlumnos, idAula, descripcionAula) {
    this._alumnos = [];
    this._numAlumnosAula = 0;
    this.numMaximoAlumnos = numMaximoAlumnos;
    this._idAula = idAula;
    this.descripcionAula = descripcionAula;

    let cursoChar = idAula.slice(-1);
    this._curso = parseInt(cursoChar);

    this.haySitioAlumnos = function () {
        return this.numAlumnosAula < this.numMaximoAlumnos;
    };

    this.hayAlumnos = function () {
        return this.numAlumnosAula > 0;
    };

    this.pedirDatosUnAlumno = function () {
        let nombre, fechaNacimiento, dni, sexo;
        const regexFecha = /^\d{4}-\d{2}-\d{2}$/;
        const regexDNI = /^\d{8}[A-Za-z]$/;

        do {
            nombre = prompt("Dime el nombre del Alumno: ");
        } while (!nombre || nombre.trim() === "");

        do {
            dni = prompt("Dime el DNI del Alumno (ej: 12345678A): ");
        } while (!regexDNI.test(dni));


        const alumnoUno = new Alumno(
            dni,
            nombre
        );
        return alumnoUno;
    };

    // Inserta alumnos en el array del aula
    this.insertarAlumnos = function (alumnosAInsertar) {
        if (!Array.isArray(alumnosAInsertar)) {
            alumnosAInsertar = [alumnosAInsertar];
        }
        if (alumnosAInsertar.length === 0) return;

        this._alumnos = this._alumnos.concat(alumnosAInsertar);
        this._numAlumnosAula += alumnosAInsertar.length;
        console.log("Alumnos añadidos al aula correctamente");
    };


    this.mediasNotas = function () {
        let contadorAlumnos = 0;
        let sumaNotasMedias = 0;

        for (let alum of this.alumnos) {
            contadorAlumnos++;
            sumaNotasMedias += alum.notaFinal;
        }
        if (contadorAlumnos === 0) return 0;
        let mediaNotasAulas = sumaNotasMedias / contadorAlumnos;
        return mediaNotasAulas;
    };

    this.mejorNota = function () {
        let notaMaxima = -1;
        let mejoresAlumnos = [];
        for (let alum of this.alumnos) {
            if (alum.notaFinal > notaMaxima) {
                notaMaxima = alum.notaFinal;
                mejoresAlumnos = [alum];
            } else if (alum.notaFinal === notaMaxima && notaMaxima > -1) {
                mejoresAlumnos.push(alum);
            }
        }
        return mejoresAlumnos;
    };

    this.mostrarDatos = function () {
        let info = "";
        if (this.alumnos.length === 0) {
            return "No hay alumnos matriculados en esta aula.";
        }

        for (let alum of this.alumnos) {
            info +=
                `--- Ficha del Alumno ---\n` +
                `Nombre: ${alum.nombre}\n` +
                `DNI: ${alum.dni}\n` +
                // ✅ Usa el getter 'notaFinal' que calcula la media del Map
                `Nota Final Media: ${alum.notaFinal.toFixed(2)}\n\n`;
        }
        return info;
    };

}


Object.defineProperty(Aula.prototype, "alumnos", {
    get: function () {
        return this._alumnos;
    },
    set: function (alumnos) {
        this._alumnos = alumnos;
    },
});
Object.defineProperty(Aula.prototype, "numAlumnosAula", {
    get: function () {
        return this._numAlumnosAula;
    },
    set: function (numAlumnosAula) {
        this._numAlumnosAula = numAlumnosAula;
    },
});
Object.defineProperty(Aula.prototype, "numMaximoAlumnos", {
    get: function () {
        return this._numMaximoAlumnos;
    },
    set: function (numMaximoAlumnos) {
        this._numMaximoAlumnos = numMaximoAlumnos;
    },
});
Object.defineProperty(Aula.prototype, "idAula", {
    get: function () {
        return this._idAula;
    },
    set: function (idAula) {
        this._idAula = idAula;
    },
});
Object.defineProperty(Aula.prototype, "descripcionAula", {
    get: function () {
        return this._descripcionAula;
    },
    set: function (descripcionAula) {
        this._descripcionAula = descripcionAula;
    },
});
Object.defineProperty(Aula.prototype, "curso", {
    get: function () {
        return this._curso;
    },
    set: function (curso) {
        this._curso = curso;
    },
});

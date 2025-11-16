console.log("T04p01 - Ejercicio 03 Alumno");

function Alumno(dni, nombre) {
    this._dni = dni;
    this._nombre = nombre;

    this._asignaturas = new Map();

}


// Matrícula: Añade la asignatura (referencia original) al Map
Alumno.prototype.insertarAsignatura = function (asignatura) {
    this._asignaturas.set(asignatura, undefined);

    // Matrícula Cruzada (para que el profesor vea al alumno)
    // Asumimos que Asignatura.js tiene el array 'alumnos'
    if (asignatura.alumnos) {
        asignatura.alumnos.push(this);
    }
};

// Insertar Nota: Actualiza el valor de la asignatura en el Map
Alumno.prototype.ponerNota = function (asignatura, nota) {
    // Comprueba si el alumno tiene esa asignatura antes de poner la nota
    if (this._asignaturas.has(asignatura)) {
        this._asignaturas.set(asignatura, Number(nota));
        return true;
    }
    return false; // No tiene la asignatura
};





Object.defineProperty(Alumno.prototype, 'notaFinal', {
    get() {
        let sumaNotas = 0;
        let contador = 0;
        for (const nota of this._asignaturas.values()) {
            if (nota !== undefined && !isNaN(nota)) {
                sumaNotas += Number(nota);
                contador++;
            }
        }
        return contador === 0 ? 0 : sumaNotas / contador;
    }
});


Object.defineProperty(Alumno.prototype, 'asignaturaInfo', {
    get() {
        return this._asignaturas;
    }
});

Object.defineProperty(Alumno.prototype, "asignaturas", {
    get: function () {
        return Array.from(this._asignaturas.keys());
    },
});

Object.defineProperty(Alumno.prototype, "nombre", {
    get: function () {
        return this._nombre;
    },
    set: function (valor) {
        this._nombre = valor;
    },
});
Object.defineProperty(Alumno.prototype, "dni", {
    get: function () {
        return this._dni;
    },
    set: function (valor) {
        this._dni = valor;
    },
});

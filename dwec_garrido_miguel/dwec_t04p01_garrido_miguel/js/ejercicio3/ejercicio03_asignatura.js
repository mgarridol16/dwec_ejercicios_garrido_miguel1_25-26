console.log("T04p01 - Ejercicio 03 Asignatura");

const asignatura1 = {
    _nombreAsignatura: "Programación",
    _curso: 2,
    _tipo: "obligatoria",
    _alumnos: [],
};
const asignatura2 = {
    _nombreAsignatura: "Asignatura2",
    _curso: 2,
    _tipo: "obligatoria",
    _alumnos: [],
};

const asignatura3 = {
    _nombreAsignatura: "Asignatura3",
    _curso: 2,
    _tipo: "optativa",
    _alumnos: [],
};

const asignatura4 = {
    _nombreAsignatura: "Asignatura4",
    _curso: 2,
    _tipo: "optativa",
    _alumnos: [],
};

//OTRO CURSO

const asignatura1_otroCurso = {
    _nombreAsignatura: "Mates",
    _curso: 3,
    _tipo: "obligatoria",
    _alumnos: [],
};

const asignatura2_otroCurso = {
    _nombreAsignatura: "Ciencias",
    _curso: 3,
    _tipo: "optativa",
    _alumnos: [],
};

function GetterSetterCurso(obj) {
    Object.defineProperty(obj, "curso", {
        get: function () {
            return this._curso;
        },
        set: function (nuevoValor) {
            this._curso = nuevoValor;
        },
        enumerable: true,
        configurable: true,
    });
}

function GetterSetterAsignatura(obj) {
    Object.defineProperty(obj, "nombreAsignatura", {
        get: function () {
            return this._nombreAsignatura;
        },
        set: function (nuevoValor) {
            this._nombreAsignatura = nuevoValor;
        },
        enumerable: true,
        configurable: true,
    });
}

function GetterSetterTipo(obj) {
    Object.defineProperty(obj, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (nuevoValor) {
            this._tipo = nuevoValor;
        },
        enumerable: true,
        configurable: true,
    });
}

function GetterSetterAlumnos(obj) {
    Object.defineProperty(obj, "alumnos", {
        get: function () {
            return this._alumnos;
        },
        set: function (nuevoValor) {
            this._alumnos = nuevoValor;
        },
        enumerable: true,
        configurable: true,
    });
}

function addMostrarInfo(obj) {
    Object.defineProperty(obj, "mostrarInfo", {
        value: function () {
            console.log(`Asignatura: ${this.nombreAsignatura}, Curso: ${this.curso}`);
        },
        enumerable: false,
    });
}


const listaAsignaturas = [
    asignatura1,
    asignatura2,
    asignatura3,
    asignatura4,
    asignatura1_otroCurso,
    asignatura2_otroCurso,
];
listaAsignaturas.forEach(GetterSetterCurso);
listaAsignaturas.forEach(GetterSetterAsignatura);
listaAsignaturas.forEach(GetterSetterTipo);
listaAsignaturas.forEach(addMostrarInfo);
listaAsignaturas.forEach(GetterSetterAlumnos);

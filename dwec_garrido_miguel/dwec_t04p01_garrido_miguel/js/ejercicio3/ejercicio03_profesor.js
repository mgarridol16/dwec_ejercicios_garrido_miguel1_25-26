console.log("T04p01 - Ejercicio 03 Profesor");

//HACER UNO DE PROFESOR POR EJEMPLO DE NOMBRE COMPLETO Y ASIGNATURA Y RELLENARLO CON EL BIND COMO HEMOS VISTO EN CLASE PARA PROBAR
const profesor1 = {
    _nombreCompleto: "Miguel Garrido",
    _correoElectronico: "miguelProfe@mail.com",
    _asignaturas: []
};

const profesor2 = {
    _nombreCompleto: "Carlos Leon",
    _correoElectronico: "carlosProfe@mail.com",
    _asignaturas: []
};

const profesor3 = {
    _nombreCompleto: "Gonzalo Castellanos",
    _correoElectronico: "gonzaloProfe@mail.com",
    _asignaturas: []
};

const profesor4 = {
    _nombreCompleto: "Javier Castellanos",
    _correoElectronico: "javierProfe@mail.com",
    _asignaturas: []
};



const listaProfesores = [profesor1, profesor2, profesor3, profesor4];
listaProfesores.forEach(GetterSetterNombre);
listaProfesores.forEach(GetterSetterCorreo);
listaProfesores.forEach(GetterSetterAsignaturas);


//PROFESOR BIND PARA MOSTRAR NOMBRE
function mostrarNombre() {
    console.log(this.nombreCompleto);
}


const profesorBind = mostrarNombre.bind(profesor1);


profesorBind();

function GetterSetterNombre(obj) {
    Object.defineProperty(obj, "nombreCompleto", {
        get: function () {
            return this._nombreCompleto;
        },
        set: function (nuevoValor) {
            this._nombreCompleto = nuevoValor;
        },
        enumerable: true,
        configurable: true
    });
}

function GetterSetterCorreo(obj) {
    Object.defineProperty(obj, "correoElectronico", {
        get: function () {
            return this._correoElectronico;
        },
        set: function (nuevoValor) {
            this._correoElectronico = nuevoValor;
        },
        enumerable: true,
        configurable: true
    });
}

function GetterSetterAsignaturas(obj) {
    Object.defineProperty(obj, "asignaturas", {
        get: function () {
            return this._asignaturas;
        },
        set: function (nuevoValor) {
            this._asignaturas = nuevoValor;
        },
        enumerable: true,
        configurable: true
    });
}

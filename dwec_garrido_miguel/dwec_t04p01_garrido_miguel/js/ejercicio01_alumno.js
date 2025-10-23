console.log("T04p01 - Ejercicio 01");
/*
1. 	Desarrolla un script que permita almacenar información de los alumnos de una asignatura. 
El script constará de dos ficheros: ejercicio0X_alumno.js y ejercicio0X_principal.js

*/
function Alumno(nombre, fecha_Nacimiento, dni, sexo, nota1, nota2, nota3) {
    this._nombre = nombre;
    this._fecha_Nacimiento = new Date(fecha_Nacimiento);
    this._dni = dni;
    this._sexo = sexo;
    this._nota1 = nota1;
    this._nota2 = nota2;
    this._nota3 = nota3;
    this._edad = this.calcularEdad();
    this._notaFinal = this.calcularNotaFinal();
}

Object.defineProperty(Alumno.prototype, "nombre", {
    get: function () {
        return $this._nombre;
    },
    set: function (nombre) {
        this._nombre = nombre;
    }
});
Object.defineProperty(Alumno.prototype, "dni", {
    get: function () {
        return $this._dni;
    },
    set: function (dni) {
        this._dni = dni;
    }
});

Object.defineProperty(Alumno.prototype, "fecha_Nacimiento", {
    get: function () {
        return $this._fecha_Nacimiento;
    },
    set: function (fecha) {
        this._fecha_Nacimiento = new Date(fecha);
    }
});

Object.defineProperty(Alumno.prototype, "sexo", {
    get: function () {
        return $this._sexo;
    },
    set: function (sexo) {
        this._sexo = sexo;
    }
});

Object.defineProperty(Alumno.prototype, "nota1", {
    get: function () {
        return $this._nota1;
    },
    set: function (nota) {
        this._nota1 = nota;
    }
});

Object.defineProperty(Alumno.prototype, "nota2", {
    get: function () {
        return $this._nota2;
    },
    set: function (nota) {
        this._nota2 = nota;
    }
});

Object.defineProperty(Alumno.prototype, "nota3", {
    get: function () {
        return $this._nota3;
    },
    set: function (nota) {
        this._nota3 = nota;
    }
});

Alumno.mostrarInformacion = function () {
    let info = "";
    for (let i in Alumno) {
        info += this._Alumno[i] + "\n ";
    }
    return info;
};

Alumno.calcularEdad = function () {
    let hoy = new Date();
    let fechaNaci = new Date(Alumno.prototype.fecha_Nacimiento);

    let edad = hoy.getFullYear() - fecha_Nacimiento.getFullYear();

    let mesActual = hoy.getMonth();
    let mesNacimiento = fechaNaci.getMonth();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < fechaNaci.getDate())) {
        edad--;
    }
    return edad;
};







//Set valida -> asigna o NULL
//Set()
//if get() == null sabes que esta mal el dni

//OTRA FORMA

//ANTES DE HACER UN SET HACES LA VALIDACION

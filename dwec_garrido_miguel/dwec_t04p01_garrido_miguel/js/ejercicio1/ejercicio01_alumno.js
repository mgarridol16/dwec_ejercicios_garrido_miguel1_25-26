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

    this.calcularEdad = function () {
        let hoy = new Date();
        let fechaNaci = this._fecha_Nacimiento; 

        let edad = hoy.getFullYear() - fechaNaci.getFullYear();

        let mesActual = hoy.getMonth();
        let mesNacimiento = fechaNaci.getMonth();

        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < fechaNaci.getDate())) {
            edad--;
        }
        return this._edad = edad;
    };

    this.calcularNota = function () {
        let nota = 0;
        nota = (this._nota1 + this._nota2 + this._nota3) / 3;
        return this._notaFinal = nota;
    };
    this._edad = this.calcularEdad();
    this._notaFinal = this.calcularNota();

}

Object.defineProperty(Alumno.prototype, "nombre", {
    get: function () {
        return this._nombre;
    },
    set: function (nombre) {
        this._nombre = nombre;
    }
});
Object.defineProperty(Alumno.prototype, "dni", {
    get: function () {
        return this._dni;
    },
    set: function (dni) {
        this._dni = dni;
    }
});

Object.defineProperty(Alumno.prototype, "fecha_Nacimiento", {
    get: function () {
        return this._fecha_Nacimiento;
    },
    set: function (fecha) {
        this._fecha_Nacimiento = new Date(fecha);
        this._edad = this.calcularEdad();
    }
});

Object.defineProperty(Alumno.prototype, "sexo", {
    get: function () {
        return this._sexo;
    },
    set: function (sexo) {
        this._sexo = sexo;
    }
});

Object.defineProperty(Alumno.prototype, "nota1", {
    get: function () {
        return this._nota1;
    },
    set: function (nota) {
        this._nota1 = nota;
    }
});

Object.defineProperty(Alumno.prototype, "nota2", {
    get: function () {
        return this._nota2;
    },
    set: function (nota) {
        this._nota2 = nota;
    }
});

Object.defineProperty(Alumno.prototype, "nota3", {
    get: function () {
        return this._nota3;
    },
    set: function (nota) {
        this._nota3 = nota;
    }
});

Alumno.prototype.mostrarInformacion = function () {
    let info = `--- Ficha del Alumno ---\n` +
        `Nombre: ${this._nombre}\n` +
        `DNI: ${this._dni}\n` +
        `Fecha Nacimiento: ${this._fecha_Nacimiento}\n` +
        `Edad: ${this._edad}\n` +
        `Sexo: ${this._sexo}\n` +
        `Notas: ${this._nota1}, ${this._nota2}, ${this._nota3}\n` +
        `Nota Final: ${this._notaFinal.toFixed(2)}`; 
    return info;
};

Alumno.prototype.cambiarNotas = function (nota1, nota2, nota3) {
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.calcularNota();
    console.log("Las notas han sido cambiadas ha: " + nota1 + " " + nota2 + " " + nota3);
}
Alumno.prototype.comparar = function(otraPersona){
    if(this._notaFinal > otraPersona._notaFinal){ 
        return 1;
    }else if(this._notaFinal < otraPersona._notaFinal){ 
        return -1;
    }else{
        return 0;
    }
}

Alumno.prototype.estaAprobado = function(){
    if(this._notaFinal >= 5){ 
        return true;
    }else{
        return false;
    }
}
//LOS METODOS DEL OBJETO ALUMNOS ES MEJOR QUE VALLAN DENTRO DE LA CLASE AL SER DEL OBJETO POR QUE A LA HORA DE EJECUTARLOS Y TODO NO TIENE QUE LLAMARLO Y TAL











//Set valida -> asigna o NULL
//Set()
//if get() == null sabes que esta mal el dni

//OTRA FORMA

//ANTES DE HACER UN SET HACES LA VALIDACION

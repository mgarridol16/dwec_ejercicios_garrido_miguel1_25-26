console.log("T02 - Ejercicio 11");

/**
Realizar un programa en javascript que calcule el factorial impar de un número entero. 
El factorial impar de un número n es el producto de todos los números naturales impares desde el 1 hasta n o n-1, 
dependiendo de si n es par o impar.  
Ejemplo:
5! = 5 x 3 x 1 = 15
10! = 9 x 7 x 5 x 3 x 1 = 945
La solución se deberá hacer de forma recursiva.

*/

let num = Number.parseInt(prompt("Dame un número: "));
if (isNaN(num)) {
    console.log("No es un numero");
    alert("No es un numero");
} else {
    let resultado = factorialImpar(num);
    function factorialImpar(num) {
        if (num % 2 === 0) {  //SI ES PAR LE QUITO UNO PARA HACERLO IMPAR
            num = num - 1;
        }
        if (num <= 1) {  //SI ES MENOR QUE UNO DEVUELVO UN 1 Y POR LO TANTO PARAMOS EL PROGRAMA
            return 1; //PARA QUE NO SIGA LLAMANDO 
        }
        return num * factorialImpar(num - 2); //HACEMOS EL BUCLE DE EL NUMERO MULTIPLICARLO POR LA LLAMADA A LA MISMA FUNCION PERO CON DOS NUMEROS MENOS PARA QUE SEA IMPAR
    }

    alert(resultado);
    console.log(resultado);

    //BAJA MULTIPLICANDO TODAS LAS CAJAS DE RETURN NUM * POR LA FUNCION Y LUEGO CUANDO TERMINA ESO SUBE MULTIPLICANDO TODOS LOS RESULTADOS Y AHI ES CUANDO CORTA

    //SERIA MEJOR CONTROLARLO CON UN DO WHILE PARA QUE PIDA OTRO NUMERO SI ISNAN Y ESO

    //SI ES PAR SERIA NUM -1 Y SI ES IMPAR SERIA NUM-2
}



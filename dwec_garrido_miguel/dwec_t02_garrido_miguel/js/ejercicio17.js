console.log("T02 - Ejercicio 17");
/*
Desarrolla un script que pida un número entero mayor que 0 y determine si es un número perfecto. 
Un número es perfecto si la suma de sus divisores propios (excluyendo el número en sí) es igual al número.
Debes validar que el número introducido sea un entero positivo y mayor que 0.
Los primeros ejemplos de números perfectos son el 6 (cuyos divisores son 1, 2 y 3, y 1 + 2 + 3 = 6) 
o el 28 (cuyos divisores son 1, 2, 4, 7 y 14, y 1 + 2 + 4 + 7 + 14 = 28).
 */


let num = Number(prompt("Introduce un numero entero mayor que 0: "));
if (isNaN(num) || num <=0 ||(!Number.isInteger(num))){
    console.error("Introduciste un numero no valido por lo cual se cierra el programa");
}

if(esNumeroPerfecto(num)){
    console.log("El numero introducido es un numero perfecto");
}else{
    console.error("El numero introducido no es un numero perfecto");
}


function esNumeroPerfecto(num){

    let divsiores = [];
    for(let i = 1; i < num; i++){
        if(num % i === 0){
            divsiores.push(i);
        }
    }
    let totalDiv = 0;
    for(let i = 0 ; i< divsiores.length; i++){
        totalDiv += divsiores[i];
    }
    if(num === totalDiv){
        return true;
    }else if (num !== totalDiv){
        return false;
    }
}
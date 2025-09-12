console.log("T02 - Ejercicio 02");
/**
 * NECESITAMOS PEDIR UN NUMERO Y COMPROBAR SI ES MULTIPLO DE 2 O DE 5 LO HAREMOS CON MODULO 
 * Y DEBEMOS COMPARARLO CON isNaN antes de que el usuario introduzca un numero osea sera antes del promt supongo
 * 
 */

let num1=Number(prompt("Dame un numero:"));
if(!(isNaN(num1))){
    if(num1%2==0 && num1%5==0){
        console.log(num1 + " Es multiplo de 2 y de 5");
        alert(num1 + " Es multiplo de 2 y de 5");
    }else if(num1%2==0){
        console.log(num1 + " Es multiplo de 2");
        alert(num1 + " Es multiplo de 2");
    }else if(num1%5==0){
        console.log(num1 + " Es multiplo de 5");
        alert(num1 + " Es multiplo de 5");
    }else{
        console.log(num1 +  "No es multiplo ni de 5 ni de 2");
        alert(num1 +  "No es multiplo ni de 5 ni de 2");
    }
}else{
    console.log(num1+ " No es un numero");
    alert(num1+ " No es un numero");
}

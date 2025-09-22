console.log("T03p01 - Ejercicio 09");

/*
Haz un script que pida al usuario cuántos números quiere introducir, 
después los introducirá en un array y finalmente mostrará el menor y el mayor. 
Para mostrar el menor y el mayor deberás hacer uso de los métodos "max()" y "min()" del objeto Math.
*/

let cuantosNum = Number(prompt("¿Cuantos numeros quieres introducir? :"));
let numeros = [];
for (let i=0; i<cuantosNum; i++){
    numeros.push(Number(prompt("Introduce un numero: ")));
}

let menor = Math.min(...numeros); //El operador ... toma un array y “lo desempaqueta”, es decir, separa cada elemento para que pueda ser usado individualmente.
let mayor = Math.max(...numeros);
console.log(menor);
console.log(mayor);
console.log("T02 - Ejercicio 08");

/**
Desarrolla un script que pida dos números enteros. 
El programa determinará cuál es el menor y mostrará todos los número que hay entre ellos y cuantos hay. 
El script tendrá una función para calcular cual es el menor de los dos: calcular_menor
 */


let num1= Number.parseInt(prompt("Dame un numero: "));
let num2= Number.parseInt(prompt("Dame otro numero: "));


let contador=0;
let numeros=[];
let mayor=0;

let menor=calcular_menor(num1,num2);
if(num1>menor){
    mayor=num1;
}else if(num2>menor){
    mayor=num2;
}else{
    mayor=num1 //serian los dos numeros iguales en este caso asique pongo por defecto el numero 1 mismo
}
if(num1===num2){
    console.log("Los numeros son iguales no habra ninguno entre ellos");
    alert("Los numeros son iguales no habra ninguno entre ellos");
}else{
for(let i=menor+1; i<mayor; i++){
    contador++;
    numeros.push(i);
}

console.log("Numeros entre ellos: "+ numeros);
alert("Numeros entre ellos: "+ numeros);
console.log("Cantidad de numeros: "+ contador);
alert("Cantidad de numeros: "+ contador);

}
function calcular_menor(num1, num2){
    let menor=0;
    if(num1>num2){
        menor=num2
    }else if(num2>num1){
        menor=num1
    }else{
        console.log("no hay ninguno mayor son iguales; cojo por defecto el uno pero es el mismo");
        menor=num1;
    }
    return menor;
}


console.log("T03p01 - Ejercicio 04");
/*
Elabora un script que lea una frase del usuario y una palabra. 
Después mostrará las veces que aparece dicha palabra en esa frase. 
Debes hacer uso de uno de los métodos del objeto String. 
Si la palabra no existe se mostrará un error.
*/
let frase = prompt("Introduce una frase: ");
let palabra = prompt("Dime una palabra para ver cuanto aparece: ");


let partes = frase.split(" ");
let palabras = partes.filter(p => p !== "" && p !== "\t");
//es un método de los arreglos que crea un nuevo arreglo con solo los elementos que cumplan una condición

let contador = 0;
for (let i = 0; i < palabras.length; i++) {
    if(palabra === palabras[i]) contador ++;
    console.log("Palabra " + (i + 1) + ": " + palabras[i]);
}
if(contador < 1){
    console.error("La palabra introducida no existe");
}else {
    console.log("La palabra "+ palabra + " Aparece: "+ contador);
}


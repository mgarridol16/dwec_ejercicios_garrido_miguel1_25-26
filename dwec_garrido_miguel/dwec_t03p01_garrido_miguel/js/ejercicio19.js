console.log("T03p01 - Ejercicio 19");

/*
Determina en un folio qué hace este script. 
Después comprueba que has acertado, haciendo uso de un depurador
*/

let a = ["Sung", "Luffy", "Goku", "Sakura", "Asta", "Kenshin", "Meliodas"];
let b = new Date();                
let c = a[b.getDay() % a.length]; //Va a coger la a un elemento del array que cogera un numero dentro y b.getdat da un numero del 0 al 6 0 domingo | VA A DEVOLVER LO MISMO QUE ESTA PIDIENDO EL DIA DE HOY SIEMPRE AUNQUE LO HALLA LIADO ASI NO TIENE SENTIDO
let d = 0;
for (let i = 0; i < c.length; i++) { //va a recorrer la cadena caracter por caracter en funcion de lo que te salio 
    let e = Math.floor(Math.random() * c.length); //te da un numero aleatorio de la cadena de 0 a 1
    let f = c.charAt(e); //Coge si ha caido en 2 la T por ejemplo 
    if (i % 2 === 0) { //si es par el caracter
        f = f.toUpperCase(); //El caracter aleatorio de f lo pone en mayuscula
        c = c.slice(0, i) + f + c.slice(i + 1); //El primero te corta el array de 0 A el indice que te toco || te devuelve de una posicion hasta el final osea el resto de la cadena
    }//Te remplaza esa palabra que ha salido por la letra mayuscula
    if ("aeiou".includes(f.toLowerCase())) { //Si la f es una voca
        d += Math.pow(2, i); //
    }
    console.log(f);
}
console.log(d.toFixed(0));
console.log(c);
console.log(e); //No existe fuera por que esta dentro del for y luego desaparece 


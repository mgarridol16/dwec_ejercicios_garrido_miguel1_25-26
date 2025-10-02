console.log("T03p01 - Ejercicio 12");

/*
Elabora un script que simule el sorteo del cupón diario de la once sin número de serie. 
El número premiado se obtiene de cinco bombos: unidades, decenas, centenas, unidades de millar y decenas de millar. 
Cada bombo dará un número entero entre 0 y 9. Haz uso del método "random()" del objeto Math. 
Define la función: "generar_numeros_entre_0_9()" que no recibe nada y devuelve un número entre 0 y 9.
*/
let unidades, decenas, centenas, unidadesMillar, decenasMillar;

for (let i = 0; i < 5; i++){
    if(i == 0){
        unidades = generar_numeros_entre_0_9();
    }
    if(i == 1){
        decenas = generar_numeros_entre_0_9();
    }
    if(i == 2){
        centenas = generar_numeros_entre_0_9();
    }
    if(i == 3){
        unidadesMillar = generar_numeros_entre_0_9();
    }
    if(i == 4){
        decenasMillar = generar_numeros_entre_0_9();
    }
}
let cupon = unidades.toString() + decenas.toString() + centenas.toString() + unidadesMillar.toString() + decenasMillar.toString();

function generar_numeros_entre_0_9(){
    let numeroRandom = Number.parseInt((Math.random() * (9 - 0 + 1)+ 0));
    return numeroRandom;
}


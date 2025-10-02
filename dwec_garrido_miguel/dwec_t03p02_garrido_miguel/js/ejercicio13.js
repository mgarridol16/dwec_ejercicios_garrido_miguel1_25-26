console.log("T03p01 - Ejercicio 13");

/*
¿Cómo se resolvería el ejercicio anterior definiendo un nuevo método en el objeto Math que se llame "random2(lim_inf, lim_sup)"?
*/
let unidades, decenas, centenas, unidadesMillar, decenasMillar;
let lim_inf = 0;
let lim_sup = 9;
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


function random2(lim_inf, lim_sup){
    let numeroRandom = Number.parseInt((Math.random() * (lim_sup - lim_inf + 1)+ lim_inf));
    return numeroRandom;
}


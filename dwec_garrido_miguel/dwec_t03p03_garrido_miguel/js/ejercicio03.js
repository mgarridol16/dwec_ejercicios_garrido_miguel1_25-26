console.log("T03p03 - Ejercicio 03");
/*

*/

const array = [1,2,3,4,5,6,7,8];

let ordenadoManual = cambiarManual(array);

let ordenadoAutomatico = cambiarAuto(array);

mostrarArray(ordenadoManual);
mostrarArray(ordenadoAutomatico);

function cambiarManual(array){
    const arrayCambiado =[];
    for(let i = array.length; i > 0; i--){
        arrayCambiado.push(i);
    }
    return arrayCambiado;
}

function cambiarAuto(array){
    return array.reverse();
}
function mostrarArray(array){
    console.log("Mostrando Array: ");
    for(let i of  array){
        console.log(i);
    }
}




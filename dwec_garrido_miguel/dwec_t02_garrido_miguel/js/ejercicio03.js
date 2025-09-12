console.log("T02 - Ejercicio 03");
/**
 * NECESITO UN AÑO PEDIRLO POR PROMT I CON ELSE IF IR COMPROBANDO QUE CUMPLA ESAS CARACTERISTICAS DE ABAJO Y QUE EL NUMERO INTRODUCIDO ESTE ENTRE 0 Y EL AÑO ACTUAL
 * 
 */

let anio=Number(prompt("Introduce un año: (debe ser entre 0 y el año actual)"));
if(anio=>0 && anio<=Date()){
function esBisiesto(anio){
    if(anio/4!==0){
        return false;
    }else if(anio/100==0 && anio/400!==0){
        return false;
    }else if(anio/400==0){
        return true;
    }else{
        return true
    }
}
if(esBisiesto(anio)){
    console.log("El anio "+ anio +" Si es bisiesto");
    alert("El anio "+ anio +" Si es bisiesto");
}else if(!esBisiesto(anio)){
    console.log("El anio "+ anio + " No es bisiesto")
    alert("El anio "+ anio + " No es bisiesto");
}
}else{
    console.log("El anio debe estar entre 0 y el anio actual, no es valido");
    alert("El anio debe estar entre 0 y el anio actual, no es valido");
}
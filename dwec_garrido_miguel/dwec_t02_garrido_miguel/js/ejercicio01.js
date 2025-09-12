console.log("T02 - Ejercicio 01");
/**
 * NOS PIDE QUE PIDAMOS AL USUARIO 3 NUMEROS ENTONCES VOY A CREAR 3 VARIABLES Y TENEMOS QUE CALCULAR LA MEDIA LOS SUMAREMOS Y LO DIVIDEMOS ENTRE 3
 * Y CON UN IF ELSE HAREMOS LO DE SUSPENSO Y ESO SI LA MEDIA SALE CON TAL NUMERO
 */
let num1= parseFloat(prompt("Dame un numero:"));
let num2= parseFloat(prompt("Dame otro numero:"));
let num3= parseFloat(prompt("Dame otro tercer numero:"));
console.log(num1,num2,num3);

let media= (num1 + num2 + num3)/3;

if(media<5){
    console.log("La media es: "+ media+ " SUSPENSO");
    alert("La media es: "+ media+ " SUSPENSO");
}else if(media>4 && media<7){
    console.log("La media es: "+ media+ " APROBADO");
    alert("La media es: "+ media+ " APROBADO");
}else if(media>6 && media<8.5){
    console.log("La media es: "+ media+ " NOTABLE"); 
    alert("La media es: "+ media+ " NOTABLE");
}else if(media>8&& media<=10){
    console.log("La media es: "+ media+ " SOBRESALIENTE");
    alert("La media es: "+ media+ " SOBRESALIENTE");
}

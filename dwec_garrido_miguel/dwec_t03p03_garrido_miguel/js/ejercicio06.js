console.log("T03p03 - Ejercicio 06");
/*

*/

const arrayNombres = ["Miguel", "Hugo", "Mireia", "Miguel", "Esther", "Gonzalo", "Javier", "Javier", "Yolanda", "Yako"];
const numerosTelefonos = ["612345678", "698765432","623458901", "634789012", "645890123","667012345","678123456", "689234567" ,"689234523"];

const personas = new Map();


for (let i = 0; i < arrayNombres.length; i++){
    const nombre = arrayNombres[i].toLowerCase();
    const telefono = numerosTelefonos[i];

    if(personas.has(nombre)){
        personas.get(nombre).push(telefono);
    } else {
        personas.set(nombre, [telefono]);
    }
}

let pedidaUsuario = prompt("¿Qué persona quieres buscar?").toLowerCase();

if(isNaN(pedidaUsuario)){
    buscarUsuario(pedidaUsuario);
} else {
    console.log("El usuario introducido no puede ser un número");
}

function buscarUsuario(nombre) {
    if (personas.has(nombre)) {
        const telefonos = personas.get(nombre);
        if (telefonos.length > 0) {
            console.log(`Teléfonos encontrados con nombre ${nombre}: ${telefonos.join(", ")}`);
        } else {
            console.log(`${nombre} no tiene números de teléfono asociados`);
        }
    } else {
        console.log("La persona buscada no existe");
    }
}


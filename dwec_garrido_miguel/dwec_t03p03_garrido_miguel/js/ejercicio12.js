console.log("T03p0X - Ejercicio 12");

/*
Crea un script que permita agregar listas de tareas
(por hacer y hechas -los estados posibles de una tarea preferiblemente se almacenarán en un set-) y agruparlas en categorías.
El programa debe hacer lo siguiente solo usando arrays.
No se pueden usar objetos definidos por el usuario.
No se permite usar {} ni crear clases o constructores.
*/

const estadosPosibles = ["todo", "done"];
/*const categorias = [
    ["compra"],
    ["regalos", ["libro", "todo"], ["disco", "done"], ["zapatillas", "done"]],
    ["maleta", ["bolsa de aseo", "todo"]]
];
*/
const categorias = [];

const pilaDeshacer = [];


if (categorias.length === 0) {
    let nombreCategoria = prompt("Dime el nombre de una categoria");
    categorias.push([nombreCategoria]);

    let opcionSioNo = prompt("¿Deseas ingresar la primera tarea en la categoria creada? [si(1) | no(0)]");
    let opcionSioNo2;

    if (opcionSioNo == 1) {
        let nuevaTarea = prompt("¿Como se llama la tarea que quires crear?");
        const categoriaSeleccionada = categorias[categorias.length - 1];
        categoriaSeleccionada.push([nuevaTarea, "todo"]);



    } else if (opcionSioNo == 0) {
        console.log("Vale no introduciremos una primera tarea");
    } else {
        console.log("Error al introducir opcion");
    }

    do{
    opcionSioNo2 = prompt("¿Desea crear una nueva categoria? [si(1) | no(0)]");
    if (opcionSioNo2 == 1) {
            let nuevaCategoria = prompt("Dime el nombre de la nueva categoria a crear");
            categorias.push([nuevaCategoria]);

    }else{
        menu1(categorias);
        break;
    }
}while(opcionSioNo2 !== 0);
} else {
    // EMPEZAMOS MENU 1
    menu1(categorias);
}

/* ========================
   MENU 1
======================== */
function menu1(categorias) {
    let opcMenu1;

    do {
        opcMenu1 = Number(prompt(`
Menú 1
==========
1. Listar categorias
2. Añadir nueva Categoría
3. Borrar categoría
4. Salir

Elige una opción:`));

        switch (opcMenu1) {
            case 1:
                menu2(categorias);
                break;
            case 2:
                añadirNuevaCategoria(categorias);
                break;
            case 3:
                borrarCategoria(categorias);
                break;
            case 4:
                console.log("Saliendo del menu 1...");
                break;
            default:
                console.log("Error en menu 1");
        }
    } while (opcMenu1 !== 4);
}

/* ========================
   MENU 2
======================== */
function menu2(categorias) {
    let texto = "Menú 2 \n=======\n";
    let categoriasListadas = listarCategoriasMenu2(categorias);
    let contador = 0;

    for (let i = 0; i < categoriasListadas.length; i++) {
        contador++;
        texto += "\n" + contador + ". " + categoriasListadas[i][0];
    }

    texto += "\n" + (contador + 1) + ". Atrás";

    let opcMenu2 = Number(prompt(texto + "\nElige una opcion: "));

    if (opcMenu2 === (contador + 1)) {
        console.log("Volviendo al menu1 ");
        return;
    }

    if (opcMenu2 > 0 && opcMenu2 <= contador) {
        let categoriaSeleccionadaMenu2 = categoriasListadas[opcMenu2 - 1];
        if (categoriaSeleccionadaMenu2 && categoriaSeleccionadaMenu2[0]) {
            console.log(`Has seleccionado: ${categoriaSeleccionadaMenu2[0]}`);
            menu3(categoriaSeleccionadaMenu2, categorias);
        } else {
            console.log("Error: categoría no encontrada");
        }
    } else {
        console.log("Opcion invalida del menu. Volviendo al menu 1");
    }
}

/* ========================
   MENU 3
======================== */
function menu3(categoriaSeleccionada, categorias) {
    let texto = "Menú 3. Categoía " + categoriaSeleccionada[0] + "\n===========\n";
    let tareasCategoria = listarTareasMenu2(categoriaSeleccionada);
    let contador = 0;

    for (let i = 0; i < tareasCategoria.length; i++) {
        contador++;
        texto += "\n" + contador + ". " + tareasCategoria[i][0] + " (" + tareasCategoria[i][1] + ")";
    }

    const numTareas = contador;

    contador++;
    const opcAñadir = contador;
    texto += "\n" + opcAñadir + ". Añadir nueva tarea";

    contador++;
    const opcBorrar = contador;
    texto += "\n" + opcBorrar + ". Borrar tarea";

    contador++;
    const opcDeshacer = contador;
    const estadoDeshacer = pilaDeshacer.length > 0 ? "DESHACER" : "DESHACER (Historial vacío)";
    texto += "\n" + opcDeshacer + ". " + estadoDeshacer;

    contador++;
    const opcAtras = contador;
    texto += "\n" + opcAtras + ". Atrás";

    let opcMenu3 = prompt(texto + "\nElige una opcion (ej: 1 o 1,3): ");

    if (opcMenu3 === null || opcMenu3.trim() === '') {
        console.log("Entrada vacía o cancelada. Volviendo a menu2.");
        menu2(categorias);
        return;
    }

    const opcionesSeleccionadas = opcMenu3.split(',');
    const primerElementoNum = Number(opcionesSeleccionadas[0]);


    if (primerElementoNum > 0 && primerElementoNum <= numTareas) {
        const pasoActualUndo = [];
        let tareasCambiadas = 0;

        opcionesSeleccionadas.forEach(optionStr => {
            const optionNum = Number(optionStr);
            if (optionNum > 0 && optionNum <= numTareas) {
                let tareaSeleccionada = tareasCategoria[optionNum - 1];


                if (tareaSeleccionada[1] === "todo") {
                    pasoActualUndo.push([tareaSeleccionada, "todo"]);
                    tareaSeleccionada[1] = "done";
                    tareasCambiadas++;
                    console.log(`Estado de la tarea '${tareaSeleccionada[0]}' cambiado a: done`);
                } else {
                    console.log(`La tarea '${tareaSeleccionada[0]}' ya está marcada como: done (No se registró)`);
                }
            }
        });

        // 3. Si hubo cambios, procesamos la pila
        if (pasoActualUndo.length > 0) {
            if (pilaDeshacer.length >= 5) {
                console.log("Historial de deshacer lleno. Eliminando el paso más antiguo.");
                pilaDeshacer.shift();
            }
            pilaDeshacer.push(pasoActualUndo);
            console.log(`Estado actualizado para ${pasoActualUndo.length} tarea(s). Paso guardado en historial.`);
        } else {
            console.log("No se realizaron cambios de 'todo' a 'done'.");
        }
        menu3(categoriaSeleccionada, categorias);
        return;

    } else if (opcionesSeleccionadas.length === 1) {
        const singleOption = primerElementoNum;

        if (singleOption === opcAñadir) {
            console.log("Opción: Añadir nueva tarea");
            anadirNuevaTarea(categoriaSeleccionada, categorias);
        } else if (singleOption === opcBorrar) {
            console.log("Opción: Borrar tarea");
            borrarTarea(categoriaSeleccionada, tareasCategoria, categorias);
        } else if (singleOption === opcDeshacer) {
            console.log("Opción: Deshacer último paso.");
            if (pilaDeshacer.length > 0) {
                deshacerUltimoPaso();
            } else {
                console.log("No hay pasos para deshacer.");
            }
            menu3(categoriaSeleccionada, categorias);
        } else if (singleOption === opcAtras) {
            console.log("Volviendo a menu2");
            menu2(categorias);
        } else {
            console.log("Opción inválida del menú. Volviendo al menú 2");
            menu2(categorias);
        }

    } else {
        console.log("Opción inválida. Volviendo al menú 2");
        menu2(categorias);
    }
}

function deshacerUltimoPaso() {
    if (pilaDeshacer.length === 0) {
        console.log("No hay acciones a deshacer.");
        return;
    }

    
    const ultimoPaso = pilaDeshacer.pop();

    let tareasRevertidas = 0;

    for (const tareaInfo of ultimoPaso) {
        const tareaArray = tareaInfo[0];
        const estadoAnterior = tareaInfo[1];

        tareaArray[1] = estadoAnterior;

        console.log(`DESHECHO: Tarea '${tareaArray[0]}' devuelta a '${estadoAnterior}'`);
        tareasRevertidas++;
    }

    console.log(`Deshecho completado. ${tareasRevertidas} tarea(s) revertidas a 'todo'.`);
}


function listarCategoriasMenu1(categorias) {
    console.log("======= LISTANDO CATEGORÍAS ========");
    let categoriasListadas = [];
    for (let i = 0; i < categorias.length; i++) {
        categoriasListadas.push(categorias[i]);
    }
    console.table(categoriasListadas);
}

function añadirNuevaCategoria(categorias) {
    let opc;
    let categoriaNew = [];
    do {
        opc = parseInt(prompt("Quieres añadir una nueva Categoria? [si(1) | no(0)]"));
        if (opc === 1) {
            let nombreCategoria = prompt("Introduce el nombre de la nueva categoria");
            categorias.push([nombreCategoria]);
        } else {
            console.log("Saliendo de añadir Nueva categoria del menu 1");
        }
    } while (opc !== 0);
}


function borrarCategoria(categorias) {
    listarCategoriasMenu1(categorias);
    let nameCategoria = prompt("Dime el nombre de la categoria que quieres eliminar");
    let indice = -1;

    for (let i = 0; i < categorias.length; i++) {
        if (categorias[i][0] === nameCategoria) {
            indice = i;
            break;
        }
    }

    if (indice != -1) {
        let categoria = categorias[indice];
        let todasDone = true;

        for (let i = 1; i < categoria.length; i++) {
            if (categoria[i][1] !== "done") {
                todasDone = false;
                break;
            }
        }
        if (todasDone || categoria.length === 1) {
            let borrarSi = parseInt(prompt("¿Deseas borrar la categoria seleccionada? [si(1) | no(0)]"));
            if (borrarSi == 1) {
                console.log("eliminado categoria seleccionada...");
                categorias.splice(indice, 1);
            } else {
                console.log("Entendido no borraremos su categoria");
            }
        } else {
            console.log("No se puede borrar. Hay tareas pendientes (no 'done').");
        }
    } else {
        console.log("Categoría no encontrada.");
    }
}

function listarCategoriasMenu2(categorias) {
    let categoriasListadas = [];
    for (let i = 0; i < categorias.length; i++) {
        categoriasListadas.push(categorias[i]);
    }
    return categoriasListadas;
}

function listarTareasMenu2(categoria) {
    let tareas = [];
    for (let i = 1; i < categoria.length; i++) {
        tareas.push(categoria[i]);
    }
    return tareas;
}

function anadirNuevaTarea(categoriaSeleccionada, categorias) {
    let tareaAñadir;
    let quiereAñadir;

    do {
        let nameTarea = prompt("Dime el nombre de la tarea que quieres añadir (ej: comprar pan):");
        if (nameTarea !== null && nameTarea.trim() !== "") {
            tareaAñadir = [nameTarea.trim(), "todo"];
            categoriaSeleccionada.push(tareaAñadir);
            console.log(`¡Tarea '${nameTarea.trim()}' añadida correctamente!`);
        } else {
            console.log("Error al añadir tarea: el nombre no puede estar vacío o fue cancelado.");
        }

        quiereAñadir = Number(prompt("¿Quieres añadir otra tarea? [Si(1) | No(0)] :"));
    } while (quiereAñadir === 1);

    console.log("Saliendo de añadir Nueva Tarea. Volviendo al Menú 3.");
    menu3(categoriaSeleccionada, categorias);
}

function borrarTarea(categoriaSeleccionada, tareasCategoria, categorias) {
    let texto = "Borrar Tareas \n==========";
    let contador = 0;

    for (let i = 0; i < tareasCategoria.length; i++) {
        contador++;
        texto += "\n" + contador + ". " + tareasCategoria[i][0] + " (" + tareasCategoria[i][1] + ")";
    }

    contador++;
    let opcAtras = contador;
    texto += "\n" + opcAtras + ". Atras (Volver al menú 3)";

    let opcBorrar = Number(prompt(texto + "\nSelecciona el número de la tarea a borrar:"));

    if (opcBorrar == opcAtras) {
        console.log("Cancelando borrar volviendo al menú 3");
        menu3(categoriaSeleccionada, categorias);
        return;
    }

    let numeroTarea = opcBorrar - 1;

    if (opcBorrar > 0 && opcBorrar <= tareasCategoria.length) {
        let nombreTarea = tareasCategoria[numeroTarea][0];
        let quiereBorrar = Number(prompt("¿Estas seguro que quieres borrar la tarea " + nombreTarea + " [SI(1) | NO(0)] :"));

        if (quiereBorrar == 1) {
            categoriaSeleccionada.splice(numeroTarea + 1, 1);
            console.log(nombreTarea + " ha sido eliminada con exito");
        } else {
            console.log("Entendido no borraremos la tarea");
        }
    } else {
        console.log("Opcion invalida");
    }

    menu3(categoriaSeleccionada, categorias);
}
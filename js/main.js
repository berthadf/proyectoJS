alert("Bienvenido/a al primer paso para comer un menú balanceadamente saludable 😋.");

/* Variables Globales - Opciones de Categoría */
const categoria1 = "Pescado 🐟";
const categoria2 = "Carne 🥩";
const categoria3 = "Pollo 🍗";
const categoria4 = "Pasta 🍝";
const categoria5 = "Menestras 🫘";
const categoria6 = "Platos especiales 🍲";
const categoria7 = "Restaurante 👩🏻‍🍳";

/* Variables Globales - Cantidad de Días por Categoría */
let cantidadDias1 = 0;
let cantidadDias2 = 0;
let cantidadDias3 = 0;
let cantidadDias4 = 0;
let cantidadDias5 = 0;
let cantidadDias6 = 0;
let cantidadDias7 = 0;
let cantidadTotalDias = 0;
const diasDeLaSemana = 7;

/* Variables Globales - Nombres de Opciones de Categoría */
let nombreOpcion1 = "\n1. " + categoria1;
let nombreOpcion2 = "\n2. " + categoria2;
let nombreOpcion3 = "\n3. " + categoria3;
let nombreOpcion4 = "\n4. " + categoria4;
let nombreOpcion5 = "\n5. " + categoria5;
let nombreOpcion6 = "\n6. " + categoria6;
let nombreOpcion7 = "\n7. " + categoria7;
let nombreOpcionX = "xx";

/* Función para ingresar Opciones de Categoría */

function ingresaCategoria() {
    let ingreso = 0;
    let ingresar = true;

    while (ingresar) {
        let nombreOpcion = "Aquí te mostramos las categorías de comidas entre las que podrás elegir para completar tus almuerzos de 01 semana 🍴(coloca el número correspondiente a la opción escogida):" + nombreOpcion1 + nombreOpcion2 + nombreOpcion3 + nombreOpcion4 + nombreOpcion5 + nombreOpcion6 + nombreOpcion7 + "\n \nIngresa 0 para terminar la selección de las opciones de categorías.";
        ingreso = prompt(nombreOpcion);

        if (ingreso == 0) {
            ingresar = false;
            return ingreso;
        }
        if (ingreso == 1 && cantidadDias1 > 0) {
            alert("Opción: 1. " + categoria1 + " ya fue utilizada 😓, por favor ingresa una categoría válida.");
            continue;
        }
        if (ingreso == 2 && cantidadDias2 > 0) {
            alert("Opción: 2. " + categoria2 + " ya fue utilizada 😓, por favor ingresa una categoría válida.");
            continue;
        }
        if (ingreso == 3 && cantidadDias3 > 0) {
            alert("Opción: 3. " + categoria3 + " ya fue utilizada 😓, por favor ingresa una categoría válida.");
            continue;
        }
        if (ingreso == 4 && cantidadDias4 > 0) {
            alert("Opción: 4. " + categoria4 + " ya fue utilizada 😓, por favor ingresa una categoría válida.");
            continue;
        }
        if (ingreso == 5 && cantidadDias5 > 0) {
            alert("Opción: 5. " + categoria5 + " ya fue utilizada 😓, por favor ingresa una categoría válida.");
            continue;
        }
        if (ingreso == 6 && cantidadDias6 > 0) {
            alert("Opción: 6. " + categoria6 + " ya fue utilizada 😓, por favor ingresa una categoría válida.");
            continue;
        }
        if (ingreso == 7 && cantidadDias7 > 0) {
            alert("Opción: 7. " + categoria7 + " ya fue utilizada 😓, por favor ingresa una categoría válida.");
            continue;
        }

        if (ingreso <= 7 && ingreso > 0) {
            ingresar = false;
            return ingreso;
        } else {
            alert("Opción: " + ingreso + " es inválida 😓, por favor vuelve a ingresar una categoría dentro de las opciones.");
        }
    }

    return ingreso;
}

/* Función para ingresar Cantidad de Días por Categoría */

function ingresaCantidadDeDias(nombreOpcionX) {
    let ingresar = true;

    while (ingresar) {
        let ingreso = parseInt(prompt(nombreOpcionX));
        let diasRestantes = diasDeLaSemana - cantidadTotalDias;

        /*  Verificar Días Restantes */
        if (diasRestantes >= ingreso) {
            ingresar = false;
            return ingreso;
        } else {
            alert("Error 😓 - Vuelve a ingresar una cantidad de días permitida.");
        }
    }

    return ingreso;
}

/* Ruta Principal */
let ingresoCantidadDeDias = 8;
let nombreOpcion = "Aquí te mostramos las categorías de comidas entre las que podrás elegir para completar tus almuerzos de 01 semana 🍴 (coloca el número correspondiente a la opción escogida):" + nombreOpcion1 + nombreOpcion2 + nombreOpcion3 + nombreOpcion4 + nombreOpcion5 + nombreOpcion6 + nombreOpcion7 + "\n \nIngresa 0 para terminar la selección de las opciones de categorías.";

while (ingresoCantidadDeDias > 0) {
    if (cantidadDias1 > 0) {
        nombreOpcion1 = "  ";
    }
    if (cantidadDias2 > 0) {
        nombreOpcion2 = "  ";
    }
    if (cantidadDias3 > 0) {
        nombreOpcion3 = "  ";
    }
    if (cantidadDias4 > 0) {
        nombreOpcion4 = "  ";
    }
    if (cantidadDias5 > 0) {
        nombreOpcion5 = "  ";
    }
    if (cantidadDias6 > 0) {
        nombreOpcion6 = "  ";
    }
    if (cantidadDias7 > 0) {
        nombreOpcion7 = "  ";
    }

    /* Función Ingresa Opciones de Categoría */
    let ingresoDeCategoria = ingresaCategoria(nombreOpcion);

    if (ingresoDeCategoria == 0) {
        alert("🎉 ¡Felicitaciones completaste tu semana!");
        break;
    }

    let categoriaxx;
    switch (ingresoDeCategoria) {
        case "1":
            categoriaxx = categoria1;
            break;
        case "2":
            categoriaxx = categoria2;
            break;
        case "3":
            categoriaxx = categoria3;
            break;
        case "4":
            categoriaxx = categoria4;
            break;
        case "5":
            categoriaxx = categoria5;
            break;
        case "6":
            categoriaxx = categoria6;
            break;
        case "7":
            categoriaxx = categoria7;
            break;
    }

    alert("Elegiste: " + categoriaxx);
    let diasRestantes = diasDeLaSemana - cantidadTotalDias;
    nombreOpcion = "Ingresa la cantidad de días que deseas comer " + categoriaxx + " durante la semana (Te quedan: 0" + diasRestantes + " días de 07).";

    /* Función Cantidad de Días por Categoría */
    let cantidadEscogida = ingresaCantidadDeDias(nombreOpcion);

    switch (ingresoDeCategoria) {
        case "1":
            cantidadDias1 = cantidadDias1 + cantidadEscogida;
            break;
        case "2":
            cantidadDias2 = cantidadDias2 + cantidadEscogida;
            break;
        case "3":
            cantidadDias3 = cantidadDias3 + cantidadEscogida;
            break;
        case "4":
            cantidadDias4 = cantidadDias4 + cantidadEscogida;
            break;
        case "5":
            cantidadDias5 = cantidadDias5 + cantidadEscogida;
            break;
        case "6":
            cantidadDias6 = cantidadDias6 + cantidadEscogida;
            break;
        case "7":
            cantidadDias7 = cantidadDias7 + cantidadEscogida;
            break;
    }

    cantidadTotalDias = cantidadDias1 + cantidadDias2 + cantidadDias3 + cantidadDias4 + cantidadDias5 + cantidadDias6 + cantidadDias7;
    alert("Ya elegiste " + cantidadTotalDias + " días de la semana.");

    if (cantidadTotalDias == 7) {
        alert("🎉 ¡Felicitaciones completaste tu semana!");
        break;
    }

}

/* Resultado de la ruta */
alert("Estos son las categorías de comidas que elegiste para esta semana: \n\n1. " + categoria1 + " : " + cantidadDias1 + " días. \n2. " + categoria2 + " : " + cantidadDias2 + " días. \n3. " + categoria3 + " : " + cantidadDias3 + " días. \n4. " + categoria4 + " : " + cantidadDias4 + " días. \n5. " + categoria5 + " : " + cantidadDias5 + " días. \n6. " + categoria6 + " : " + cantidadDias6 + " días. \n7. " + categoria7 + " : " + cantidadDias7 + " días.");

alert("Gracias por elegir tus categorías de comidas, para la próxima te daremos recomendaciones de platos de fondo para cada categoría 😋.");

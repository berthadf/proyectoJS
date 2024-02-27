alert("Bienvenido/a al primer paso para comer un menú balanceado y saludable 😋.");

/* Array para Opciones de Categoría */
const categorias = ["Pescado o marisco 🐟", "Carne de res o cerdo 🥩", "Aves 🍗", "Pasta 🍝", "Menestras 🫘", "Platos especiales 🍲", "Restaurante o delivery 👩🏻‍🍳"];

/* Variables Globales - Cantidad de Días por Categoría */
let cantidadDias = [0, 0, 0, 0, 0, 0, 0];
let cantidadTotalDias = 0;
const diasDeLaSemana = 7;

/* Objeto constructor para Platos de Fondo */
function PlatoDeFondo(id, nombre, categoria, preparacion, acompaniamiento, inmediatez, elaboracion, alergia) {
    this.id = id
    this.nombre = nombre;
    this.categoria = categoria;
    this.preparacion = preparacion;
    this.acompaniamiento = acompaniamiento;
    this.inmediatez = inmediatez;
    this.elaboracion = elaboracion
    this.alergia = alergia;
}

/* Lista de Platos de Fondo*/
const platoDeFondo1 = new PlatoDeFondo("1", "ceviche de pescado", categorias[0], "no", "camote", "si", "básica", "no");
const platoDeFondo2 = new PlatoDeFondo("2", "arrimado de atún", categorias[0], "no", "camote", "si", "básica", "no");
const platoDeFondo3 = new PlatoDeFondo("3", "chupe de pescado", categorias[0], "no", "camote", "si", "básica", "no");
const platoDeFondo4 = new PlatoDeFondo("4", "coctel de langostinos", categorias[0], "no", "camote", "si", "básica", "no");
const platoDeFondo5 = new PlatoDeFondo("5", "escabeche", categorias[0], "no", "camote", "si", "básica", "no");
const platoDeFondo6 = new PlatoDeFondo("6", "langostinos con arroz", categorias[0], "no", "arroz", "si", "básica", "no");
const platoDeFondo7 = new PlatoDeFondo("7", "pejerreyes fritos", categorias[0], "no", "camote", "si", "básica", "no");
const platoDeFondo8 = new PlatoDeFondo("8", "albóndigas", categorias[1], "no", "camote", "si", "básica", "no");
const platoDeFondo9 = new PlatoDeFondo("9", "arroz tapado", categorias[1], "no", "camote", "si", "básica", "no");
const platoDeFondo10 = new PlatoDeFondo("10", "asado", categorias[1], "no", "camote", "si", "básica", "no");
const platoDeFondo11 = new PlatoDeFondo("11", "bistec", categorias[1], "no", "camote", "si", "básica", "no");
const platoDeFondo12 = new PlatoDeFondo("12", "chuleta", categorias[1], "no", "camote", "si", "básica", "no");
const platoDeFondo13 = new PlatoDeFondo("13", "apanado", categorias[1], "no", "arroz", "si", "básica", "no");
const platoDeFondo14 = new PlatoDeFondo("14", "enrollado de carne", categorias[1], "no", "camote", "si", "básica", "no");
const platoDeFondo15 = new PlatoDeFondo("15", "ají de gallina", categorias[2], "no", "camote", "si", "básica", "no");
const platoDeFondo16 = new PlatoDeFondo("16", "alitas fritas", categorias[2], "no", "camote", "si", "básica", "no");
const platoDeFondo17 = new PlatoDeFondo("17", "arroz con pollo", categorias[2], "no", "camote", "si", "básica", "no");
const platoDeFondo18 = new PlatoDeFondo("18", "cordon bleu", categorias[2], "no", "camote", "si", "básica", "no");
const platoDeFondo19 = new PlatoDeFondo("19", "estofado de pollo", categorias[2], "no", "camote", "si", "básica", "no");
const platoDeFondo20 = new PlatoDeFondo("20", "guiso de pollo", categorias[2], "no", "arroz", "si", "básica", "no");
const platoDeFondo21 = new PlatoDeFondo("21", "pavo con puré", categorias[2], "no", "camote", "si", "básica", "no");
const platoDeFondo22 = new PlatoDeFondo("22", "capeletti", categorias[3], "no", "camote", "si", "básica", "no");
const platoDeFondo23 = new PlatoDeFondo("23", "ensalada de fideos", categorias[3], "no", "camote", "si", "básica", "no");
const platoDeFondo24 = new PlatoDeFondo("24", "fideos con salsa a lo Alfredo", categorias[3], "no", "camote", "si", "básica", "no");
const platoDeFondo25 = new PlatoDeFondo("25", "fideos con sala de nuez", categorias[3], "no", "camote", "si", "básica", "no");
const platoDeFondo26 = new PlatoDeFondo("26", "fideos con salsa verde", categorias[3], "no", "camote", "si", "básica", "no");
const platoDeFondo27 = new PlatoDeFondo("27", "lasagna de carne", categorias[3], "no", "arroz", "si", "básica", "no");
const platoDeFondo28 = new PlatoDeFondo("28", "ravioles", categorias[3], "no", "camote", "si", "básica", "no");
const platoDeFondo29 = new PlatoDeFondo("29", "trigo con carne", categorias[4], "no", "camote", "si", "básica", "no");
const platoDeFondo30 = new PlatoDeFondo("30", "frejol canario", categorias[4], "no", "camote", "si", "básica", "no");
const platoDeFondo31 = new PlatoDeFondo("31", "frejol rojo", categorias[4], "no", "camote", "si", "básica", "no");
const platoDeFondo32 = new PlatoDeFondo("32", "garbanzos a la vizcaina", categorias[4], "no", "camote", "si", "básica", "no");
const platoDeFondo33 = new PlatoDeFondo("33", "lentejas", categorias[4], "no", "camote", "si", "básica", "no");
const platoDeFondo34 = new PlatoDeFondo("34", "olluco", categorias[4], "no", "arroz", "si", "básica", "no");
const platoDeFondo35 = new PlatoDeFondo("35", "garbanzos", categorias[4], "no", "camote", "si", "básica", "no");
const platoDeFondo36 = new PlatoDeFondo("36", "arroz a la cubana", categorias[5], "no", "camote", "si", "básica", "no");
const platoDeFondo37 = new PlatoDeFondo("37", "arroz chaufa", categorias[5], "no", "camote", "si", "básica", "no");
const platoDeFondo38 = new PlatoDeFondo("38", "locro de zapallo", categorias[5], "no", "camote", "si", "básica", "no");
const platoDeFondo39 = new PlatoDeFondo("39", "pastel de choclo con carne", categorias[5], "no", "camote", "si", "básica", "no");
const platoDeFondo40 = new PlatoDeFondo("40", "pepián de choclo", categorias[5], "no", "camote", "si", "básica", "no");
const platoDeFondo41 = new PlatoDeFondo("41", "saltado de vainitas", categorias[5], "no", "arroz", "si", "básica", "no");
const platoDeFondo42 = new PlatoDeFondo("42", "carapulcra", categorias[5], "no", "camote", "si", "básica", "no");

/* Array para Platos de Fondo*/
const PlatosDeFondo = [platoDeFondo1, platoDeFondo2, platoDeFondo3, platoDeFondo4, platoDeFondo5, platoDeFondo6, platoDeFondo7, platoDeFondo8, platoDeFondo9, platoDeFondo10, platoDeFondo11, platoDeFondo12, platoDeFondo13, platoDeFondo14, platoDeFondo15, platoDeFondo16, platoDeFondo17, platoDeFondo18, platoDeFondo19, platoDeFondo20, platoDeFondo21, platoDeFondo22, platoDeFondo23, platoDeFondo24, platoDeFondo25, platoDeFondo26, platoDeFondo27, platoDeFondo28, platoDeFondo29, platoDeFondo30, platoDeFondo31, platoDeFondo32, platoDeFondo33, platoDeFondo34, platoDeFondo35, platoDeFondo36, platoDeFondo37, platoDeFondo38, platoDeFondo39, platoDeFondo40, platoDeFondo41, platoDeFondo42];

/* Función para ingresar Opciones de Categoría */
function ingresaCategoria() {
    let opcionesDisponibles = categorias
        .map((categoria, i) => {
            if (cantidadDias[i] === 0) {
                return (i + 1) + ". " + categoria;
            }
            return null;
        })
        .filter(opcion => opcion !== null)
        .join('\n');

    let mensaje = "Aquí te mostramos las categorías de comidas entre las que podrás elegir para completar tus almuerzos de 01 semana 🍴 (coloca el número correspondiente a la opción escogida):\n" + opcionesDisponibles + "\n\nIngresa 0 para terminar la selección de las opciones de categorías.";

    while (true) {
        let ingresoCategorias = prompt(mensaje);

        if (ingresoCategorias == 0) {
            return 0;
        }

        let index = ingresoCategorias - 1;

        if (index >= 0 && index < categorias.length && cantidadDias[index] > 0) {
            alert("Opción: " + ingresoCategorias + ". " + categorias[index] + " ya fue utilizada 😓, por favor ingresa una categoría válida.");
        } else if (index >= 0 && index < categorias.length) {
            return ingresoCategorias;
        } else {
            alert("Opción: " + ingresoCategorias + " es inválida 😓, por favor vuelve a ingresar una categoría dentro de las opciones.");
        }
    }
}

/* Función para ingresar Cantidad de Días por Categoría */
function ingresaCantidadDeDias(categoria, diasRestantes) {
    while (true) {
        let ingreso = parseInt(prompt("Ingresa la cantidad de días que deseas comer " + categoria + " durante la semana (Te quedan: 0" + diasRestantes + " días de 07)."));

        if (diasRestantes >= ingreso) {
            return ingreso;
        } else {
            alert("Error 😓 - Vuelve a ingresar una cantidad de días permitida.");
        }
    }
}

/* Ruta Principal para elegir Categorías y Días*/
while (true) {
    let ingresoCategoria = ingresaCategoria();

    if (ingresoCategoria == 0) {
        alert("🎉 ¡Felicitaciones completaste tu semana!");
        break;
    }

    let index = ingresoCategoria - 1;
    let categoriaElegida = categorias[index];
    alert("Elegiste: " + categoriaElegida);

    let diasRestantes = diasDeLaSemana - cantidadTotalDias;
    let cantidadEscogida = ingresaCantidadDeDias(categoriaElegida, diasRestantes);

    cantidadDias[index] += cantidadEscogida;
    cantidadTotalDias += cantidadEscogida;

    alert("Ya elegiste " + cantidadTotalDias + " días de la semana.");

    if (cantidadTotalDias == 7) {
        alert("🎉 ¡Felicitaciones completaste tu semana!");
        break;
    }
}

/* Resultado de la Ruta para elegir Categorías y Días*/
let resultado = "Estos son las categorías de comidas que elegiste para esta semana:\n\n";

for (let i = 0; i < categorias.length; i++) {
    resultado += categorias[i] + ": " + cantidadDias[i] + " días.\n";
}

alert(resultado);

alert("Gracias por elegir tus categorías de comidas, ahora te daremos recomendaciones de platos de fondo en cada categoría para que puedas escogerlos 😋.");

/* Función para ingresar Opciones de Platos de Fondo */
let opcionesPlatosElegidos = [];

for (let i = 0; i < categorias.length; i++) {
    if (cantidadDias[i] > 0 && i !== 6) {
        let platosCategoria = PlatosDeFondo.filter(plato => plato.categoria === categorias[i]);
        let opcionesPlatosCategoria = [];

        for (let j = 0; j < cantidadDias[i]; j++) {
            let mensajePlatosCategoria = "Elige un plato de fondo para " + categorias[i] + "(" + (j + 1) + "/" + cantidadDias[i] + " días):\n";

            for (let k = 0; k < platosCategoria.length; k++) {
                if (!opcionesPlatosCategoria.includes(platosCategoria[k].nombre)) {
                    mensajePlatosCategoria += (k + 1) + ". " + platosCategoria[k].nombre + "\n";
                }
            }

            let opcionPlato = parseInt(prompt(mensajePlatosCategoria));

            if (opcionPlato >= 1 && opcionPlato <= platosCategoria.length) {
                let platoElegido = platosCategoria[opcionPlato - 1].nombre;
                opcionesPlatosCategoria.push(platoElegido);
            } else {
                alert("Opción: " + opcionPlato + " es inválida 😓, por favor vuelve a ingresar un plato de fondo dentro de las opciones.");
                j--;
            }
        }

        opcionesPlatosElegidos.push({
            categoria: categorias[i],
            platos: opcionesPlatosCategoria
        });
    }
}

/* Función para incluir la categoría "Restaurante o delivery" en el resultado final */
opcionesPlatosElegidos.push({
    categoria: categorias[6],
    platos: []
});

/* Resultado de ingresar Opciones de Platos de Fondo */
let resultadoPlatos = "\nEstos son los platos de fondo que elegiste para cada categoría:\n\n";

for (let i = 0; i < opcionesPlatosElegidos.length; i++) {
    let index = categorias.indexOf(opcionesPlatosElegidos[i].categoria);
    resultadoPlatos += opcionesPlatosElegidos[i].categoria + " (" + cantidadDias[index] + " días):\n";
    resultadoPlatos += opcionesPlatosElegidos[i].platos.join("\n") + "\n\n";
}

alert(resultadoPlatos);

alert("Gracias por elegir tus platos de fondo, ¡disfruta de tus comidas balanceadas y saludables! 😋");
/* Constantes */
const contenedorB = document.querySelector("#contenedorB");
const contenedorC = document.querySelector("#contenedorC");
const ingresoBusqueda = document.querySelectorAll("input");
const btnBuscar = document.querySelector("#btnBuscar");
const inputBuscar = ingresoBusqueda[0];
let cantidadDias = 0;

/* Arrays */
const semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
const categorias = ["", "Pescado o marisco 🐟", "Carne de res o cerdo 🥩", "Aves 🍗", "Pasta 🍝", "Menestras o cereales 🫘", "Platos especiales 🍲", "Restaurante o delivery 👩🏻‍🍳", "***  Buscar por plato 🔎  ***"];
const PlatosDeFondo = [
    { id: 1, nombre: "ceviche de pescado", categoria: categorias[1], preparacion: "sí", acompaniamiento: "camote", inmediatez: "sí", elaboracion: "básico", alergia: "no", img: "p01CevicheDePescado.JPG" },
    { id: 2, nombre: "arrimado de atún", categoria: categorias[1], preparacion: "no", acompaniamiento: "arroz", inmediatez: "sí", elaboracion: "básico", alergia: "no", img: "p02ArrimadoDeAtun.JPG" },
    { id: 3, nombre: "chupe de pescado", categoria: categorias[1], preparacion: "no", acompaniamiento: 'choclo', inmediatez: "no", elaboracion: "intermedio", alergia: "sí", img: "p03ChupeDePescado.JPG" },
    { id: 4, nombre: "coctel de langostinos", categoria: categorias[1], preparacion: "sí", acompaniamiento: "no", inmediatez: "sí", elaboracion: "básico", alergia: "sí", img: "p04CoctelDeLangostinos.JPG" },
    { id: 5, nombre: "escabeche", categoria: categorias[1], preparacion: "sí", acompaniamiento: "no", inmediatez: "no", elaboracion: "básico", alergia: "no", img: "p05Escabeche.JPG" },
    { id: 6, nombre: "arroz con langostinos", categoria: categorias[1], preparacion: "no", acompaniamiento: "no", inmediatez: "no", elaboracion: "intermedio", alergia: "sí", img: "p06ArrozConLangostinos.JPG" },
    { id: 7, nombre: "pejerreyes fritos", categoria: categorias[1], preparacion: "sí", acompaniamiento: "puré de papa", inmediatez: "sí", elaboracion: "básico", alergia: "sí", img: "p07PejerreyesFritos.JPG" },
    { id: 8, nombre: "albóndigas", categoria: categorias[2], preparacion: "no", acompaniamiento: "arroz", inmediatez: "no", elaboracion: "intermedio", alergia: "sí", img: "p08Albondigas.JPG" },
    { id: 9, nombre: "arroz tapado", categoria: categorias[2], preparacion: "no", acompaniamiento: "platano frito", inmediatez: "no", elaboracion: "básico", alergia: "no", img: "p09ArrozTapado.JPG" },
    { id: 10, nombre: "asado", categoria: categorias[2], preparacion: "no", acompaniamiento: "puré de papa", inmediatez: "no", elaboracion: "intermedio", alergia: "no", img: "p10Asado.JPG" },
    { id: 11, nombre: "bistec", categoria: categorias[2], preparacion: "sí", acompaniamiento: "papa dorada", inmediatez: "sí", elaboracion: "básico", alergia: "no", img: "p11Bistec.JPG" },
    { id: 12, nombre: "chuleta", categoria: categorias[2], preparacion: "sí", acompaniamiento: "camote", inmediatez: "sí", elaboracion: "básico", alergia: "no", img: "p12Chuleta.JPG" },
    { id: 13, nombre: "apanado", categoria: categorias[2], preparacion: "sí", acompaniamiento: "arroz", inmediatez: "sí", elaboracion: "básico", alergia: "sí", img: "p13Apanado.JPG" },
    { id: 14, nombre: "enrollado de carne", categoria: categorias[2], preparacion: "no", acompaniamiento: "arroz", inmediatez: "no", elaboracion: "intermedio", alergia: "no", img: "p14EnrolladoDeCarne.JPG" },
    { id: 15, nombre: "ají de gallina", categoria: categorias[3], preparacion: "no", acompaniamiento: "arroz", inmediatez: "no", elaboracion: "elaborado", alergia: "sí", img: "p15AjiDeGallina.JPG" },
    { id: 16, nombre: "alitas fritas", categoria: categorias[3], preparacion: "sí", acompaniamiento: "puré de papa", inmediatez: "sí", elaboracion: "básico", alergia: "no", img: "p16AlitasFritas.JPG" },
    { id: 17, nombre: "arroz con pollo", categoria: categorias[3], preparacion: "no", acompaniamiento: "no", inmediatez: "no", elaboracion: "intermedio", alergia: "no", img: "p17ArrozConPollo.JPG" },
    { id: 18, nombre: "cordon bleu", categoria: categorias[3], preparacion: "sí", acompaniamiento: "puré de yuca", inmediatez: "no", elaboracion: "básico", alergia: "sí", img: "p18CordonBleu.JPG" },
    { id: 19, nombre: "estofado de pollo", categoria: categorias[3], preparacion: "no", acompaniamiento: "arroz", inmediatez: "no", elaboracion: "intermedio", alergia: "no", img: "p19EstofadoDePollo.JPG" },
    { id: 20, nombre: "guiso de pollo", categoria: categorias[3], preparacion: "no", acompaniamiento: "arroz", inmediatez: "no", elaboracion: "intermedio", alergia: "no", img: "p20GuisoDePollo.JPG" },
    { id: 21, nombre: "pavo con puré", categoria: categorias[3], preparacion: "no", acompaniamiento: "puré de papa", inmediatez: "no", elaboracion: "intermedio", alergia: "no", img: "p21PavoConPure.JPG" },
    { id: 22, nombre: "capeletti", categoria: categorias[4], preparacion: "no", acompaniamiento: "salsa a la crema", inmediatez: "no", elaboracion: "básico", alergia: "sí", img: "p22Capeletti.JPG" },
    { id: 23, nombre: "ensalada de fideos", categoria: categorias[4], preparacion: "no", acompaniamiento: "no", inmediatez: "sí", elaboracion: "básico", alergia: "sí", img: "p23EnsaladaDeFideos.JPG" },
    { id: 24, nombre: "fideos con salsa a lo Alfredo", categoria: categorias[4], preparacion: "no", acompaniamiento: "queso parmesano", inmediatez: "no", elaboracion: "intermedio", alergia: "sí", img: "p24FideosConSalsaALoAlfredo.JPG" },
    { id: 25, nombre: "fideos con sala de nuez", categoria: categorias[4], preparacion: "no", acompaniamiento: "queso parmesano", inmediatez: "no", elaboracion: "intermedio", alergia: "sí", img: "p25FideosConSalsaDeNuez.JPG" },
    { id: 26, nombre: "fideos con salsa verde", categoria: categorias[4], preparacion: "no", acompaniamiento: "queso parmesano", inmediatez: "no", elaboracion: "intermedio", alergia: "sí", img: "p26FideosConSalsaVerde.JPG" },
    { id: 27, nombre: "lasagna de carne", categoria: categorias[4], preparacion: "no", acompaniamiento: "queso parmesano", inmediatez: "no", elaboracion: "intermedio", alergia: "sí", img: "p27LasagnaDeCarne.JPG" },
    { id: 28, nombre: "ravioles", categoria: categorias[4], preparacion: "no", acompaniamiento: "salsa de tuco", inmediatez: "no", elaboracion: "básico", alergia: "sí", img: "p28Ravioles.JPG" },
    { id: 29, nombre: "trigo con carne", categoria: categorias[5], preparacion: "no", acompaniamiento: "queso fresco", inmediatez: "no", elaboracion: "intermedio", alergia: "sí", img: "p29TrigoConCarne.JPG" },
    { id: 30, nombre: "frejol canario", categoria: categorias[5], preparacion: "no", acompaniamiento: "arroz", inmediatez: "no", elaboracion: "básico", alergia: "no", img: "p30FrejolCanario.JPG" },
    { id: 31, nombre: "frejol rojo", categoria: categorias[5], preparacion: "no", acompaniamiento: "arroz", inmediatez: "no", elaboracion: "básico", alergia: "no", img: "p31FrejolRojo.JPG" },
    { id: 32, nombre: "garbanzos a la vizcaina", categoria: categorias[5], preparacion: "no", acompaniamiento: "arroz", inmediatez: "no", elaboracion: "intermedio", alergia: "no", img: "p32GarbanzosALaVizcaina.JPG" },
    { id: 33, nombre: "lentejas", categoria: categorias[5], preparacion: "no", acompaniamiento: "arroz", inmediatez: "no", elaboracion: "básico", alergia: "no", img: "p33Lentejas.JPG" },
    { id: 34, nombre: "olluco", categoria: categorias[5], preparacion: "no", acompaniamiento: "arroz", inmediatez: "no", elaboracion: "intermedio", alergia: "no", img: "p34Olluco.JPG" },
    { id: 35, nombre: "garbanzos", categoria: categorias[5], preparacion: "no", acompaniamiento: "arroz", inmediatez: "no", elaboracion: "básico", alergia: "no", img: "p35Garbanzos.JPG" },
    { id: 36, nombre: "arroz a la cubana", categoria: categorias[6], preparacion: "sí", acompaniamiento: "platano frito", inmediatez: "sí", elaboracion: "básico", alergia: "no", img: "p36ArrozALaCubana.JPG" },
    { id: 37, nombre: "arroz chaufa", categoria: categorias[6], preparacion: "sí", acompaniamiento: "no", inmediatez: "no", elaboracion: "intermedio", alergia: "no", img: "p37ArrozChaufa.JPG" },
    { id: 38, nombre: "locro de zapallo", categoria: categorias[6], preparacion: "no", acompaniamiento: "arroz", inmediatez: "no", elaboracion: "intermedio", alergia: "sí", img: "p38LocroDeZapallo.JPG" },
    { id: 39, nombre: "pastel de choclo con carne", categoria: categorias[6], preparacion: "no", acompaniamiento: "no", inmediatez: "no", elaboracion: "elaborado", alergia: "no", img: "p39PastelDeChocloConCarne.JPG" },
    { id: 40, nombre: "pepián de choclo", categoria: categorias[6], preparacion: "no", acompaniamiento: "arroz", inmediatez: "no", elaboracion: "intermedio", alergia: "no", img: "p40PepianDeChoclo.JPG" },
    { id: 41, nombre: "saltado de vainitas", categoria: categorias[6], preparacion: "no", acompaniamiento: "arroz", inmediatez: "no", elaboracion: "intermedio", alergia: "no", img: "p41SaltadoDeVainitas.JPG" },
    { id: 42, nombre: "carapulcra", categoria: categorias[6], preparacion: "no", acompaniamiento: "no", inmediatez: "no", elaboracion: "elaborado", alergia: "sí", img: "p42Carapulcra.JPG" },
    { id: 43, nombre: "Lo que se me antoje", categoria: categorias[7], preparacion: "N / A", acompaniamiento: "N / A", inmediatez: "N / A", elaboracion: "N / A", alergia: "N / A", img: "p43LoQueSeMeAntoje.JPG" },
]

/* Lista desplegable de categorias */
const selectCategoria = document.querySelector("#categoria");
categorias.forEach((categoria) => {
    let option = document.createElement("option");
    option.value = categoria;
    option.innerText = categoria;
    selectCategoria.append(option);
});

selectCategoria.addEventListener("change", mostrarInformacion);

/* Lista desplegable de dias de la semana */
const selectDia = document.querySelector("#semana");
semana.forEach((dia) => {
    let option = document.createElement("option");
    option.value = dia;
    option.innerText = dia;
    selectDia.append(option);
});

selectDia.addEventListener("change", (event) => {
    const diaSeleccionado = event.target.value;
    mostrarInformacion(diaSeleccionado);
});

/* Función para crear la lista de platos */
function crearHtmlDeArray(arr, contenedor) {
    contenedor.innerHTML = "";
    let html;
    for (const elemento of arr) {
        html = `
    <div class="col l3">
        <div class="card">
            <img src=" ../img/${elemento.img}" alt="${elemento.nombre}">
            <hr>
            <h3>${elemento.nombre}</h3>
            <p><b>Categoría:</b> ${elemento.categoria} <br/>
            <b>Preparación:</b> ${elemento.preparacion} <br/>
            <b>Acompañamiento:</b> ${elemento.acompaniamiento} <br/>
            <b>Inmediatez:</b> ${elemento.inmediatez} <br/>
            <b>Elaboración:</b> ${elemento.elaboracion} <br/>
            <b>Alergias:</b> ${elemento.alergia} </p>
            <div class="card-action">
                <button class="btn btnAgregar" data-img="${elemento.img}" data-nombre="${elemento.nombre}" data-categoria="${elemento.categoria}">Agregar plato</button>
            </div>
        </div>
    </div>`;
        contenedor.innerHTML += html;
    }
    /* Función para usar el botón agregar */
    const btnAgregar = document.querySelectorAll(`.btnAgregar`)
    btnAgregar.forEach(btn => {
        btn.addEventListener("click", (event) => {
            const img = event.currentTarget.dataset.img;
            const nombre = event.currentTarget.dataset.nombre;
            const categoria = event.currentTarget.dataset.categoria;

            /* Obtener el valor seleccionado del día */
            const diaSeleccionado = selectDia.value;

            /* Función para llenar los días del menú con el plato escogido */
            llenarCaja(diaSeleccionado, { img, nombre, categoria });
        })
    })
}

/* Función para mostrar los platos de la categoría escogida */
function mostrarInformacion() {
    const categoriaSeleccionada = selectCategoria.value;
    let filtrarCategoria = PlatosDeFondo.filter(elemento => elemento.categoria == categoriaSeleccionada);
    crearHtmlDeArray(filtrarCategoria, contenedorC)
}

/* Función de búsqueda */
function buscarPlato(array, filtro) {
    const encontrado = array.filter((elemento) => {
        return elemento.nombre.includes(filtro.toLowerCase());
    });
    return encontrado;
}

/* Función para mostrar los platos resultados de la búsqueda */
btnBuscar.addEventListener("click", () => {
    const encontrado = buscarPlato(PlatosDeFondo, inputBuscar.value);
    crearHtmlDeArray(encontrado, contenedorB);
});

/* Función para llenar información en el menú */
function llenarCaja(dia, informacion) {
    let caja = document.getElementById(dia + '-box');
    caja.innerHTML = `
    <div class="card">
        <img src=" ../img/${informacion.img}" alt="${informacion.nombre}">
        <h3>${informacion.nombre}</h3>
        <p><b>Categoría:</b> ${informacion.categoria} <br/>
        <div class="card-action">
            <button class="btn btnEliminar">Eliminar</button>
        </div>
    </div>`;
    /* Crear un objeto con la información que deseas almacenar */
    const infoParaAlmacenar = {
        img: informacion.img,
        categoria: informacion.categoria,
        nombre: informacion.nombre
    };
    /* Información existente del localStorage */
    const infoExistente = JSON.parse(localStorage.getItem(dia)) || [];
    infoExistente.push(infoParaAlmacenar);
    localStorage.setItem(dia, JSON.stringify(infoExistente));
    mostrarInformacionAlmacenada(dia);
    cantidadDias += 1;
    /* Función para sumar la cantidad de días que se van llenando */
    if (cantidadDias == 0 || cantidadDias >= 7) {
        alert("🎉 ¡Felicitaciones completaste tu semana! 🎉");
    };
}

/* Función para mostrar la información almacenada por día */
function mostrarInformacionAlmacenada(dia) {
    const informacionAlmacenada = JSON.parse(localStorage.getItem(dia)) || [];
    const contenedorDia = document.getElementById(dia + '-box');
    contenedorDia.innerHTML = "";

    informacionAlmacenada.forEach((info, index) => {
        const html = `
            <div class="card">
                <img src="../img/${info.img}" alt="${info.nombre}">
                <h3>${info.nombre}</h3>
                <p><b>Categoría:</b> ${info.categoria} <br/>
                <div class="card-action">
                    <button class="btn btnEliminar" onclick="eliminarInfo('${dia}', ${index})">Eliminar</button>
                </div>
            </div>`;
        contenedorDia.innerHTML += html;
    });
}

/* Declaraciones para mostrar la información almacenada por día*/
document.addEventListener("DOMContentLoaded", function () {
    mostrarInformacionAlmacenada("lunes");
    mostrarInformacionAlmacenada("martes");
    mostrarInformacionAlmacenada("miercoles");
    mostrarInformacionAlmacenada("jueves");
    mostrarInformacionAlmacenada("viernes");
    mostrarInformacionAlmacenada("sabado");
    mostrarInformacionAlmacenada("domingo");
})

/* Función para eliminar información del localStorage */
function eliminarInfo(dia, index) {
    const informacionAlmacenada = JSON.parse(localStorage.getItem(dia)) || [];
    informacionAlmacenada.splice(index, 1);
    localStorage.setItem(dia, JSON.stringify(informacionAlmacenada));
    mostrarInformacionAlmacenada(dia);
    cantidadDias -= 1;
}
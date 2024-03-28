/* Constantes */
const selectCategoria = document.querySelector("#categoria");
const selectDia = document.querySelector("#semana");
const contenedorB = document.querySelector("#contenedorB");
const contenedorC = document.querySelector("#contenedorC");
const ingresoBusqueda = document.querySelectorAll("input");
const btnBuscar = document.querySelector("#btnBuscar");
const inputBuscar = ingresoBusqueda[0];
let cantidadDias = 0;
const API_URL = "../db/db.json"

/* Arrays */
const semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
const categorias = ["", "Pescado o marisco 🐟", "Carne de res o cerdo 🥩", "Aves 🍗", "Pasta 🍝", "Menestras o cereales 🫘", "Platos especiales 🍲", "Restaurante o delivery 👩🏻‍🍳", "***  Buscar por plato 🔎  ***"];

/* Lista desplegable de categorias */
categorias.forEach((categoria) => {
    let option = document.createElement("option");
    option.value = categoria;
    option.innerText = categoria;
    selectCategoria.append(option);
});

/* Agregar eventListener en el desplegable de categoría */
selectCategoria.addEventListener("change", mostrarInformacion);

/* Lista desplegable de dias de la semana */
semana.forEach((dia) => {
    let option = document.createElement("option");
    option.value = dia;
    option.innerText = dia;
    selectDia.append(option);
});

/* Agregar eventListener en el desplegable de semana */
selectDia.addEventListener("change", (event) => {
    const diaSeleccionado = event.target.value;
    mostrarInformacion(diaSeleccionado);
});

/* Función para crear la lista de platos */
const crearHtmlDeArray = (arr, contenedor) => {
    let html;
    for (const elemento of arr) {
        const { nombre, categoria, preparacion, acompaniamiento, inmediatez, elaboracion, alergia, img } = elemento;
        html = `
    <div class="col l3">
        <div class="card">
            <img src=" ../img/${img}" alt="${nombre}">
            <hr>
            <h3>${nombre}</h3>
            <p><b>Categoría:</b> ${categoria} <br/>
            <b>Preparación:</b> ${preparacion} <br/>
            <b>Acompañamiento:</b> ${acompaniamiento} <br/>
            <b>Inmediatez:</b> ${inmediatez} <br/>
            <b>Elaboración:</b> ${elaboracion} <br/>
            <b>Alergias:</b> ${alergia} </p>
            <div class="card-action">
                <button class="btn btnAgregar" data-img="${img}" data-nombre="${nombre}" data-categoria="${categoria}">Agregar plato</button>
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
            const diaSeleccionado = selectDia.value;
            llenarCaja(diaSeleccionado, { img, nombre, categoria });
            scrollToSection("menuSemana")
            contenedorC.innerHTML = "";
            contenedorB.innerHTML = "";
        })
    })
}

/* Función para desplazar la ventana al elemento con el ID especificado */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

/* Función para mostrar los platos de la categoría escogida */
function mostrarInformacion() {
    const categoriaSeleccionada = selectCategoria.value;
    getData(API_URL)
        .then(PlatosDeFondo => {
            let filtrarCategoria = PlatosDeFondo.filter(elemento => elemento.categoria == categoriaSeleccionada);
            contenedorC.innerHTML = "";
            crearHtmlDeArray(filtrarCategoria, contenedorC)
        })
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
    getData(API_URL)
        .then(PlatosDeFondo => {
            const encontrado = buscarPlato(PlatosDeFondo, inputBuscar.value);
            contenedorB.innerHTML = "";
            crearHtmlDeArray(encontrado, contenedorB);
        })
});

/* Función para verificar si todos los dias tienen un plato escogido */
function verificarDiasCompletos() {
    let diasCompletos = 0;
    for (const dia of semana) {
        const menuDia = JSON.parse(localStorage.getItem(dia));
        if (menuDia && menuDia.length > 0) {
            diasCompletos++;
        }
    }
    return diasCompletos;
}

/* Función para borrar contenido cuando termina la interacción*/
function borrarContenido() {
    semana.forEach(dia => {
        const caja = document.getElementById(dia + '-box');
        caja.innerHTML = '';
        localStorage.removeItem(dia);
    });
}

/* Función para mostrar el mensaje de terminó tu semana */
function mostrarMensajeCompleto() {
    const diasCompletos = verificarDiasCompletos();
    if (diasCompletos >= 7) {
        setTimeout(() => {
            Swal.fire({
                title: "🎉 ¡Felicitaciones completaste tu semana! 🎉",
                text: "¿Qué deseas hacer?",
                icon: "success",
                showDenyButton: true,
                confirmButtonColor: "#0a9396",
                denyButtonColor: "#d33",
                confirmButtonText: "Guardar",
                denyButtonText: "Imprimir y borrar",
            }).then((result) => {
                if (result.isConfirmed) {
                    contenedorC.innerHTML = "";
                    Swal.fire({
                        title: "Proximamente podrás guardar tu contenido...",
                        text: "Muchas gracias por confiar en nosotros. Te esperamos pronto 😋",
                        icon: "success",
                        confirmButtonColor: "#0a9396",
                    });
                } else if (result.isDenied) {
                    borrarContenido();
                    contenedorC.innerHTML = "";
                    Swal.fire({
                        title: "Proximamente podrás imprimir tu contenido... 🖨️",
                        text: "Estamos trabajando 🚧",
                        icon: "success",
                        confirmButtonColor: "#0a9396",
                    });
                }
            });
        }, 1500)
    }
}

/* Función para llenar información en el menú */
function llenarCaja(dia, informacion) {
    let caja = document.getElementById(dia + '-box');
    const platoExistente = caja.querySelector('.card');

    /* Verificar si ya hay un plato en la caja del día seleccionado */
    if (platoExistente) {
        Swal.fire({
            title: "Ya hay un plato seleccionado para este día.",
            text: "¿Deseas cambiarlo por el nuevo plato?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0a9396",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, por favor",
            cancelButtonText: "No, me equivoqué",
        }).then((result) => {
            if (result.isConfirmed) {
                const platoAnterior = JSON.parse(localStorage.getItem(dia));
                localStorage.removeItem(dia);
                platoExistente.remove();
                agregarNuevoPlato();
                contenedorB.innerHTML = "";
            }
        });
    } else {
        agregarNuevoPlato();
    }

    /* Función agregar nuevo plato */
    function agregarNuevoPlato() {
        const { nombre, categoria, img } = informacion;
        caja.innerHTML = `
        <div class="card">
            <img src=" ../img/${img}" alt="${nombre}">
            <h3>${nombre}</h3>
            <p><b>Categoría:</b> ${categoria} <br/>
            <div class="card-action">
                <button class="btn btnEliminar">Eliminar</button>
            </div>
        </div>`;

        /* Información que se almacena */
        const infoParaAlmacenar = {
            img: img,
            categoria: categoria,
            nombre: nombre,
        };

        /* Información existente en el localStorage */
        const infoExistente = JSON.parse(localStorage.getItem(dia)) || [];
        infoExistente.push(infoParaAlmacenar);
        localStorage.setItem(dia, JSON.stringify(infoExistente));
        mostrarInformacionAlmacenada(dia);
        cantidadDias += 1;

        mostrarMensajeCompleto();

        Toastify({
            text: `Se agregó ${nombre} para el ${dia}`,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                background: "#0a9396",
            },
        }).showToast();
    }
}

/* Función para mostrar la información almacenada por día */
function mostrarInformacionAlmacenada(dia) {
    const informacionAlmacenada = JSON.parse(localStorage.getItem(dia)) || [];
    const contenedorDia = document.getElementById(dia + '-box');
    contenedorDia.innerHTML = "";

    informacionAlmacenada.forEach((info, index) => {
        const { nombre, categoria, img } = info
        const html = `
            <div class="card">
                <img src="../img/${img}" alt="${nombre}">
                <h3>${nombre}</h3>
                <p><b>Categoría:</b> ${categoria} <br/>
                <div class="card-action">
                    <button class="btn btnEliminar">Eliminar</button>
                </div>
            </div>`;
        contenedorDia.innerHTML += html;
    });

    /* Agregar eventListener en el botón de eliminar */
    contenedorDia.querySelectorAll('.btnEliminar').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            eliminarInfo(dia, index);
        });
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

/* Para colocar el año */
const hoy = new Date();
const anho = document.getElementById("anho");
anho.innerHTML = hoy.getFullYear();

/* Función para obtener datos de DB local */
async function getData(url) {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos.PlatosDeFondo;
}
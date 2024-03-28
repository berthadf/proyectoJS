const imagenFondo = document.querySelector(".bg-box");
const fondos = ["fondoAves.jpg", "fondoCarne.jpg", "fondoMenestras.jpg", "fondoPasta.jpg", "fondoPescado.jpg", "fondoPlatosEspeciales.jpg"]

function cambiarImagen(backgrounds) {
    let random = Math.floor(Math.random() * backgrounds.length)
    imagenFondo.setAttribute("src", `../img/bg/${fondos[random]}`)
}
window.onload = cambiarImagen(fondos)

/* Para colocar el año */
const hoy = new Date();
const anho = document.getElementById("anho");
anho.innerHTML = hoy.getFullYear();

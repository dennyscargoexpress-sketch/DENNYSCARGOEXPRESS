// script.js
function mostrarMensaje() {
  alert("¡Hola Joel! Este es un botón interactivo.");
}

function buscar(event) {
  event.preventDefault();
  const texto = document.getElementById("busqueda").value;
  document.getElementById("resultado").innerText = "Buscaste: " + texto;
}

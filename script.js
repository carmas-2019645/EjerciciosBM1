// Función para mostrar la descripción
function mostrarDescripcion(titulo, texto) {
    var overlay = document.getElementById('descripcion-overlay');
    var contenedor = document.getElementById('descripcion-contenedor');
    var tituloDescripcion = document.getElementById('descripcion-titulo');
    var textoDescripcion = document.getElementById('descripcion-texto');

    // Mostrar overlay y contenedor
    overlay.style.display = 'block';
    contenedor.style.display = 'block';

    // Asignar título y texto de la descripción
    tituloDescripcion.textContent = titulo;
    textoDescripcion.textContent = texto;
}

// Función para ocultar la descripción
function ocultarDescripcion() {
    var overlay = document.getElementById('descripcion-overlay');
    var contenedor = document.getElementById('descripcion-contenedor');

    // Ocultar overlay y contenedor
    overlay.style.display = 'none';
    contenedor.style.display = 'none';
}

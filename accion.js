// Esperar a que el documento esté completamente cargado antes de ejecutar el JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón por su ID
    var saludo = document.getElementById("saludo");

    // Agregar un evento de clic al botón
    saludo.addEventListener("click", function() {
        // Cambiar el texto del botón a "Hola"
        saludo.textContent = "Como vaa";
    });
});



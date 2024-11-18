$(document).ready(function () {
    // Función para ocultar la imagen
    $('#btnOcultar').click(function () {
        $('#imagen').hide(); // Oculta la imagen
        $('#titulo').text('¡No tenemos ninguna imagen!'); // Cambia el título
    });

    // Función para mostrar la imagen
    $('#btnMostrar').click(function () {
        $('#imagen').show(); // Muestra la imagen
        $('#titulo').text('¡Mirá la siguiente imagen!'); // Cambia el título
    });
});

// Se asegura de que el código se ejecute una vez que el contenido de la página esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {

    // Cambio de modo claro/oscuro con almacenamiento local
    const toggleBtn = document.getElementById('bot_oscuro_claro'); // Selecciona el botón que cambia el modo claro/oscuro

    // Verifica si el modo oscuro está guardado en el almacenamiento local
    if (localStorage.getItem('modo') === 'oscuro') {
        // Si el modo oscuro está activado, agrega la clase 'modo-oscuro' al body
        document.body.classList.add('modo-oscuro');
    }

    // Añadir un evento al botón para alternar entre los modos
    toggleBtn.addEventListener('click', function () {
        // Alterna la clase 'modo-oscuro' en el body
        document.body.classList.toggle('modo-oscuro');
        
        // Verifica si el body tiene la clase 'modo-oscuro' activada
        if (document.body.classList.contains('modo-oscuro')) {
            // Si está activado el modo oscuro, guarda 'oscuro' en el almacenamiento local
            localStorage.setItem('modo', 'oscuro');
        } else {
            // Si no está activado el modo oscuro, guarda 'claro' en el almacenamiento local
            localStorage.setItem('modo', 'claro');
        }
    });
});

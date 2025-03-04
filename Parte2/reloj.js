// Espera a que el contenido del DOM se haya cargado completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
    
    // Función para actualizar el reloj
    function actualizarReloj() {
        // Obtiene el elemento del DOM donde se mostrará la hora
        const relojDiv = document.getElementById('reloj');
        
        // Crea un nuevo objeto Date para obtener la fecha y hora actual
        const fecha = new Date();
        
        // Obtiene las horas, minutos y segundos actuales
        let horas = fecha.getHours();
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();
        
        // Asegura que las horas, minutos y segundos siempre tengan dos dígitos (añade un '0' si es menor que 10)
        horas = horas < 10 ? '0' + horas : horas;
        minutos = minutos < 10 ? '0' + minutos : minutos;
        segundos = segundos < 10 ? '0' + segundos : segundos;
        
        // Establece el texto del elemento con el formato de hora actual
        relojDiv.textContent = `${horas}:${minutos}:${segundos}`;
    }

    // Llama a la función 'actualizarReloj' cada segundo (1000 milisegundos)
    setInterval(actualizarReloj, 1000);
    
    // Llama a la función 'actualizarReloj' inmediatamente al cargar la página, para que se muestre el reloj sin esperar al primer intervalo
    actualizarReloj();
});

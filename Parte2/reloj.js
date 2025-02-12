
document.addEventListener('DOMContentLoaded', function () {
    // Función para actualizar el reloj
    function actualizarReloj() {
        const relojDiv = document.getElementById('reloj');
        const fecha = new Date();
        let horas = fecha.getHours();
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();
        horas = horas < 10 ? '0' + horas : horas;
        minutos = minutos < 10 ? '0' + minutos : minutos;
        segundos = segundos < 10 ? '0' + segundos : segundos;
        relojDiv.textContent = `${horas}:${minutos}:${segundos}`;
    }
    setInterval(actualizarReloj, 1000);
    actualizarReloj();  // Mostrar el reloj al cargar la página
});